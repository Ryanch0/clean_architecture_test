import type { ReactNode } from 'react'

import styles from './CustomButton.module.scss'

type CustomButtonProps = {
  children: ReactNode
  onClick?: () => void
  type?: 'submit' | 'reset'
}

const CustomButton = ({ children, onClick, type }: CustomButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
export default CustomButton
