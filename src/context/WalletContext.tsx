import { useContext, createContext, ReactNode, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type WalletProwiderProps = {
  children: ReactNode
}

type WalletContextType = {
  // addMoneyInfoToWallet: (moneyInfo: MoneyInfoType) => void
  addMoneyToWallet: (moneyAmount: number) => void
  spendMoneyFromWallet: (moneyAmount: number) => void
  getCurrentWalletMoneyAmount: () => number
  currentMoneyAmount: number
}

const KEY_FOR_LOCAL_STORAGE = 'user-wallet-storage'
const WalletContext = createContext({} as WalletContextType)

export function useWallet() {
  return useContext(WalletContext)
}

export function WalletProwider({ children }: WalletProwiderProps) {
  const [currentMoneyAmount, setCurrentMoneyAmount] = useState<number>(0)

  function addMoneyToWallet(moneyAmount: number) {
    prompt("Are you shure, that you've completed todo")
    setCurrentMoneyAmount(() => currentMoneyAmount + moneyAmount)
  }

  function spendMoneyFromWallet(moneyAmount: number) {
    setCurrentMoneyAmount(() => currentMoneyAmount - moneyAmount)
  }

  function getCurrentWalletMoneyAmount() {
    return currentMoneyAmount
  }

  return (
    <WalletContext.Provider
      value={{
        addMoneyToWallet,
        spendMoneyFromWallet,
        getCurrentWalletMoneyAmount,
        currentMoneyAmount,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
