// Image construite par GitHub Actions
export const diskImageUrl = IMAGE_URL;

// L'image est fournie par le workflow GitHub
export const diskImageType = "github";

// Pas besoin du message d'introduction du terminal
export const printIntro = false;

// IMPORTANT : on veut un vrai affichage graphique
export const needsDisplay = true;

// Démarrage complet d'Alpine / OpenRC / LightDM
export const cmd = "/usr/local/bin/start-thonny";

export const args = [];

export const opts = {
  uid: 0,
  gid: 0
};
