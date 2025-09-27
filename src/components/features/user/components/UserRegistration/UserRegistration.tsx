import RegistrationInput from '@/components/features/user/components/UserRegistration/RegistrationInput.tsx'
import useUserRegistrationUseCase from '@/components/features/user/hooks/usecases/useUserRegistrationUseCase.ts'
import BackButton from '@/components/shared/BackButton/BackButton.tsx'
import CustomButton from '@/components/shared/CustomButton/CustomButton.tsx'

import styles from './UserRegistration.module.scss'

const UserRegistration = () => {
  const { onChangeUserFormField, onSubmitUserRegistration, isPending } =
    useUserRegistrationUseCase()

  if (isPending) return <>Loading UI</>

  return (
    <form onSubmit={onSubmitUserRegistration}>
      <BackButton />
      <h2>유저 등록 페이지</h2>
      <div className={styles.wrapper}>
        <RegistrationInput
          name={'name'}
          labelText={'Name'}
          onChange={onChangeUserFormField('name')}
        />
        <RegistrationInput
          name={'email'}
          labelText={'Email Address'}
          onChange={onChangeUserFormField('email')}
        />
        <RegistrationInput
          name={'phone'}
          labelText={'Phone Number'}
          onChange={onChangeUserFormField('phone')}
        />
      </div>

      <CustomButton type="submit">Submit</CustomButton>
    </form>
  )
}

export default UserRegistration
