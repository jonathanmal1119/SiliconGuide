import './styles/Header.css';

const Header = ({currPlan}) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-icon">
           <img src="/logo.svg" alt="Silicon Guide Logo" width="32" height="32" />
        </div>
        <h2 className="site-title">Silicon Guide</h2>
      </div>
      <div className='header-right'>
         <span>Total Watts: {}W</span>
         <span>Total price: ${}</span>
      </div>
    </header>
  );
};

export default Header