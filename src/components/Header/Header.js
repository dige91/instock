import Logo from "../../assets/logo/InStock-Logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="navigation">
            <div className="navigation-header">
                <Link className='navigation-header__logo' to="/">
                    <img src={Logo} alt="instock logo"></img>
                </Link>
                <div className="navigation-header__container">
                    <Link to="/" className="navigation-header__link">
                        Warehouses
                    </Link>
                    <Link to="/inventory" className="navigation-header__link">
                        Inventory
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;