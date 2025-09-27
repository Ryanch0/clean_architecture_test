import { useNavigate } from 'react-router'

import styles from './BackButton.module.scss'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <span className={styles.back} onClick={() => navigate(-1)}>
      &larr;
    </span>
  )
}

export default BackButton
