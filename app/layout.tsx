import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';
import RegisterGSAP from '@/components/RegisterGSAP';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Emilio and Yeraldy',
  description:
    'Únete a nuestra celebración especial. Descubre todos los detalles de nuestra boda e ingresa con tu código personalizado para confirmar tu asistencia. ¡Te esperamos con mucha ilusión!',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <RegisterGSAP />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
