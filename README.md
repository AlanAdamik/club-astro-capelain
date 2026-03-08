# Club Astro Capelain

Site web de l'association d'astronomie de Capelain.

## Stack technique

- **[Astro](https://astro.build/)** — générateur de site statique
- **[Tailwind CSS](https://tailwindcss.com/)** — styles
- **[Decap CMS](https://decapcms.org/)** — interface d'administration du contenu
- **[Netlify](https://www.netlify.com/)** — hébergement gratuit

## Développement local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:4321`.

## Déploiement sur Netlify

### 1. Créer le dépôt Git

```bash
git init
git add .
git commit -m "Premier commit"
```

Pousser le dépôt sur GitHub (créer un nouveau repo sur github.com, puis suivre les instructions).

### 2. Connecter à Netlify

1. Se connecter sur [app.netlify.com](https://app.netlify.com/)
2. Cliquer **"Add new site" > "Import an existing project"**
3. Choisir GitHub et sélectionner le dépôt `club-astro-capelain`
4. Les paramètres de build sont automatiquement détectés via `netlify.toml`
5. Cliquer **"Deploy site"**

### 3. Activer Netlify Identity (pour l'admin CMS)

1. Dans le dashboard Netlify du site, aller dans **Site settings > Identity**
2. Cliquer **"Enable Identity"**
3. Sous **Registration**, choisir **"Invite only"**
4. Sous **Services > Git Gateway**, cliquer **"Enable Git Gateway"**
5. Aller dans l'onglet **Identity** et cliquer **"Invite users"**
6. Entrer les adresses email des administrateurs (vos parents)

### 4. Se connecter à l'admin

1. Les administrateurs recevront un email d'invitation
2. Cliquer sur le lien dans l'email pour créer un mot de passe
3. Aller sur `https://votre-site.netlify.app/admin/`
4. Se connecter avec email + mot de passe

## Gestion du contenu

L'interface d'administration est accessible à l'adresse `/admin/` du site. Elle permet de :

- **Actualités** : créer, modifier et supprimer des articles
- **Événements** : gérer le calendrier des sorties et activités
- **Galerie** : créer des albums photo avec upload d'images

Les modifications sont enregistrées directement dans le dépôt Git, ce qui déclenche automatiquement un nouveau déploiement du site.

## Structure du projet

```
src/
  content/          ← contenu Markdown (édité via le CMS)
    actualites/
    evenements/
    galerie/
  components/       ← composants réutilisables
  layouts/          ← layout principal
  pages/            ← pages du site
  styles/           ← styles CSS
public/
  admin/            ← interface Decap CMS
  images/uploads/   ← images uploadées via le CMS
```
