import useUserListNavigation from '@/components/features/user/hooks/useUserListNavigation.ts'
import useUserListQuery from '@/components/features/user/hooks/useUserListQuery.ts'

const useUserListUseCase = () => {
  const { navigateToUserDetail, navigateToAddNewUser } = useUserListNavigation()
  const { data: userData, isError, isLoading } = useUserListQuery()

  return {
    navigateToUserDetail,
    navigateToAddNewUser,
    userData,
    isError,
    isLoading
  }
}

export default useUserListUseCase
