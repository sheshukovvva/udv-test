import { createAction } from "@reduxjs/toolkit";
import { WeatherWidgetType } from "../types/weather-widget";
import { WeatherType } from "../types/weather";

export const addWeather = createAction<WeatherType>('app/data/weather')

export const addWidgetFirstBlock = createAction<WeatherWidgetType>('app/firstBlock/addWidget')

export const addWidgetSecondBlock = createAction<WeatherWidgetType>('app/secondBlock/addWidget')

export const addWidgetThirdBlock = createAction<WeatherWidgetType>('app/thirdBlock/addWidget')

export const changeWidgetFirstBlock = createAction<WeatherWidgetType>('app/firstBlock/changeWidget')

export const changeWidgetSecondBlock = createAction<WeatherWidgetType>('app/secondBlock/changeWidget')

export const changeWidgetThirdBlock = createAction<WeatherWidgetType>('app/thirdBlock/changeWidget')

export const deleteWidgetFirstBlock = createAction<WeatherWidgetType>('app/firstBlock/deleteWidget')

export const deleteWidgetSecondBlock = createAction<WeatherWidgetType>('app/secondBlock/deleteWidget')

export const deleteWidgetThirdBlock = createAction<WeatherWidgetType>('app/thirdBlock/deleteWidget')
