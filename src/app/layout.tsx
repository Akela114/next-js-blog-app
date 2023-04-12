'use client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/shared/config/store/store'

import InnerLayout from './innerLayout'
import './globals.scss'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <InnerLayout>{children}</InnerLayout>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}

export default MainLayout
