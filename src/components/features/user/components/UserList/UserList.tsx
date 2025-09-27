import UserListItem from '@/components/features/user/components/UserList/UserListItem.tsx'
import useUserListUseCase from '@/components/features/user/hooks/usecases/useUserListUseCase.ts'
import CustomButton from '@/components/shared/CustomButton/CustomButton.tsx'

import styles from './UserList.module.scss'

const UserList = () => {
  const { userData, navigateToAddNewUser, isLoading, isError } =
    useUserListUseCase()

  if (isLoading) return <>Loading UI</>

  if (isError) return <>Error UI</>

  return (
    <div className={styles.article}>
      <h2>사용자 목록 페이지</h2>
      <ul>
        {userData?.map((user) => {
          return (
            <UserListItem
              key={user.id}
              id={user.id}
              username={user.username}
              email={user.email}
            />
          )
        })}
      </ul>
      <CustomButton onClick={navigateToAddNewUser}>Add new user</CustomButton>
    </div>
  )
}

export default UserList
