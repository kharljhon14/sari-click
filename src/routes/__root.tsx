import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import MainLayout from '@/layouts/main-layout'
import Providers from '@/providers/prodivers'

export const Route = createRootRoute({
  component: () => (
    <>
      <Providers>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </Providers>
      <TanStackRouterDevtools />
    </>
  ),
})
