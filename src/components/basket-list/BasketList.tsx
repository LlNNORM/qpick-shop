import BasketListItem from '../basket-list-item/BasketListItem'
import BasketOrder from '../basket-price/BasketOrder'
import { useContext } from 'react'
import { BasketContext } from '../BasketContext'
import type { Product } from '../../types'
import './BasketList.css'

const BasketList = () => {
    const { allProducts, orderPrice, purchasedItems } = useContext(BasketContext)!
    
    const elements = allProducts.map((item: Product) => {
        const { id, ...itemProps } = item
        const quantity = sessionStorage.getItem(String(id))
        if (purchasedItems.includes(String(id)) && quantity && Number(quantity) > 0) {
            return <BasketListItem key={id} id={id} quantity={quantity} {...itemProps} />
        }
        return null
    })

    if (orderPrice) {return (
        <div className="basket">
            <div className="basket__title">Корзина</div>
            <div className="basket__wrapper">
                {elements}
                <BasketOrder/>
            </div>
        </div>
    );} else return (
        <div className="basket">
            <div className="basket__title">Корзина</div>
            <div className="basket__wrapper">
            <p>Корзина пуста</p>
            </div>
        </div>
    )
};

export default BasketList;
