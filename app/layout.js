import './globals.css'; // ← MUST be at the top

export const metadata = {
  title: 'My App',
  description: 'Tailwind Test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}