import { useEffect, useState } from 'react'
import { BasketContext } from './BasketContext'

export const BasketProvider = ({ children }) => {
    
    const headphones = [
        {
            img: './icons/headphones/headphones1.png',
            title: 'Apple BYZ S852I',
            price: 2927,
            rate: 4.7,
            id : 1,
        },
        {
            img: './icons/headphones/headphones2.png',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            id : 2,
        },
        {
            img: './icons/headphones/headphones3.png',
            title: 'Apple EarPods',
            price: 2927,
            rate: 4.7,
            id : 3,
        },
        {
            img: './icons/headphones/headphones1.png',
            title: 'Apple BYZ S852I',
            price: 2927,
            rate: 4.7,
            id : 4,
        },
        {
            img: './icons/headphones/headphones2.png',
            title: 'Apple EarPods',
            price: 2327,
            rate: 4.5,
            id : 5,
        },
        {
            img: './icons/headphones/headphones3.png',
            title: 'Apple EarPods',
            price: 2927,
            rate: 4.7,
            id : 6,
        },
    ];
    const wirelessHeadphones = [
        {
            img: './icons/wireless-headphones/headphones1.png',
            title: 'Apple AirPods',
            price: 9527,
            rate: 4.7,
            id : 7,
        },
        {
            img: './icons/wireless-headphones/headphones2.png',
            title: 'GERLAX GH-04',
            price: 6527,
            rate: 4.5,
            id : 8,
        },
        {
            img: './icons/wireless-headphones/headphones3.png',
            title: 'BOROFONE BO4',
            price: 7527,
            rate: 4.7,
            id : 9,
        },
    ];
    const allProducts = [...headphones, ...wirelessHeadphones];
    const purchasedItems = Object.keys(sessionStorage);
    const [count, setCount] = useState(0);

    const onAmountIncrease = (id) => {
        setCount(count+1);
        for (const key in sessionStorage) {
            if (+key===id) {sessionStorage.setItem(id, +sessionStorage.getItem(key)+1)}
        }
    };

    const onAmountDecrease = (id)=>{
        setCount(count-1);
        for (const key in sessionStorage) {
            if (+key===id) {sessionStorage.setItem(id, +sessionStorage.getItem(key)-1)}
        }
    };

    const onPurchase = (id) => {
        setCount(count+1);
        if (!sessionStorage.getItem(id)) {
            sessionStorage.setItem(id, 1)
        } else onAmountIncrease(id);
    };

    const onItemDelete = (id) => {
        console.log(purchasedItems);
        setCount(count-sessionStorage.getItem(id));
        return sessionStorage.removeItem(id);
    }
    
    let orderPrice = 0;

    const calculateOrderPrice = (allProducts)=> {
        allProducts.forEach (item => {
            const {id, price} = item;
            for (const key in sessionStorage) {
                if (+key===id) {orderPrice += +sessionStorage.getItem(key)*price}}
            return orderPrice;
            }
        )
        return orderPrice;
    };

    orderPrice = calculateOrderPrice(allProducts);

    useEffect(() => {
        sessionStorage.clear();
      }, []);

    return (
        <BasketContext.Provider
            value={{
                count,
                onPurchase,
                onAmountDecrease,
                onAmountIncrease,
                onItemDelete,
                headphones,
                wirelessHeadphones,
                allProducts,
                purchasedItems,
                orderPrice,
            }}
        >
            {children}
        </BasketContext.Provider>
    )
}
