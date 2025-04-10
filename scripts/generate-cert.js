import mkcert from 'mkcert';
import fs from 'fs';
import path from 'path';

async function generateCertificate() {
  try {
    // Créer les certificats
    const cert = await mkcert.createCert({
      domains: ['localhost', '127.0.0.1'],
      validityDays: 365
    });

    // Assurer que le répertoire .cert existe
    const certDir = path.resolve('.cert');
    if (!fs.existsSync(certDir)) {
      fs.mkdirSync(certDir, { recursive: true });
    }

    // Sauvegarder les certificats
    fs.writeFileSync('.cert/key.pem', cert.key);
    fs.writeFileSync('.cert/cert.pem', cert.cert);

    console.log('Certificats SSL générés avec succès dans le dossier .cert/');
  } catch (error) {
    console.error('Erreur lors de la génération des certificats:', error);
  }
}

generateCertificate().catch(console.error);