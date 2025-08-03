import './styles/Header.css';

const Header = ({currPlan}) => {
  const { totalPrice, totalWattage } = Object.values(currPlan)
    .filter(data => data !== null)
    .reduce(
      (acc, data) => {
        acc.totalPrice += data.part.price;
        acc.totalWattage += data.part.wattage;
        return acc;
      },
      { totalPrice: 0, totalWattage: 0 }
    );
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-icon">
           <img src="/logo.svg" alt="Silicon Guide Logo" width="32" height="32" />
        </div>
        <h2 className="site-title">Silicon Guide</h2>
      </div>
      <div className='header-right'>
         <span>Total Price: ${totalPrice.toFixed(2)}</span>
        <span>Total Wattage: {totalWattage}W</span>
      </div>
    </header>
  );
};

export default Header


