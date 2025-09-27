type UserDetailItemProps = {
  name: string
  username: string
  email: string
  website: string
  phone: string
  companyName: string
}
const UserDetailItem = ({
  name,
  username,
  email,
  website,
  phone,
  companyName
}: UserDetailItemProps) => {
  return (
    <ul>
      <li>name: {name}</li>
      <li>username: {username}</li>
      <li>email: {email}</li>
      <li>website: {website}</li>
      <li>phone: {phone}</li>
      <li>company: {companyName}</li>
    </ul>
  )
}

export default UserDetailItem
