import { Link } from 'react-router'

type UserListItemProps = {
  id: number
  username: string
  email: string
}
const UserListItem = ({ id, username, email }: UserListItemProps) => {
  return (
    <li>
      <Link to={`${id}`}>{`${username}: ${email}`}</Link>
    </li>
  )
}

export default UserListItem
