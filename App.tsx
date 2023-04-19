import React from 'react';
import {Provider} from 'react-redux';

import {store} from 'src/core/store';
import AppNavigator from 'src/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
