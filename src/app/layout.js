import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'MedTech Solutions',
  description: 'Digitization | Impact | Transformation',
};

export default function RootLayout ({ children })
{
  return (
    <html lang="en">
      <body className={ montserrat.className }>{ children }</body>
    </html>
  );
}
