import './app-header.css';
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import { Link } from 'react-router-dom';

function Header() {

    const {count} = useContext(BasketContext)

    return ( 
    <header>
        <div className ="header__wrapper">
                <h1><Link to="/">QPICK</Link></h1>
                <div>
                    <div className = 'header__img_favourite'>
                        <Link to="favourite"><img  src="icons/heart.svg" alt="heart"/></Link>
                    </div>
                    <div className = 'header__img_basket' aftercontent={count}>
                        <Link to="basket"><img  src="icons/basket.svg" alt="basket"/></Link>
                    </div>
                </div>
        </div>
    </header>
    )
}

export default Header;