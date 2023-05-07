import React from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import rootReducer from './slices';
import TodoApp from './components/TodoApp';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
