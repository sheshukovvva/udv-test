import { WeatherWidgetType } from "../types/weather-widget";
import { AppDispatch } from "../types/state";
import { 
  addWidgetFirstBlock,
  addWidgetSecondBlock,
  addWidgetThirdBlock,
  changeWidgetFirstBlock,
  changeWidgetSecondBlock,
  changeWidgetThirdBlock,
  deleteWidgetFirstBlock,
  deleteWidgetSecondBlock, 
  deleteWidgetThirdBlock
} from "../store/action";

export const UseDeleteWidgetAction = (id: string, widget: WeatherWidgetType, dispatch: AppDispatch) => {
  switch (id) {
    case "1": 
      dispatch(deleteWidgetFirstBlock(widget))
      break;
    case "2":
      dispatch(deleteWidgetSecondBlock(widget))
      break;
    case "3":
      dispatch(deleteWidgetThirdBlock(widget))
      break;
  }
}

export const UseChangeWidgetAction = (id: string, widget: WeatherWidgetType, dispatch: AppDispatch) => {
  switch (id) {
    case "1": 
      dispatch(changeWidgetFirstBlock(widget))
      break;
    case "2":
      dispatch(changeWidgetSecondBlock(widget))
      break;
    case "3":
      dispatch(changeWidgetThirdBlock(widget))
      break;
  }
}

export const UseAddWidgerAction = (id: string, widget: WeatherWidgetType, dispatch: AppDispatch) => {
  switch (id) {
    case "1": 
      dispatch(addWidgetFirstBlock(widget))
      break;
    case "2":
      dispatch(addWidgetSecondBlock(widget))
      break;
    case "3":
      dispatch(addWidgetThirdBlock(widget))
      break;
  }
}