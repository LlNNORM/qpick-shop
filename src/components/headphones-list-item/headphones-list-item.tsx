import { useContext } from 'react'
import { BasketContext } from '../BasketContext'
import './headphones-list-item.css'
import type { Product } from '../../types'

type HeadphonesListItemProps = Product

const HeadphonesListItem = ({ img, title, price, rate, id }: HeadphonesListItemProps) => {
    const { onPurchase, toggleFavourite, isFavourite } = useContext(BasketContext)!
    const favourite = isFavourite(id)

    return (
        <div className="headphones__item">
            <div className="headphones__item-img">
                <button
                    type="button"
                    className={`headphones__fav-btn ${
                        favourite ? 'headphones__fav-btn--active' : ''
                    }`}
                    aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleFavourite(id)
                    }}
                >
                    <img src="icons/heart.svg" alt="" />
                </button>
                <img src={img} alt="headphones" />
            </div>
            <div className="headphones__item-descr">
                <div className="headphones__item-descr-name">{title}</div>
                <div className="headphones__item-descr-price">{`${price} ₽`}</div>
                <div className="headphones__item-descr-rating">
                    <img src="./icons/star.svg" alt="star" />
                    <div>{rate}</div>
                </div>
                <button onClick={() => onPurchase(id)} className="headphones__item-descr-btn">
                    Купить
                </button>
            </div>
        </div>
    )
}

export default HeadphonesListItem