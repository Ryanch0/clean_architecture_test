import UserDetailItem from '@/components/features/user/components/UserDetail/UserDetailItem/UserDetailItem.tsx'
import useUserDetailUseCase from '@/components/features/user/hooks/usecases/useUserDetailUseCase.ts'

import styles from './UserDetail.module.scss'

const UserDetail = () => {
  const { data, isLoading, isError, navigate } = useUserDetailUseCase()

  if (isLoading) return <>Loading UI</>

  if (isError) return <>Error UI</>

  if (!data) return

  return (
    <div className={styles.article}>
      <span className={styles.back} onClick={() => navigate(-1)}>
        &larr;
      </span>
      <h2>{data.name}'s detail</h2>
      <UserDetailItem
        name={data.name}
        username={data.username}
        email={data.email}
        website={data.website}
        phone={data.phone}
        companyName={data.company.name}
      />
    </div>
  )
}

export default UserDetail
