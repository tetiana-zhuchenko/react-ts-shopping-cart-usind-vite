import { useContext, createContext, ReactNode, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Wallet } from '../components/Wallet'
type WalletProwiderPropsType = {
  children: ReactNode
}

type WalletContextType = {
  openWallet: () => void
  closeWallet: () => void
  addMoneyToWallet: (moneyAmount: number) => void
  subtractMoneyFromWallet: (moneyAmount: number) => void
  getCurrentWalletMoneyAmount: () => number
  resetMoneyAmount: () => void

  currentMoneyAmount: number
}

const KEY_FOR_LOCAL_STORAGE = 'user-wallet-storage'
const WalletContext = createContext({} as WalletContextType)

export function useWallet() {
  return useContext(WalletContext)
}

export function WalletProwider({ children }: WalletProwiderPropsType) {
  const [isOpen, setIsOpen] = useState(false)

  const [currentMoneyAmount, setCurrentMoneyAmount] = useLocalStorage<number>(
    KEY_FOR_LOCAL_STORAGE,
    0
  )

  const openWallet = () => setIsOpen(true)
  const closeWallet = () => setIsOpen(false)

  function addMoneyToWallet(moneyAmount: number) {
    return setCurrentMoneyAmount(() => currentMoneyAmount + moneyAmount)
  }

  function subtractMoneyFromWallet(moneyAmount: number) {
    console.log('you bye')
    return setCurrentMoneyAmount(() => currentMoneyAmount - moneyAmount)
  }

  function getCurrentWalletMoneyAmount() {
    return currentMoneyAmount
  }

  function resetMoneyAmount() {
    return setCurrentMoneyAmount(0)
  }

  return (
    <WalletContext.Provider
      value={{
        addMoneyToWallet,
        getCurrentWalletMoneyAmount,
        openWallet,
        closeWallet,
        subtractMoneyFromWallet,
        resetMoneyAmount,

        currentMoneyAmount,
      }}
    >
      {children}
      <Wallet isOpen={isOpen} />
    </WalletContext.Provider>
  )
}
