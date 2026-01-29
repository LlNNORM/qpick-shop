import { createContext } from 'react'
import type { BasketContextValue } from '../types'

export const BasketContext = createContext<BasketContextValue | undefined>(undefined)

