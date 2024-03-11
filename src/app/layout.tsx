import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import ProviderNextThemes from '@/components/organisms/ProviderNextThemes'
import { ToastContainer } from 'react-toastify'
import ProviderNextAuth from '@/components/organisms/ProviderNextAuth'
import ProviderApollo from '@/components/organisms/ProviderApollo'
import clsx from 'clsx'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const inter = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SP Details',
  description: 'Detalles , adornos y obsequios personalizados.',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: any
}): Promise<JSX.Element> {
  return (
    <html lang={locale}>
      <body className={clsx(inter.className, 'overflow-x-hidden')}>
        <ProviderApollo>
          <ProviderNextThemes>
            <ProviderNextAuth>{children}</ProviderNextAuth>
          </ProviderNextThemes>
        </ProviderApollo>
        <ToastContainer />
      </body>
    </html>
  )
}
