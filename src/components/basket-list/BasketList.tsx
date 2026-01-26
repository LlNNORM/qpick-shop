import BasketListItem from '../basket-list-item/BasketListItem';
import BasketOrder from '../basket-price/BasketOrder';
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import './BasketList.css'

const BasketList = () => {
    const {allProducts, orderPrice,purchasedItems} = useContext(BasketContext);
    
    const elements =  allProducts.map (item => {
            const {id, ...itemProps} = item;
            const quantity = sessionStorage.getItem(String(id));
            if (purchasedItems.includes(String(id)) && quantity && Number(quantity) > 0)
                return (
                <BasketListItem key = {id} id={id} quantity={quantity} {...itemProps} />
                )
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
                <h1>Корзина пуста</h1>
            </div>
        </div>
    )
};

export default BasketList;
