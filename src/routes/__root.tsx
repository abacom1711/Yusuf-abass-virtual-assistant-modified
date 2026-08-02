import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

const SITE_URL = 'https://meek-llama-cce137.netlify.app'
const SITE_TITLE = 'Yusuf [Your Full Name] — Administrative & Executive Virtual Assistant'
const SITE_DESCRIPTION =
  'Helping busy executives and entrepreneurs streamline operations, stay organized, and focus on growing their businesses. Calendar management, inbox organization, travel planning, and reliable administrative support.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE_TITLE },
      { name: 'description', content: SITE_DESCRIPTION },
      {
        name: 'keywords',
        content:
          'virtual assistant, executive assistant, administrative support, remote assistant, calendar management, inbox management, project coordination',
      },
      { name: 'author', content: 'Yusuf' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#0a1f44' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:site_name', content: 'Yusuf — Virtual Assistant' },
      { property: 'og:image', content: `${SITE_URL}/og-image.svg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.svg` },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
