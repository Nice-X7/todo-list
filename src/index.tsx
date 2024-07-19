import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/index';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);