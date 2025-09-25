import { createBrowserRouter, Navigate, Outlet } from 'react-router'

import UserCreatePage from '@/components/routes/UserCreatePage/UserCreatePage.tsx'
import UserDetailPage from '@/components/routes/UserDetailPage/UserDetailPage.tsx'
import UserListPage from '@/components/routes/UserListPage/UserListPage.tsx'

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <Navigate to={'users'} /> },
      { path: 'users', element: <UserListPage /> },
      { path: 'users/:id', element: <UserDetailPage /> },
      { path: 'users/new', element: <UserCreatePage /> }
    ]
  }
])

export default router
