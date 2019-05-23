import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import { createBrowserHistory } from 'history';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

const history = createBrowserHistory();
let persistor = persistStore(store);

class App extends React.Component {

  render () {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <Routes />
            </Router>
          </PersistGate>
        </Provider>
      </LocaleProvider>
    )
  }
}

export default App;

