import { useContext } from 'react'
import { BasketContext } from '../BasketContext'

import './BasketOrder.css'

const BasketOrder = () => {
    const { orderPrice } = useContext(BasketContext)!

    return (
        <div className="order__wrapper">
            <div className="order__price">
                <div>ИТОГО</div>
                <div>{orderPrice}</div>
            </div>
            <button className="order__btn">Перейти к оформлению</button>
        </div>
    )
}

export default BasketOrder