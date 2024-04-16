// APIS
const educationData = [
    {
        institution: "Seneca College",
        duration: "(2023-2025)",
        description: "Studying at Seneca College since fall 2023 has been an enriching journey of learning and personal development. The diverse range of experiences, from acquiring new programming skills to interacting with people from various cultural backgrounds, has undoubtedly enhanced my abilities as a programmer and broadened my perspective on the world."
    },
    {
        institution: "Gujarat University",
        duration: "2022 - Graduated",
        description: "Attending Gujarat University for my diploma in Computer Engineering marked a crucial juncture in my life. Despite already enjoying coding, my time at the university intensified my passion for it, solidifying my commitment to the field."
    }
];

const skillsData = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "C/C++"
];

const projectData = [
    {
      title: "Portfolio Website",
      image: "./assets/profolioweb.png",
      description: "I am developing Portfolio Website for myself with help of knowledge of web222. I wanted to submit that website but because of exams I will be not able to make that website in time.",
      link: "https://krishxps-portfolio.vercel.app/"
    },
    {
      title: "TinDog",
      image: "/assets/tindog.png",
      description: "Tindog (I did this with help of YouTube Tutorial): the ultimate dating app for dogs! Connect with furry friends nearby for tail-wagging adventures. Join now and sniff out your perfect match!",
      link: "https://krishxps.github.io/TinDog/"
    },
    {
      title: "Project 3",
      image: "project3.jpg",
      description: "Description of Project 3.",
      link: "#"
    }
  ];
document.addEventListener('DOMContentLoaded', function () {
    const hiringRadio = document.getElementById('hiring');
    const hourlyRate = document.getElementById('hourly_rate');

    hiringRadio.addEventListener('change', function () {
        if (this.checked) {
            hourlyRate.style.display = 'block';
        } else {
            hourlyRate.style.display = 'none';
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function createEducationItems() {
    const educationInfo = document.querySelector(".education-info");

    educationData.forEach((item) => {
        const educationItem = document.createElement("div");
        educationItem.classList.add("education-item");

        const title = document.createElement("h3");
        title.classList.add("education-title");
        title.textContent = item.institution;

        const duration = document.createElement("p");
        duration.classList.add("education-duration");
        duration.textContent = item.duration;

        const description = document.createElement("p");
        description.classList.add("education-description");
        description.textContent = item.description;

        educationItem.appendChild(title);
        educationItem.appendChild(duration);
        educationItem.appendChild(description);

        educationInfo.appendChild(educationItem);
    });
}
// Function to create skills list
function createSkillsList() {
    const skillsSection = document.getElementById("skills");

    const skillsList = document.createElement("ul");
    skillsList.classList.add("skills-list");

    skillsData.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });

    skillsSection.appendChild(skillsList);
}


// Function to create project items
function createProjectItems() {
    const projectContainer = document.getElementById("project-container");

    projectData.forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.title;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const link = document.createElement("a");
        link.href = project.link;
        link.textContent = "View Project";

        projectItem.appendChild(image);
        projectItem.appendChild(title);
        projectItem.appendChild(description);
        projectItem.appendChild(link);

        projectContainer.appendChild(projectItem);
    });
}

createEducationItems();
createSkillsList();
createProjectItems();