import { ReactNode } from 'react'
import styles from './Button.module.css'

type buttonPropsType = {
  onClick: () => void
  children: ReactNode
  title: string
  disabled: boolean
}

function Button({
  onClick,
  children,
  title,
  disabled = false,
}: buttonPropsType) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
