import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import Login from "./Login";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();     
        }
    }
return <nav className="header">
            {/* logo on the left */}
            <Link to="/">
            <img className="header__logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ93rgDoRTxiYyAjTWQO9MUgLOHmu85n2af1A&usqp=CAU"></img>
            </Link>
            {/* Search Bar */}
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            </div>
            {/*Links on the right */}
            <div className="header__nav">
            {/*Link1 */}
            <Link to={!user && "/"} className="header__link">
            <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email},</span>
            <Link className="header__login" to="/login">Logout</Link>
            </div>
            {/*Link2 */}
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Please,</span>
            <Link className="header__login" to="/login">Login</Link>
            </div>
            {/*Link3 */}
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Cart</span>
            </div>
            </Link>
            </div>
            {/*basket icon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </nav>
}

export default Header
