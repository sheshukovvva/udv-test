export type WeatherType = {                    
  weather: [
    {
      main: string,
    }
  ],
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
  },
  name: string
}                        