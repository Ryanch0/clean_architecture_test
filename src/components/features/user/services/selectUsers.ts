import type { User } from './types.ts'

const selectUsers = (users: User[]) => {
  return users.map((user) => {
    return { id: user.id, username: user.username, email: user.email }
  })
}

export default selectUsers
