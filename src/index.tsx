import ReactDOM from 'react-dom/client'
import { store } from './store/index.ts';
import { Provider } from 'react-redux';
import App from './components/app/app.tsx';
import { fetchWeather } from './store/api-action.ts';
import { translationCities } from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

translationCities.map((city) => store.dispatch(fetchWeather({city: city.name})))

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
