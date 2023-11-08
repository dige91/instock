import Logo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="navigation">
            <div className="navigation-header">
                <Link to="/">
                    <img src={Logo} alt="instock logo"></img>
                </Link>
                <div className="navigation-header__container">
                    <Link to="/WarehouseList" className="navigation-header__link">
                        Warehouses
                    </Link>
                    <Link to="/InventoryList" className="navigation-header__link">
                        Inventory
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;