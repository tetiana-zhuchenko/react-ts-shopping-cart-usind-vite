import { useContext, createContext, ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { CartItem } from './ShoppingCartContext'

type MyGarageProwiderProps = {
  children: ReactNode
}

const KEY_FOR_LOCAL_STORAGE_GARAGE = 'my-garage-items'

type MyGarageContextType = {
  myGarageItems: CartItem[]
  setMyGarageItems: (newGarageItems: CartItem[]) => void
}

const MyGarageContext = createContext({} as MyGarageContextType)

export function useMyGarageContext() {
  return useContext(MyGarageContext)
}

export function MyGarageProwider({ children }: MyGarageProwiderProps) {
  const [myGarageItems, setMyGarageItems] = useLocalStorage<CartItem[]>(
    KEY_FOR_LOCAL_STORAGE_GARAGE,
    []
  )

  console.log(myGarageItems)
  return (
    <MyGarageContext.Provider
      value={{
        myGarageItems,
        setMyGarageItems,
      }}
    >
      {children}
    </MyGarageContext.Provider>
  )
}
