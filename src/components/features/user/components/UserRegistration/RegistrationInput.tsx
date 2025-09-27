import type { ChangeEvent } from 'react'

import styles from '@/components/features/user/components/UserRegistration/UserRegistration.module.scss'

type RegistrationInputProps = {
  name: string
  required?: boolean
  labelText: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const RegistrationInput = ({
  name,
  required,
  labelText,
  onChange
}: RegistrationInputProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        type="text"
        name={name}
        required={required}
        onChange={onChange}
      />
    </div>
  )
}

export default RegistrationInput
