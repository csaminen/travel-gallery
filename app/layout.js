import "./globals.css";

export const metadata = {
  title: "My Travel Albums",
  description: "Personal travel photo albums",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
