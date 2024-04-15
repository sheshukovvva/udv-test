import { WeatherWidgetType } from "../../types/weather-widget"
import WeatherWidget from "../widget/weather-widget"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { UseAddWidgerAction } from "../../hooks/action"

type BlockProps = {
  id: string,
  widgets: WeatherWidgetType[]
}

export default function Block({widgets, id}: BlockProps): JSX.Element {
  const dispatch = useAppDispatch()
  const weathers = useAppSelector((state) => state.weahers)
  const [isBlockEdit, setEditBlock]: [boolean, (value: boolean) => void] = useState(false)

  const setButtonClass = (isDisabled: boolean) => {
    if (isDisabled) {
      return "btn btn-dsbld"
    }
  
    return "btn btn-cta"
  }

  const randomId = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  };

  const addWidget = () => {
    const widget: WeatherWidgetType = {
      id: randomId(10), 
      weather: weathers[0]
    }

    setEditBlock(!isBlockEdit)
    UseAddWidgerAction(id, widget, dispatch)
  }

  return (
    <div className="block">
      <div className="title-block">Блок {id}</div>
      <button className={setButtonClass(isBlockEdit)} disabled={isBlockEdit} onClick={() => addWidget()}>
        Добавить виджет
      </button>
      {widgets && widgets.map((widget) => <WeatherWidget 
        key={widget.id} 
        widget={widget} 
        isEditorBlock = {isBlockEdit}
        setEditorBlock={setEditBlock}
        id={id}/>)}
    </div>
  )
}