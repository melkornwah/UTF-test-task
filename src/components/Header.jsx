import { useSelector } from 'react-redux';

import { selectUser } from '../store/store';

function Header() {
  const user = useSelector(selectUser);

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
