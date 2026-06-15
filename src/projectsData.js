import p2 from "./assets/img/p2.png";
import p3 from "./assets/img/p3.png";
import p4 from "./assets/img/p4.png";
import p5 from "./assets/img/p5.png";
import p6 from "./assets/img/p6.png";
import p7 from "./assets/img/p7.png";
import p8 from "./assets/img/p8.png";
import p9 from "./assets/img/p9.png";

export const projectsData = [
  {
    title: "Projet Smart City : Analyse des arbres de la ville de Paris",
    description: "Analyse exploratoire et cartographie du patrimoine arboré de la ville de Paris dans le cadre d'un concours \"Smart City\" visant à optimiser la gestion des espaces verts.",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP2",
    imgUrl: p2,
    markdownContent: `# Projet Smart City : Analyse des arbres de la ville de Paris

**Période :** 2024

## 📝 Résumé court
Analyse exploratoire et cartographie du patrimoine arboré de la ville de Paris dans le cadre d'un concours "Smart City" visant à optimiser la gestion des espaces verts.

## 🎯 Contexte et Problématique
La ville de Paris souhaite optimiser ses campagnes de plantation et préserver sa biodiversité. L'objectif de ce projet était de traiter la base de données brute des arbres parisiens, d'en extraire des informations pertinentes (répartition spatiale, espèces dominantes, arbres remarquables) et de proposer des axes d'amélioration pour les futures plantations.

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Frameworks & Librairies :** Pandas (manipulation), Matplotlib & Seaborn (visualisation), Folium (cartographie interactive)
- **Outils & Déploiement :** Jupyter Notebook, Git, GitHub

## 🚀 Mes Missions et Réalisations
- Nettoyage et préparation d'un grand jeu de données (gestion des valeurs manquantes, détection des anomalies).
- Analyse exploratoire des données (EDA) pour identifier les tendances de plantation et la diversité des espèces.
- Création de visualisations claires (graphiques statistiques) et d'une cartographie interactive localisant les arbres remarquables.
- Rédaction d'une synthèse de recommandations pour la municipalité.

## 📊 Résultats et Impact
Mise en évidence de la surreprésentation de certaines espèces et propositions concrètes pour diversifier le patrimoine arboré. La démarche a démontré ma capacité à transformer une donnée brute en recommandations métier actionnables.

## 🎯 COMPÉTENCES ACQUISES
- Réaliser une analyse exploratoire de données
- Communiquer ses résultats à l'aide de représentations graphiques
`
  },
  {
    title: "Préparation de données pour la santé publique (OpenFoodFacts)",
    description: "Nettoyage approfondi et analyse statistique multivariée de la base de données nutritionnelle OpenFoodFacts pour soutenir des idées d'applications liées à l'alimentation.",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP3",
    imgUrl: p3,
    markdownContent: `# Préparation de données pour la santé publique (OpenFoodFacts)

**Période :** 2024

## 📝 Résumé court
Nettoyage approfondi et analyse statistique multivariée de la base de données nutritionnelle OpenFoodFacts pour soutenir des idées d'applications liées à l'alimentation.

## 🎯 Contexte et Problématique
L'agence "Santé Publique France" a besoin d'étudier les habitudes alimentaires. Le défi de ce projet résidait dans la qualité très variable des données brutes issues d'OpenFoodFacts. Il fallait concevoir un pipeline de nettoyage robuste (imputation, gestion des doublons et des outliers) avant de pouvoir proposer une idée d'application innovante basée sur la corrélation entre les nutriments (ex: Nutri-Score).

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Frameworks & Librairies :** Pandas, NumPy, Scipy, Missingno
- **Visualisation :** Matplotlib, Seaborn, PCA (Analyse en Composantes Principales)
- **Outils & Déploiement :** Jupyter Notebook, Git

## 🚀 Mes Missions et Réalisations
- Création d'un pipeline complet de nettoyage de données pour un jeu de plus de 1 million de lignes (stratégies d'imputation par KNN ou médianes).
- Analyse univariée, bivariée et multivariée (tests statistiques, matrices de corrélation, ANOVA).
- Réduction de dimension via l'Analyse en Composantes Principales (PCA/ACP) pour visualiser des groupes de produits.
- Proposition d'une idée d'application santé basée sur la qualité nutritionnelle.

## 📊 Résultats et Impact
Mise en place d'une base de données saine et exploitable. Le projet a permis de mettre en évidence des corrélations fortes entre additifs et nutriments, validant la pertinence de l'utilisation de la donnée pour la prévention santé.

## 🎯 COMPÉTENCES ACQUISES
- Effectuer des opérations de nettoyage sur des données structurées
- Réaliser une analyse statistique multivariée
`
  },
  {
    title: "Construction d'un modèle de scoring interactif",
    description: "Développement et déploiement d'un modèle de Machine Learning pour évaluer le risque de crédit bancaire, complété par un dashboard interactif pour les chargés de clientèle.",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP4",
    imgUrl: p4,
    markdownContent: `# Construction d'un modèle de scoring interactif

**Période :** 2024

## 📝 Résumé court
Développement et déploiement d'un modèle de Machine Learning pour évaluer le risque de crédit bancaire, complété par un dashboard interactif pour les chargés de clientèle.

## 🎯 Contexte et Problématique
"Prêt à dépenser", une société financière, souhaite automatiser l'octroi de crédits. Le défi était de construire un modèle de scoring performant tout en gérant le déséquilibre des classes (très peu de défauts de paiement). Il fallait également garantir la transparence des décisions (interprétabilité) pour que les chargés de clientèle puissent expliquer l'accord ou le refus au client.

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Machine Learning :** Scikit-Learn, LightGBM, XGBoost, MLflow (tracking)
- **Interprétabilité :** SHAP
- **Déploiement & Web :** Streamlit, FastAPI / Flask, Git

## 🚀 Mes Missions et Réalisations
- Feature engineering et traitement du déséquilibre des classes (SMOTE, class weights).
- Entraînement et optimisation d'algorithmes de classification (Régression Logistique, Random Forest, LightGBM) en optimisant une fonction de coût métier personnalisée.
- Utilisation de la librairie SHAP pour l'explicabilité du modèle (feature importance locale et globale).
- Création d'une API de prédiction et développement d'un dashboard interactif (Streamlit) pour visualiser la décision.

## 📊 Résultats et Impact
Le modèle final a permis de réduire significativement le risque financier. Le dashboard interactif a été conçu pour être directement utilisable par les conseillers bancaires, apportant de la transparence grâce aux graphiques SHAP qui expliquent le score de chaque client.

## 🎯 COMPÉTENCES ACQUISES
- Mettre en place un modèle d'apprentissage supervisé (Scoring)
- Interpréter les résultats d'un modèle (SHAP)
- Déployer un modèle via une API
`
  },
  {
    title: "Segmentation des clients d'un site e-commerce (Olist)",
    description: "Analyse transactionnelle et création d'un modèle de Machine Learning non supervisé pour segmenter les clients d'une plateforme e-commerce afin d'optimiser les campagnes marketing.",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP5",
    imgUrl: p5,
    markdownContent: `# Segmentation des clients d'un site e-commerce (Olist)

**Période :** 2024

## 📝 Résumé court
Analyse transactionnelle et création d'un modèle de Machine Learning non supervisé pour segmenter les clients d'une plateforme e-commerce afin d'optimiser les campagnes marketing.

## 🎯 Contexte et Problématique
Olist, une plateforme e-commerce brésilienne, souhaite améliorer ses campagnes de communication. L'objectif était de fournir aux équipes marketing une segmentation exploitable des clients basée sur leur comportement d'achat, et de définir à quelle fréquence le modèle de segmentation devait être mis à jour (contrat de maintenance).

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Machine Learning (Non supervisé) :** K-Means, DBSCAN, CAH (Classification Ascendante Hiérarchique)
- **Mesures & Métriques :** Silhouette Score, ARI (Adjusted Rand Index), Analyse RFM (Récence, Fréquence, Montant)
- **Visualisation :** Seaborn, TSNE, PCA

## 🚀 Mes Missions et Réalisations
- Préparation des données (fusion de multiples tables SQL : clients, commandes, produits, avis).
- Création de features (Feature Engineering) basées sur la méthode RFM et la satisfaction client.
- Test et optimisation de plusieurs algorithmes de clustering pour trouver la meilleure segmentation.
- Simulation de la stabilité du modèle dans le temps (calcul du score ARI) pour proposer une fréquence de ré-entraînement optimale.

## 📊 Résultats et Impact
Définition d'une typologie de clients claire (ex: "Bons clients fidèles", "Clients à réactiver"). La recommandation d'une fréquence de mise à jour précise du modèle a permis de garantir aux équipes marketing des données toujours pertinentes.

## 🎯 COMPÉTENCES ACQUISES
- Mettre en place un modèle d'apprentissage non supervisé (Clustering)
- Évaluer la stabilité d'un modèle dans le temps
`
  },
  {
    title: "Classification automatique de biens de consommation (NLP & Vision)",
    description: "Développement d'un moteur de classification automatique de produits e-commerce en utilisant des techniques avancées de traitement du langage naturel (NLP) et de vision par ordinateur (Computer Vision).",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP6",
    imgUrl: p6,
    markdownContent: `# Classification automatique de biens de consommation (NLP & Vision)

**Période :** 2024

## 📝 Résumé court
Développement d'un moteur de classification automatique de produits e-commerce en utilisant des techniques avancées de traitement du langage naturel (NLP) et de vision par ordinateur (Computer Vision).

## 🎯 Contexte et Problématique
Une place de marché e-commerce (type Flipkart) souhaite automatiser l'attribution de la catégorie d'un produit lors de sa mise en ligne par un vendeur. Le but est d'étudier la faisabilité d'un tel moteur de classification en analysant conjointement les descriptions textuelles et les images des produits.

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **NLP (Texte) :** NLTK, Spacy, Bag-of-Words, TF-IDF, Word2Vec, BERT (HuggingFace)
- **Computer Vision (Image) :** OpenCV, SIFT, ORB, CNN, Transfer Learning (VGG16, ResNet)
- **Machine Learning / Deep Learning :** TensorFlow, Keras, Scikit-Learn

## 🚀 Mes Missions et Réalisations
- Nettoyage des données textuelles (tokenisation, lemmatisation, stop-words) et prétraitement des images (redimensionnement, filtrage).
- Extraction de features textuelles (approches classiques vs plongements de mots type Word2Vec/USE/BERT).
- Extraction de features visuelles (algorithmes traditionnels SIFT/ORB vs réseaux de neurones pré-entraînés en Transfer Learning).
- Réduction de dimension (PCA, t-SNE) pour vérifier visuellement la séparation des catégories.
- Entraînement de modèles de classification de test.

## 📊 Résultats et Impact
L'étude a démontré la faisabilité technique de la classification automatique. L'utilisation de modèles de pointe (Transfer Learning pour l'image et USE/BERT pour le texte) a permis d'obtenir des scores de précision très élevés, facilitant le travail futur de mise en production.

## 🎯 COMPÉTENCES ACQUISES
- Extraire des features textuelles (NLP)
- Extraire des features visuelles (Computer Vision)
- Utiliser le Transfer Learning
`
  },
  {
    title: "Analyse de Sentiments grâce au Deep Learning",
    description: "Mise en place d'un modèle de Deep Learning (NLP) pour analyser et prédire automatiquement le sentiment (positif/négatif) des tweets, avec un déploiement Cloud via API.",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP7",
    imgUrl: p7,
    markdownContent: `# Analyse de Sentiments grâce au Deep Learning

**Période :** 2024

## 📝 Résumé court
Mise en place d'un modèle de Deep Learning (NLP) pour analyser et prédire automatiquement le sentiment (positif/négatif) des tweets, avec un déploiement Cloud via API.

## 🎯 Contexte et Problématique
Une entreprise fictive du secteur aéronautique ("Air Sur") souhaite analyser les retours de ses clients sur les réseaux sociaux. Le but était de concevoir un modèle d'analyse de sentiments performant sur des données textuelles brutes (tweets) et de déployer ce modèle de manière à ce qu'il soit interrogeable via une API.

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Deep Learning & NLP :** TensorFlow, Keras, RNN, LSTM, GRU, Word Embeddings (GloVe), BERT
- **Cloud & Déploiement :** API Flask / FastAPI, Microsoft Azure (ou AWS)
- **Outils :** MLflow, Git, GitHub Actions

## 🚀 Mes Missions et Réalisations
- Pré-traitement avancé de textes courts et bruités (regex, suppression de hashtags/mentions).
- Conception, entraînement et comparaison de plusieurs architectures de réseaux de neurones récurrents (LSTM, GRU).
- Fine-Tuning de modèles de langage avancés (ex: BERT) pour maximiser l'accuracy.
- Déploiement du modèle sélectionné sous forme d'API REST hébergée dans le Cloud.

## 📊 Résultats et Impact
Le modèle Deep Learning a permis d'automatiser le tri de milliers de retours clients avec une haute fiabilité. Le déploiement de l'API permet désormais à toute application tierce d'interroger le modèle en temps réel.

## 🎯 COMPÉTENCES ACQUISES
- Développer un modèle de Deep Learning (RNN/BERT)
- Déployer un modèle dans le Cloud
`
  },
  {
    title: "Segmentation d'images pour véhicules autonomes",
    description: "Entraînement de modèles de Computer Vision (Deep Learning) pour réaliser de la segmentation sémantique d'images urbaines afin d'équiper des véhicules autonomes.",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP8",
    imgUrl: p8,
    markdownContent: `# Segmentation d'images pour véhicules autonomes

**Période :** 2024

## 📝 Résumé court
Entraînement de modèles de Computer Vision (Deep Learning) pour réaliser de la segmentation sémantique d'images urbaines afin d'équiper des véhicules autonomes.

## 🎯 Contexte et Problématique
Une start-up souhaite développer un système de vision par ordinateur pour voitures autonomes. L'objectif était de concevoir un modèle capable de détourer (segmenter) chaque élément d'une image (route, piétons, véhicules, panneaux) au pixel près, en utilisant la base de données Cityscapes, tout en déployant une architecture cloud adaptée.

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Computer Vision & Deep Learning :** TensorFlow, Keras, U-Net, FCN (Fully Convolutional Networks), Data Augmentation
- **Cloud & Outils :** Azure ML (ou AWS EC2/S3), GPU Computing, MLflow

## 🚀 Mes Missions et Réalisations
- Création d'un pipeline de chargement et de prétraitement des images lourdes (masques au niveau du pixel).
- Implémentation d'une technique de Data Augmentation optimisée pour prévenir le surapprentissage.
- Développement et entraînement de modèles d'état de l'art pour la segmentation sémantique (architecture type U-Net, VGG16 en backend).
- Entraînement distribué sur le Cloud en utilisant la puissance de calcul des GPU.

## 📊 Résultats et Impact
Le modèle a atteint des scores très satisfaisants de IoU (Intersection over Union), prouvant sa capacité à distinguer de manière fiable la route des obstacles, étape critique pour la sécurité d'un véhicule autonome.

## 🎯 COMPÉTENCES ACQUISES
- Concevoir un modèle de segmentation d'images
- Utiliser la Data Augmentation
- Entraîner des modèles sur le Cloud
`
  },
  {
    title: "Développement d'une preuve de concept (Green AI)",
    description: "Développement d'une Preuve de Concept (PoC) en Intelligence Artificielle basée sur un benchmark poussé entre un modèle issu d'une veille technologique et deux modèles d'état de l'art (SOTA).",
    githubUrl: "https://github.com/KamelBenstaali/OpenClassroomP9",
    imgUrl: p9,
    markdownContent: `# Développement d'une preuve de concept (Green AI)

**Période :** 2024

## 📝 Résumé court
Développement d'une Preuve de Concept (PoC) en Intelligence Artificielle basée sur un benchmark poussé entre un modèle issu d'une veille technologique et deux modèles d'état de l'art (SOTA).

## 🎯 Contexte et Problématique
L'objectif de ce projet était de répondre à un besoin précis en réalisant une étude comparative (benchmark) rigoureuse. Il s'agissait d'évaluer les performances d'un modèle innovant identifié lors d'une phase de veille technologique, et de le confronter à deux modèles de référence reconnus dans l'état de l'art pour valider sa pertinence.

## 🛠️ Technologies Utilisées
- **Langages :** Python
- **Développement & ML :** Scikit-Learn, Pandas, TensorFlow, Streamlit et FastAPI
- **Cloud & MLOps :** Docker, GitHub Actions (CI/CD), Hébergement Cloud
- **Outils :** Jupyter Notebook, Git, GitHub

## 🚀 Mes Missions et Réalisations
- Réalisation d'une veille technologique approfondie pour identifier un modèle récent et pertinent pour la problématique.
- Sélection de deux modèles de référence (état de l'art) pour établir une base de comparaison solide (baseline).
- Implémentation, entraînement et optimisation de ces trois modèles sur un jeu de données commun.
- Évaluation comparative des performances (benchmark) à l'aide de métriques adaptées au contexte métier.

## 📊 Résultats et Impact
La preuve de concept a permis de démontrer objectivement quel algorithme offrait le meilleur compromis de performance. Ce projet illustre ma capacité à m'approprier des travaux de recherche récents et à les comparer avec une grande rigueur scientifique.

## 🎯 COMPÉTENCES ACQUISES
- Réaliser une veille technologique
- Comparer des modèles d'état de l'art
- Développer et déployer une Preuve de Concept (PoC)
`
  },
];