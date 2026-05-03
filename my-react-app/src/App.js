import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import './App.css';

function App() {
  // Бонус: збереження теми в localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app-container">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="content">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;