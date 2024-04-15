import { AppDispatch, State } from "../types/state";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { WeatherType } from "../types/weather";
import { addWeather } from "./action";

export const fetchWeather = createAsyncThunk<void, {city: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchWeather',
  async ({city}, {dispatch, extra: api}) => {
    const {data} = await api.get<WeatherType>(`/data/2.5/weather?q=${city}&appid=80f2567899603c894ac66f210acbdc88`);
    dispatch(addWeather(data));
  }
);