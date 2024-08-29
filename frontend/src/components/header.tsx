import logo from "../assets/img/logo.svg";
import "../css/header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
        <h1>Jobber</h1>
      </div>
    </header>
  );
};
