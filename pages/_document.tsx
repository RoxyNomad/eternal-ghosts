import Document, { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Globale Stylesheets oder Meta-Tags */}
          <meta charSet="utf-8" />
          <meta name="description" content="Eternal Ghosts" />
          <meta name="author" content="Roxana Zwicky" />
          <meta name="content-author" content="Filippo Milazzo" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/x-icon" href="/pictures/favImage.ico" />
        </Head>
        <body>
        <Image src="/pictures/bg.jpeg" alt="Eternal Ghosts Background" 
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1
        }} width={3840} height={2160} />
          <Main />
          <NextScript />
          <div style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <p style={{ 
              fontSize: '1.5vh', 
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', 
              color: 'white',   
              margin: '0' 
            }}>
              © 2023 Eternal Ghosts
            </p>
            <p style={{ 
              fontSize: '1.5vh', 
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', 
              color: 'white',   
              margin: '0' 
            }}>
              All rights reserved, Design by Filippo Milazzo<br />
              All site content is the property of Eternal Ghosts unless otherwise noted<br />
              and is not to be used or reproduced without advance written permission
            </p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
