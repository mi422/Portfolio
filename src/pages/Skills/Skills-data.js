import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import C_SHARP from "../../assets/img/skills/c--4.svg";
import FIREBASE from "../../assets/img/skills/firebase-1.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";

export const skills={
    frontend :[
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: L_HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: L_CSS3,
            skillName: "CSS3",
          },
          {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
          },
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          },
    ],
      hostingPlatforms: [
        {
          link: "https://pages.github.com/",
          imgAltText: "GitHub Pages",
          imgSrc: L_GITHUB_PAGES ,
          skillName: "GitHub Pages",
        },
        {
          link: "https://firebase.google.com/",
          imgAltText: "Firebase",
          imgSrc: FIREBASE,
          skillName: "Firebase",
        },
      ],
      programmingLanguages: [
        {
          link: "https://www.javascript.com/",
          imgAltText: "JavaScript",
          imgSrc: L_JAVASCRIPT,
          skillName: "JavaScript",
        },
        {
          link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
          imgAltText: "C#",
          imgSrc: C_SHARP,
          skillName: "C#",
        },
      ],
      versionControl: [
        {
          link: "https://git-scm.com/",
          imgAltText: "GIT",
          imgSrc: L_GIT,
          skillName: "GIT",
        },
      ],
      databases: [
        {
          link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
          imgAltText: "MS-SQL",
          imgSrc: L_MSSQL,
          skillName: "MS-SQL",
        },
      ],
};