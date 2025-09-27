import { useNavigate } from 'react-router'

const useUserListNavigation = () => {
  const navigate = useNavigate()
  const navigateToUserDetail = (id: number) => navigate(`${id}`)
  const navigateToAddNewUser = () => navigate('new')

  return {
    navigateToUserDetail,
    navigateToAddNewUser
  }
}

export default useUserListNavigation
