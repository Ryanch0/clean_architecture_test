import { Link } from 'react-router'

import useUserListUseCase from '@/components/features/user/hooks/usecases/useUserListUseCase.ts'

const UserList = () => {
  const { userData, navigateToAddNewUser, isLoading, isError } =
    useUserListUseCase()

  if (isLoading) return <>Loading UI</>

  if (isError) return <>Error UI</>

  return (
    <div>
      <h3>사용자 목록 페이지</h3>
      <ul>
        {userData?.map((user) => {
          const { id, username, email } = user

          return (
            <li key={id}>
              <Link to={`${id}`}>{`${username}: ${email}`}</Link>
            </li>
          )
        })}
      </ul>
      <button onClick={navigateToAddNewUser}>새 사용자 추가</button>
    </div>
  )
}

export default UserList
