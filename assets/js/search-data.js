// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Our current and past funding sources",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "Awards, prizes and competitive fellowships received by members of the MALL Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Meet the people behind our research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-new-webpage-under-construction",
          title: 'New webpage under construction!!',
          description: "",
          section: "News",},{id: "news-adding-info-about-us-publications-projects-and-teams",
          title: 'Adding info about us, publications, projects and teams!',
          description: "",
          section: "News",},{id: "news-the-deposit-of-diego-fernández-edreira-s-thesis-has-been-made",
          title: 'The deposit of Diego Fernández-Edreira’s thesis has been made.',
          description: "",
          section: "News",},{id: "news-new-collab-publication-available-determination-of-the-presence-of-pharmacological-residues-in-human-feces-by-liquid-chromatography-tandem-mass-spectrometry",
          title: 'New collab publication available! Determination of the presence of pharmacological residues in human...',
          description: "",
          section: "News",},{id: "news-new-collab-publication-available-exploiting-the-synergy-between-computational-and-experimental-biophysics-for-efficient-cancer-drug-development",
          title: 'New collab publication available! Exploiting the synergy between computational and experimental biophysics for...',
          description: "",
          section: "News",},{id: "news-new-collab-publication-available-interpretable-inflammation-landscape-of-circulating-immune-cells",
          title: 'New collab publication available! Interpretable inflammation landscape of circulating immune cells',
          description: "",
          section: "News",},{id: "news-award-fundación-barrié-real-academia-galega-de-ciencias-2025-for-the-work-cx43-enhances-response-to-braf-mek-inhibitors-by-reducing-dna-repair-capacity",
          title: 'Award Fundación Barrié – Real Academia Galega de Ciencias 2025. For the work...',
          description: "",
          section: "News",},{id: "news-thesis-defense-announcement-diego-fernández-edreira-will-defend-his-phd-thesis-computational-analysis-of-the-human-microbiome-as-a-source-of-clinical-biomarkers-on-march-27-at-12-00-am",
          title: 'Thesis Defense Announcement: Diego Fernández Edreira will defend his PhD thesis, “Computational Analysis...',
          description: "",
          section: "News",},{id: "news-new-collab-publication-available-comparative-evaluation-of-deep-learning-architectures-for-bioclast-classification-in-atomic-force-microscopy-images",
          title: 'New collab publication available! Comparative evaluation of deep learning architectures for bioclast classification...',
          description: "",
          section: "News",},{id: "news-diego-fernández-edreira-successfully-defended-his-phd-thesis-computational-analysis-of-the-human-microbiome-as-a-source-of-clinical-biomarkers-earning-the-highest-grade-sobresaliente-cum-laude-congratulations-dr-fernández-edreira",
          title: 'Diego Fernández-Edreira successfully defended his PhD thesis “Computational Analysis of the Human Microbiome...',
          description: "",
          section: "News",},{id: "news-raúl-mouzo-quiza-has-won-the-first-prize-at-the-xi-premios-tfg-aplicado-del-gei-for-his-work-plataforma-integrada-para-la-simulación-de-docking-molecular-y-el-análisis-de-firmas-genéticas-en-entornos-hpc-y-cloud-congratulations",
          title: 'Raúl Mouzo Quiza has won the First Prize at the XI Premios TFG...',
          description: "",
          section: "News",},{id: "news-new-conference-contribution-at-rexpo26-repo4eu-annual-conference-repo-sudoe-advances-on-the-transnational-network-for-drug-repurposing-in-the-sudoe-space",
          title: 'New conference contribution at RExPO26 (REPO4EU Annual Conference): RePo-SUDOE – Advances on the...',
          description: "",
          section: "News",},{id: "projects-precision",
          title: 'PRECISION',
          description: "Explainable graph convolutional networks for innovation in precision oncology and drug resistance in cancer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PRECISION_project/";
            },},{id: "projects-repo-sudoe",
          title: 'RePo-SUDOE',
          description: "Drug Repurposing for Effective and Accelerated Drug Development in the SUDOE Space",
          section: "Projects",handler: () => {
              window.location.href = "/projects/REPOSUDOE_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%6C%6C.%6C%61%62.%64%65%76@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MALL-Lab", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
