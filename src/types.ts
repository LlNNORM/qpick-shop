export type Product = {
  id: number
  img: string
  title: string
  price: number
  rate: number
}

export type BasketItemQuantity = string

export type BasketContextValue = {
  count: number
  favourites: number[]
  onPurchase: (id: number) => void
  onAmountDecrease: (id: number) => void
  onAmountIncrease: (id: number) => void
  onItemDelete: (id: number) => void
  toggleFavourite: (id: number) => void
  isFavourite: (id: number) => boolean
  headphones: Product[]
  wirelessHeadphones: Product[]
  allProducts: Product[]
  purchasedItems: string[]
  orderPrice: number
}

