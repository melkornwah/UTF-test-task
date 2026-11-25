import { Provider } from 'react-redux';
import { store } from './store/store';

import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
