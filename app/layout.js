export const metadata = {
  title: "Mochatalks",
  description:
    "Drink coffee and video chat with your friends. Find friends based on coffee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
