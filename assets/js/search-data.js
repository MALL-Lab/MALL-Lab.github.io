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
          section: "News",},{id: "projects-precision",
          title: 'PRECISION',
          description: "Explainable graph convolutional networks for innovation in precision oncology and drug resistance in cancer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PRECISION_project/";
            },},{id: "projects-repo-sudoe-project",
          title: 'RePo-SUDOE project',
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
