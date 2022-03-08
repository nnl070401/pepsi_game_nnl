import React from 'react';
import RootNavigator from './src/components/Navigations/RootNavigator';
import { synthetic } from './src/redux/synthetic';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={synthetic}>
      <RootNavigator/>
    </Provider>
  );
};

export default App;
