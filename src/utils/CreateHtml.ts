import { ProfileSchema } from "./schema";

export function generateResumeHTML(data:ProfileSchema) {
    return ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data?.personalInfo?.name}'s Resume</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body style="padding: 4em;">
<style>
body{
    background-color: rgb(0, 15, 34);
}
* {
    margin: 0;
    color: white;
    letter-spacing: .75px;
    line-height: 25px;
}
hr{
    background-color:white;
    opacity:.25;
    height:.1px;
}
article{
    margin-bottom: 2em;
}
.text-xs{
    font-size: 0.75rem; /* 12px */
}
.text-sm{
    font-size: 0.875rem; /* 14px */
}
.text-base{
    font-size: 1rem; /* 16px */
}
.text-lg{
    font-size: 1.125rem; /* 18px */
}
.text-xl{
    font-size: 1.425rem; /* 18px */
}
p {
    margin-bottom: .5em;
}

h1,
h2 {
    color: rgb(0 96 223);
}

h1,
h2,
h3 {
    margin-bottom: .25em;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.gap-1 {
    gap: 0.25rem; /* 4px */
}

.gap-2 {
    gap: 0.5rem; /* 8px */
}

.gap-3 {
    gap: 0.75rem; /* 12px */
}

.flex-grow {
    flex-grow: 1;
}

.font-bold{
    font-weight: bold;
}

.font-light{
    font-weight: lighter;
}

.font-md{
    font-weight: 500;
}

.text-gray{
    color: rgb(140, 140, 140);
}

.text-xgray{
    color: rgb(55, 55, 55);
} 
.text-grayish{
    color: rgb(165, 165, 165);
}

.text-black{
    color: black;
}

.text-white{
    color: white;
}


.mb-1{
    margin-bottom: 1.25em;
}
 
.my-1{
    margin-block: 2.25em;
}

.mb-05{
    margin-bottom: .75em;
}
</style>

<header style="margin-bottom: 5em;" class="resume-heading">
    <h1 class="mb-05" style="color: white;">${data?.personalInfo?.name}</h1>
    <h2 class="text-md font-light text-white">${data?.personalInfo?.title || ""}</h2> 
</header>
<main style="gap: 4em;" class="flex">
    <section class="left-section flex-grow">
        <article class="personal-details">
            <h1 class='mb-1'>Personal Details</h1>
            <div class="flex flex-col gap-2">
                ${data?.contact?.email ? `
                <div class="flex gap-2">
                    <i class="fa fa-envelope"></i>
                    <p>${data?.contact.email}</p>
                </div>`
            : ""} 
                ${data?.contact?.linkedin ? `
                <div class="flex gap-2">
                    <i class="fa fa-circle-user"></i>
                    <a href="${data?.contact.linkedin}">${data?.contact.linkedin}</a>
                </div>`
            : ""}
                ${data?.personalInfo?.location ? `
                <div class="flex gap-2">
                    <i class="fa fa-location-dot"></i>
                    <p>${data?.personalInfo?.location?.city}, ${data?.personalInfo?.location?.state}</p>
                </div>`
            : ""} 
            </div>
        </article>
        <article class="educational-details">
            ${data?.education.length>0 && "<h1 class='mb-1'>Education Details</h1>"}
            ${data.education.length>0?data.education.map(edu => `
            <div class="mb-1">
                <p class="font-bold text-sm">${edu.institution}</p>
                <p class="text-sm">${edu.field}</p>
                <p class="text-sm text-gray">${(edu.startDate && edu.endDate) ? `${edu.startDate} - ${edu.endDate}` : ""}</p>
            </div>
            `).join(''):""}
        </article>
        <article class="skills">
            ${Object.keys(data.skills).length>0 ? `<h1 class='mb-1'>Skills</h1>` : ""} 
            
            ${Object.keys(data.skills).length>0 ? `
            <div class="flex flex-col gap-3">
                <div class="flex flex-col">
                    ${Object.keys(data.skills).map(skill => `
                        <h3 class="text-sm">${skill}:</h3>
                        <p style="" class="text-sm mb-05">${data.skills?data.skills[skill].join(', '):""}</p>
                    `).join('')}
                </div>
            </div> 
            `
            : ""}
        </article>
        <article class="certifications">
            ${data.certifications.length>0 ? `<h1 class='mb-1'>Certifications</h1>` : ""}  
            ${data.certifications.length>0 ? data.certifications.map(cert => `
            <div class="flex flex-col mb-1">
                <h3 class="text-base">${cert.name}</h3>
            </div>
            `).join('') : ""}
        </article>
    </section>

    <section class="right-section flex-grow">
        <article class="profile-summary">
            ${data?.personalInfo?.summary ? `<h1 class='mb-1'>Profile</h1>` : ""}  
            <p class="">${data?.personalInfo?.summary}</p>
        </article>
        <article class="experience mb-1 ">
            ${data?.experience ? `<h1 class='mb-1'>Experience</h1>` : ""} 
            ${data?.experience ? data.experience.map(exp => `
            <div class="flex flex-col">
                <h3 class="text-base">${exp.company}
                     | <span class="font-light">${exp.title}</span>
                </h3> 
                <p class="font-light text-xs">${exp.startDate} - ${exp.endDate} <span class="text-grayish">(${exp.duration})</span></p> 

                <p class="text-sm text-gray">Skills: <span class="font-bold text-gray">${exp.skills ? exp.skills.join(', ') : ""}</span></p>
                ${exp.responsibilities.length>0 ? ` 
                <h4 class="text-sm mb-05 ">Responsibilities</h4>
                <ul>
                    ${exp.responsibilities.length>0 ? exp.responsibilities.map(resp => `<li>${resp}</li>`).join('') : ""}
                </ul>
                `
                    : ""}
            </div>
            <hr class="my-1 h-1"/>
            `).join(''):""}
        </article> 
    </section>
</main>
</body>
</html>

`;
}