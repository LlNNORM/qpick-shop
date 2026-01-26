import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import './headphones-list-item.css'

const HeadphonesListItem = ({img, title, price, rate, id}) => {

    const {onPurchase} = useContext(BasketContext)

    return (
                    <div className="headphones__item">
                        <div className="headphones__item-img">
                            <img src={img} alt="headphones"/>
                        </div>
                        <div className="headphones__item-descr">
                            <div className="headphones__item-descr-name">{title}</div>
                            <div className="headphones__item-descr-price">{`${price} ₽`}</div>
                            <div className="headphones__item-descr-rating">
                                <img src="./icons/star.svg" alt="star"/>
                                <div>{rate}</div>
                            </div>
                            <button onClick ={()=>onPurchase(id)} className="headphones__item-descr-btn">Купить</button>
                        </div>
                </div>
    )
}

export default HeadphonesListItem;