import './globals.css';

export const metadata = {
  title: 'Imam Zaniar Ahmad | Lectures, Weddings & Islamic Questions',
  description:
    'Imam Zaniar Ahmad offers Islamic lectures, wedding (nikah) officiating services, and answers to your questions about Islam. Book a consultation today.',
  keywords: [
    'Imam Zaniar Ahmad',
    'Islamic lectures',
    'Muslim wedding officiant',
    'nikah ceremony',
    'ask an imam',
    'Islamic questions',
  ],
  openGraph: {
    title: 'Imam Zaniar Ahmad',
    description:
      'Islamic lectures, wedding officiating, and answers to your questions about Islam.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Zaniar Ahmad',
              jobTitle: 'Imam',
              description:
                'Imam offering Islamic lectures, wedding officiating, and religious guidance.',
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
