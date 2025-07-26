import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-icon">
           <img src="/logo.svg" alt="Silicon Guide Logo" width="32" height="32" />
        </div>
        <h2 className="site-title">Silicon Guide</h2>
      </div>
    </header>
  );
};

export default Header