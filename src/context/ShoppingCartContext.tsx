import { useContext, createContext, ReactNode, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useMyGarageContext } from './MyGarageContext'

type ShoppingCartProwiderProps = {
  children: ReactNode
}

export type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContextType = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  clearCartAddItemsToGarage: () => void
  cartQuantity: number
  cartItems: CartItem[]
}

const KEY_FOR_LOCAL_STORAGE_SHOPPING_CART = 'shopping-cart-store'

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProwider({ children }: ShoppingCartProwiderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    KEY_FOR_LOCAL_STORAGE_SHOPPING_CART,
    []
  )
  const { myGarageItems, setMyGarageItems } = useMyGarageContext()

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  function clearCartAddItemsToGarage() {
    setCartItems((currentItems: CartItem[] | undefined) => {
      const totalsItemsList: CartItem[] = [
        ...myGarageItems,
        ...(currentItems || []),
      ].reduce((acc: CartItem[], item) => {
        const existingObject: CartItem | undefined = acc.find(
          (obj: CartItem) => obj.id === item.id
        )
        if (existingObject) {
          existingObject.quantity += item.quantity
        } else {
          acc.push(item)
        }
        return acc
      }, [])

      setMyGarageItems([...totalsItemsList])

      return []
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        clearCartAddItemsToGarage,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
