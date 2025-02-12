// Importiere die Router-API von Next.js, um die Weiterleitung durchzuführen
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  // Initialisiere den Router
  const router = useRouter();

  // useEffect wird beim ersten Rendern aufgerufen und sorgt für die Weiterleitung
  useEffect(() => {
    // Weiterleitung zur News-Seite
    router.push('/news');
  }, [router]);

  // Keine UI wird benötigt, da der Benutzer sofort weitergeleitet wird
  return null;
};

export default Index;