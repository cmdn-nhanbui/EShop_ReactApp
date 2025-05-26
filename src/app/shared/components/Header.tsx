import { UserIcon } from "./Icons";

export const Header = ({}) => {
  const logoStyles: React.CSSProperties & Record<string, string> = {
    "--default-logo": "url('../../assests/images/Logo.png')",
    "--dark-logo": "url('../../assests/images/Logo-dark.png')",
  };

  return (
    <header className="header">
      <div className="container flex justify-between header-container">
        <div className="logo-container">
          <a href="/01_Common-Basic/HTML/cmdn-nhanbui/">
            <h1>
              <div style={logoStyles} className="logo-image"></div>
            </h1>
          </a>
        </div>
        <nav className="flex items-center">
          <ul className="nav-container flex justify-between">
            <li className="nav-item">
              <a href="/men">Men</a>
            </li>
            <li className="nav-item">
              <a href="/women">Women</a>
            </li>
            <li className="nav-item">
              <a href="/kids">Kids</a>
            </li>
          </ul>
        </nav>

        <div className="options-container flex items-center">
          <ul className="option-list flex items-center">
            <li>
              <button className="flex items-center justify-center"></button>
            </li>
            <li>
              <a href="/01_Common-Basic/HTML/cmdn-nhanbui/cart.html">
                <button className="flex items-center justify-center"></button>
              </a>
            </li>
            <li>
              <button className="flex items-center justify-center">
                <UserIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
