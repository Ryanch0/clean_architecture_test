import { useParams } from 'react-router'

import useUserDetailQuery from '@/components/features/user/hooks/useUserDetailQuery.ts'

const useUserDetailUseCase = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useUserDetailQuery(id)

  return { data, isLoading, isError }
}

export default useUserDetailUseCase
