import logo from "../assets/img/logo.svg";

export function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <h1>Jobber</h1>
      </div>
    </header>
  );
}
