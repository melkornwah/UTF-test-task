import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, setUser } from './store/store';

import Header from './components/Header';
import Main from './components/Main';

import { mockUser } from './data/mockData';

import './App.css';

function App() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      store.dispatch(setUser(mockUser));
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

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
