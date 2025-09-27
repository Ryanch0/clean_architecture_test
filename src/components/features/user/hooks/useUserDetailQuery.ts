import type { User } from '@/components/features/user/services/types.ts'
import { useQuery } from '@tanstack/react-query'

const fetchUserDetail = async (id?: string): Promise<User | null> => {
  if (!id) return null

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

  if (!res.ok) throw new Error('Failed to fetch users')

  return res.json()
}

const useUserDetailQuery = (id?: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserDetail(id)
  })
}

export default useUserDetailQuery
