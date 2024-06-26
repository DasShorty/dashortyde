"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const languages = document.getElementById("languages");
    const javaBar = document.getElementById("java-bar");
    const javaScriptBar = document.getElementById("javascript-bar");
    const experienceJava = document.getElementById("experience-java");
    const experienceJavaScript = document.getElementById("experience-javascript");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(value => {

            if (value.isIntersecting) {

                console.log("Animation");

                javaBar.style.width = this.getUntilTenYearsOfExperience(2019) + "%";
                javaScriptBar.style.width = this.getUntilTenYearsOfExperience(2023) + "%";

                experienceJava.innerText = this.getYearsOfExperienceText(2019)
                experienceJavaScript.innerText = this.getYearsOfExperienceText(2023);

                observer.unobserve(languages);

            }

        });

    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    });

    observer.observe(languages);

});

function getUntilTenYearsOfExperience(start) {
    return ((new Date().getFullYear() - start) / 10) * 100;
}

function getYearsOfExperience(start) {
    return new Date().getFullYear() - start;
}

function getYearsOfExperienceText(start) {

    let years = getYearsOfExperience(start);

    if (years === 1) {
        return years + " year of experience"
    } else {
        return years + " years of experience"
    }

}