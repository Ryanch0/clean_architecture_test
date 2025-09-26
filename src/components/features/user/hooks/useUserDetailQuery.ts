import type { User } from '@/components/features/user/services/types.ts'
import { useQuery } from '@tanstack/react-query'

const fetchUserDetail = async (id: number): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (!res.ok) throw new Error('Failed to fetch users')

  return res.json()
}

const useUserDetailQuery = (id: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserDetail(id)
  })
}

export default useUserDetailQuery
