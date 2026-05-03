import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Ярослав Черненко | НУБіП</p>
      <div className="socials">
        {/* Заміни посилання на свої */}
        <a href="https://github.com/твоє-імя" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://t.me/твій-телеграм" target="_blank" rel="noreferrer"><FaTelegram /></a>
      </div>
    </footer>
  );
};

export default Footer;