import { useState, type ChangeEvent } from 'react'

import type { UserRegistrationBody } from '@/components/features/user/services/types.ts'

const useUserRegistrationState = () => {
  const [formData, setFormData] = useState<UserRegistrationBody>({
    name: '',
    email: '',
    phone: ''
  })

  const onChangeUserFormField = (fieldName: 'name' | 'email' | 'phone') => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => {
        return {
          ...prev,
          [fieldName]: e.target.value
        }
      })
    }
  }

  return { formData, onChangeUserFormField }
}

export default useUserRegistrationState
