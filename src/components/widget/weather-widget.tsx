import { WeatherWidgetType } from "../../types/weather-widget"
import { WeatherType } from "../../types/weather"
import { translationCities } from "../../const"
import { useState } from "react"
import { useAppSelector } from "../../hooks/store"
import { useAppDispatch } from "../../hooks/store"
import { UseChangeWidgetAction, UseDeleteWidgetAction } from "../../hooks/action"
import { convertKelvinToCelsius } from "../../utils"

type WeatherWidgetProps = {
  widget: WeatherWidgetType
  isEditorBlock: boolean
  setEditorBlock: (value: boolean) => void
  id: string
}

export default function WeatherWidget({widget, isEditorBlock, setEditorBlock, id}: WeatherWidgetProps): JSX.Element {
  const dispatch = useAppDispatch()
  const weathers = useAppSelector((state) => state.weahers)
  const [isEditorWidget, setEditorWidget] = useState(true);
  const [widgetInfo, setWidgetInfo]: [WeatherWidgetType, (weather: WeatherWidgetType) => void] = useState(widget)

  const changeCity = (newCity: string) => {
    const newWeather = weathers.find(({name}) => name === newCity) as WeatherType
    if (newWeather) {
      setWidgetInfo({weather: newWeather, id: widget.id})
    }
  }

  const saveWidget = () => {
    setEditorWidget(false)
    setEditorBlock(false)
    UseChangeWidgetAction(id, widgetInfo, dispatch)
  }

  const editWidget = () => {
    if (!isEditorBlock) {
      setEditorWidget(true)
      setEditorBlock(true)
    }
  }

  const deleteWidget = () => {
    setEditorWidget(false)
    setEditorBlock(false)
    UseDeleteWidgetAction(id, widgetInfo, dispatch)
  }

  const transaleteCity = () => {
    const currentThanslate = translationCities.find((city) => {
      if (city.name === widgetInfo.weather.name) {
        return city
      }
    })

    if (currentThanslate){
      return currentThanslate.prepositionalCase
    }

    return ''
  }

  const getIcon = () => {
    switch (widgetInfo.weather.weather[0].main) {
      case "Rain":
        return "icon-L icon-Rain"
        break
      case "Clear":
        return "icon-L icon-Sunny"
        break
      case "Clouds":
          return "icon-L icon-Cloudy"
          break
      default:
        return "icon-L icon-Thunderstorm"
    }
  }

  if (isEditorWidget) {
    return(
      <div className="widget edit">
        <div className="top">
          <div className="title-widget">Погода на сегодня</div>
          <div className="icon hover" onClick={() => saveWidget()}>
            <i className="icon-S icon-Save"/>
          </div>
          <div className="icon hover" onClick={() => deleteWidget()}>
            <i className="icon-S icon-Close"/>
          </div>
        </div>
        <div className="weather">
          <div className="icon">
            <i className="icon-M icon-Map_Pin" />
          </div>
          <select className="city-selector" required={true} name="city" onChange={(evt) => changeCity(evt.target.value)}>
            {translationCities.map((city) => <option key={city.name} value={city.name} selected={widgetInfo.weather.name === city.name}>{city.translate}</option>)}
          </select>
        </div>
      </div>
    )
  }

  return(
    <div className="widget">
      <div className="top">
        <div className="title-widget">Погода в {transaleteCity()}</div>
        <div className="icon hover">
          <i className="icon-S icon-Arrow_Left_Right" />
        </div>
        <div className="icon hover" onClick={() => editWidget()}>
          <i className="icon-S icon-Edit_Pencil"/>
        </div>
        <div className="icon hover" onClick={() => deleteWidget()}>
          <i className="icon-S icon-Close"/>
        </div>
      </div>
      <div className="weather">
        <div className="icon">
          <i className={getIcon()} />
        </div>
        <div className="weather-params">
          <div className="temp">{convertKelvinToCelsius(widgetInfo.weather.main.temp)} °C</div>
          <div className="params-item">
            <div className="temp-border">
              <div className="icon">
                <i className="icon-S icon-Arrow_Down temp-min" />
              </div>
              <div className="temp temp-min">{convertKelvinToCelsius(widgetInfo.weather.main.temp_min)} °</div>
            </div>
            <div className="temp-border">
              <div className="icon">
                <i className="icon-S icon-Arrow_Up temp-max" />
              </div>
              <div className="temp temp-max">{convertKelvinToCelsius(widgetInfo.weather.main.temp_max)} °</div>
            </div>
          </div>
          <div className="params-item">
            <div className="icon">
              <i className=" icon-S icon-Humidity" />
            </div>
            <div className="humidity">{widgetInfo.weather.main.humidity} %</div>
          </div>
        </div>
      </div>
    </div>
  )
}