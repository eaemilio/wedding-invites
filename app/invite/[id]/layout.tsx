export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-dvh flex flex-col">{children}</main>;
}
