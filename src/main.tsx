import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'

import { RouterProvider } from 'react-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import router from './router.tsx'

const client = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
