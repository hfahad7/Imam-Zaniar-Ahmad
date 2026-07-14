import './globals.css';

export const metadata = {
  title: 'My Site',
  description: 'A simple Next.js website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
