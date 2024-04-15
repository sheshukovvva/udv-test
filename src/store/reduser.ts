import { createReducer } from "@reduxjs/toolkit";
import { WeatherWidgetType } from "../types/weather-widget";
import { WeatherType } from "../types/weather";
import { 
  addWeather,
  addWidgetFirstBlock,
  addWidgetSecondBlock,
  addWidgetThirdBlock,
  changeWidgetFirstBlock,
  changeWidgetSecondBlock,
  changeWidgetThirdBlock,
  deleteWidgetFirstBlock,
  deleteWidgetSecondBlock,
  deleteWidgetThirdBlock
} from "./action";

type InitialState = {
  weahers: WeatherType[],
  firstBlock: WeatherWidgetType[],
  secondBlock: WeatherWidgetType[],
  thirdBlock: WeatherWidgetType[]
}

const initialState : InitialState = {
  weahers: [],
  firstBlock: [],
  secondBlock: [],
  thirdBlock: []
}

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(addWeather, (state, action) => {
    state.weahers = [action.payload, ...state.weahers]
  })
  .addCase(addWidgetFirstBlock, (state, action) => {
    state.firstBlock = [action.payload, ...state.firstBlock]
  })
  .addCase(addWidgetSecondBlock, (state, action) => {
    state.secondBlock = [action.payload, ...state.secondBlock]
  })
  .addCase(addWidgetThirdBlock, (state, action) => {
    state.thirdBlock = [action.payload, ...state.thirdBlock]
  })
  .addCase(changeWidgetFirstBlock, (state, action) => {
    state.firstBlock = [action.payload, ...state.firstBlock.filter((widget) => widget.id !== action.payload.id)]
  })
  .addCase(changeWidgetSecondBlock, (state, action) => {
    state.secondBlock = [action.payload, ...state.secondBlock.filter((widget) => widget.id !== action.payload.id)]
  })
  .addCase(changeWidgetThirdBlock, (state, action) => {
    state.thirdBlock = [action.payload, ...state.thirdBlock.filter((widget) => widget.id !== action.payload.id)]
  })
  .addCase(deleteWidgetFirstBlock, (state, action) => {
    state.firstBlock = [...state.firstBlock.filter((widget) => widget.id !== action.payload.id)]
  })
  .addCase(deleteWidgetSecondBlock, (state, action) => {
    state.secondBlock = [...state.secondBlock.filter((widget) => widget.id !== action.payload.id)]
  })
  .addCase(deleteWidgetThirdBlock, (state, action) => {
    state.thirdBlock = [...state.thirdBlock.filter((widget) => widget.id !== action.payload.id)]
  })
})