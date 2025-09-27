import { createBrowserRouter, Navigate } from 'react-router'

import RootLayout from '@/components/layouts/RootLayout.tsx'
import BaseErrorPage from '@/components/routes/BaseErrorPage/BaseErrorPage.tsx'
import UserDetailPage from '@/components/routes/UserDetailPage/UserDetailPage.tsx'
import UserListPage from '@/components/routes/UserListPage/UserListPage.tsx'
import UserRegistrationPage from '@/components/routes/UserRegistrationPage/UserRegistrationPage.tsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    ErrorBoundary: () => <BaseErrorPage />,
    children: [
      { index: true, element: <Navigate to={'users'} /> },
      { path: 'users', element: <UserListPage /> },
      { path: 'users/:id', element: <UserDetailPage /> },
      { path: 'users/new', element: <UserRegistrationPage /> },
      { path: 'error', element: <BaseErrorPage /> }
    ]
  }
])

export default router
