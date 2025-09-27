import type { ReactNode } from 'react'

import styles from './CustomButton.module.scss'

type CustomButtonProps = {
  children: ReactNode
  onClick: () => void
}

const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  )
}
export default CustomButton
