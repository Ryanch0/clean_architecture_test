import type { FormEvent } from 'react'

import useUserRegistMutation from '@/components/features/user/hooks/useUserRegistMutation.ts'
import useUserRegistrationState from '@/components/features/user/hooks/useUserRegistrationState.ts'

const useUserRegistrationUseCase = () => {
  const { onChangeUserFormField, formData } = useUserRegistrationState()
  const { mutate, isPending } = useUserRegistMutation()

  const onSubmitUserRegistration = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(formData)
  }

  return { onChangeUserFormField, onSubmitUserRegistration, isPending }
}

export default useUserRegistrationUseCase
