import { useNavigate, useParams } from 'react-router'

import useUserDetailQuery from '@/components/features/user/hooks/useUserDetailQuery.ts'

const useUserDetailUseCase = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading, isError } = useUserDetailQuery(id)

  return { data, isLoading, isError, navigate }
}

export default useUserDetailUseCase
