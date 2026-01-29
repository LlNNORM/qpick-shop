import { useEffect, useState, useMemo } from 'react'
import { BasketContext } from './BasketContext'
import type { Product, BasketContextValue } from '../types'

type BasketProviderProps = {
  children: React.ReactNode
}

export const BasketProvider = ({ children }: BasketProviderProps) => {
    const headphones: Product[] = [
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
    ]
    const wirelessHeadphones: Product[] = [
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
    ]
    const allProducts: Product[] = [...headphones, ...wirelessHeadphones]
    const purchasedItems = Object.keys(sessionStorage)
    const [count, setCount] = useState<number>(0)
    const [favourites, setFavourites] = useState<number[]>([])

    const onAmountIncrease = (id: number) => {
        setCount((prev) => prev + 1)
        for (const key in sessionStorage) {
            if (+key === id) {
                const current = sessionStorage.getItem(key)
                const next = (current ? Number(current) : 0) + 1
                sessionStorage.setItem(key, String(next))
            }
        }
    }

    const onAmountDecrease = (id: number) => {
        setCount((prev) => prev - 1)
        for (const key in sessionStorage) {
            if (+key === id) {
                const current = sessionStorage.getItem(key)
                const next = (current ? Number(current) : 0) - 1
                sessionStorage.setItem(key, String(next))
            }
        }
    }

    const onPurchase = (id: number) => {
        setCount((prev) => prev + 1)
        const key = String(id)
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, '1')
        } else {
            onAmountIncrease(id)
        }
    }

    const onItemDelete = (id: number) => {
        const key = String(id)
        const current = sessionStorage.getItem(key)
        if (current) {
            setCount((prev) => prev - Number(current))
        }
        return sessionStorage.removeItem(key)
    }

    const toggleFavourite = (id: number) => {
        setFavourites((prev) =>
            prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
        )
    }

    const isFavourite = (id: number) => favourites.includes(id)
    
    const orderPrice = useMemo(() => {
        return allProducts.reduce((total, item) => {
            const key = String(item.id)
            const quantity = sessionStorage.getItem(key)
            if (!quantity) return total
            return total + Number(quantity) * item.price
        }, 0)
    }, [allProducts, purchasedItems])

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const value: BasketContextValue = {
        count,
        favourites,
        onPurchase,
        onAmountDecrease,
        onAmountIncrease,
        onItemDelete,
        toggleFavourite,
        isFavourite,
        headphones,
        wirelessHeadphones,
        allProducts,
        purchasedItems,
        orderPrice,
    }

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}
