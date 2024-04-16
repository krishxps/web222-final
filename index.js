// APIS
const aboutMeInfo = [
    { label: "Age:", value: "20" },
    { label: "Email:", value: "kspatel46@myseneca.ca" },
    { label: "Language:", value: "English, Hindi, Gujarati, Spanish" },
    { label: "Class Section:", value: "ZCC" },
    { label: "Student ID:", value: "106198237" },
    { label: "Professor:", value: "Mark Meritt" }
];

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
        title: "More Project Soon...",
        image: "https://media.istockphoto.com/id/1302168946/vector/coming-soon-red-ribbon-label-banner-open-available-now-sign-or-coming-soon-tag-vector.jpg?s=612x612&w=0&k=20&c=uzI1Ztsm3NcyQCscb1kQ3goarshfkR_n2ZDhAwgYPWQ=",
        description: "Exciting new projects are on the horizon! Stay tuned for more innovative creations coming your way soon. Keep an eye out for updates and be the first to explore these upcoming endeavors.",
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
function generateHonestySection() {
    const honestySection = document.querySelector('.honesty');
    const honestyParagraph = document.createElement('p');
    honestyParagraph.textContent = "I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students.";
    honestySection.appendChild(honestyParagraph);
}

function generateAboutMeSection() {
    const aboutMeSection = document.querySelector('#infographic .container');
    aboutMeInfo.forEach(item => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${item.label} ${item.value}`;
        aboutMeSection.appendChild(paragraph);
    });
}

generateHonestySection();
generateAboutMeSection();
createEducationItems();
createSkillsList();
createProjectItems();


