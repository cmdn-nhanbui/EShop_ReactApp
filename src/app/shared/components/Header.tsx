import { CartIcon, SearchIcon, UserIcon } from "./Icons";

export const Header = ({}) => {
  return (
    <header className="header">
      <div className="container flex justify-between header-container">
        <div className="logo-container">
          <a href="/01_Common-Basic/HTML/cmdn-nhanbui/">
            <h1>
              <div className="logo-image"></div>
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
              <button className="flex items-center justify-center">
                <SearchIcon className="option-icon" color="inherit" />
              </button>
            </li>
            <li>
              <a href="/01_Common-Basic/HTML/cmdn-nhanbui/cart.html">
                <button className="flex items-center justify-center">
                  <CartIcon
                    className="option-icon"
                    color="inherit"
                    width={24}
                    height={24}
                  />
                </button>
              </a>
            </li>
            <li>
              <button className="flex items-center justify-center">
                <UserIcon className="option-icon" color="inherit" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
