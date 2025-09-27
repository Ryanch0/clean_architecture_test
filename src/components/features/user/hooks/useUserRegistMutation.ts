import { useNavigate } from 'react-router'

import type { UserRegistrationBody } from '@/components/features/user/services/types.ts'
import { useMutation } from '@tanstack/react-query'

const mutateUserRegistration = async ({
  name,
  email,
  phone
}: UserRegistrationBody) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phone })
  })

  if (!res.ok) throw Error('Error creating user registration')

  return res.json()
}

const useUserRegistMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (formData: UserRegistrationBody) =>
      mutateUserRegistration(formData),
    onSuccess: () => navigate('/'),
    onError: () => navigate('/error')
  })
}

export default useUserRegistMutation
