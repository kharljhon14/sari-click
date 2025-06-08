import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

const queryCient = new QueryClient()

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryCient}>{children}</QueryClientProvider>
  )
}
