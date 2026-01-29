import { useContext } from 'react'
import { BasketContext } from '../BasketContext'
import HeadphonesList from '../headphones-list/headphones-list'
import './favourite-list.css'

export const Favourite = () => {
    const { favourites, allProducts } = useContext(BasketContext)!

    const favouriteProducts = allProducts.filter((product) =>
        favourites.includes(product.id),
    )

    if (favouriteProducts.length === 0) {
        return (
            <div className="favourite">
                <div className="favourite__title">Избранные товары</div>
                <div className="favourite__wrapper">
                        <p>У вас пока нет избранных товаров.</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <HeadphonesList headphones={favouriteProducts} type="Избранные товары" />
        </div>
    )
}

export default Favourite