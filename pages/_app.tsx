import { AppProps } from 'next/app';
import localFont from 'next/font/local';

// Importiere globale Styles
import '../styles/globals.module.css';
import '../styles/band.module.css';
import '../styles/biography.module.css';
import '../styles/contact.module.css';
import '../styles/gallery.module.css';
import '../styles/links.module.css';
import '../styles/live.module.css';
import '../styles/media.module.css';
import '../styles/members.module.css';
import '../styles/news.module.css';
import '../styles/releases.module.css';
import '../styles/tour.module.css';

// Definiere die lokale Schriftart
const myFont = localFont({
  src: [
    {
      path: '../public/fonts/bravada-arma.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/bravada-arma.ttf',
      weight: '700',
      style: 'bold',
    }
  ],
  variable: '--bravada-arma', // CSS-Variable für globale Nutzung
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={myFont.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
