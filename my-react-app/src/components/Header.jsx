import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="logo">Ярослав Черненко</div>
      <nav className="nav-links">
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Про мене</NavLink>
        <NavLink to="/my-city" className={({ isActive }) => isActive ? "active" : ""}>Моє місто</NavLink>
        <NavLink to="/my-future" className={({ isActive }) => isActive ? "active" : ""}>Мій розвиток</NavLink>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle" title="Змінити тему">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Header;