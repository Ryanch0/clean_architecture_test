import { Outlet } from 'react-router'

import styles from './RootLayout.module.scss'

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  )
}

export default RootLayout
