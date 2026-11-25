import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/store';

import { mockUser } from '../data/mockData';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setUser(mockUser));
    }, 500);
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? (
          <span>Привет, {user.name}!</span>
        ) : (
          <span>Загрузка...</span>
        )}
      </div>
    </header>
  );
};

export default Header;
