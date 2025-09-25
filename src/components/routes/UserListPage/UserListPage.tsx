import { Link } from 'react-router'

import useUserListQuery from '@/components/features/user/hooks/useUserListQuery.ts'

const UserListPage = () => {
  const { data: users, isError, isLoading } = useUserListQuery()

  if (isLoading) return <>Loading UI</>

  if (isError) return <>Error UI</>

  return (
    <div>
      <h3>사용자 목록 페이지</h3>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              <Link
                to={`/users/${user.id}`}
              >{`${user.username}: ${user.email}`}</Link>
            </li>
          )
        })}
      </ul>
      <button onClick={() => {}}>새 사용자 추가</button>
    </div>
  )
}

export default UserListPage
