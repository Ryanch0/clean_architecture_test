import selectUsers from '@/components/features/user/services/selectUsers.ts'
import type { User } from '@/components/features/user/services/types.ts'
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!res.ok) throw new Error('Failed to fetch users')

  return res.json()
}

const useUserListQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    select: selectUsers
  })
}

export default useUserListQuery
