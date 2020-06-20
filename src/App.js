import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';

import PingStatus from './ping/PingStatus';
import PingButton from './ping/PingButton';

const App = () => {
  return (
    <Provider store={store}>
        <PingStatus/>
        <PingButton/>
    </Provider>
  );
}

export default App;
