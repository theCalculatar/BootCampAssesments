import data from "./data.js"

// defining data
const profile = data.profile
const logo = data.logo
const education = data.profile.education
const certificates = data.profile.certificates
const projects = data.projects

// get elements from document
const logoTag = document.getElementById('logo')
const nameTag = document.getElementById('name')
const titleTag = document.getElementById('title')
const profileTag = document.getElementById('me-picture')
const introTag = document.getElementById('intro')
const eduContainerTag = document.getElementById('edu-container')
const certificatesContainerTag = document.getElementById('certificates-container')

const facebookTag = document.getElementById('facebook-a')
const instaTag = document.getElementById('insta-a')
const xTag = document.getElementById('twitter-a')

//initializing tags
logoTag.src = logo
nameTag.innerHTML = `${profile.surname} ${profile.name}`
titleTag.innerHTML = profile.title
profileTag.src = profile.image
introTag.innerHTML = profile.intro

facebookTag.href = profile.facebookLink
instaTag.href = profile.instaLink
xTag.href = profile.xLink

logoTag.src = logo

// education 
education.map(edu => {
    eduContainerTag.appendChild(eduElement(edu))
})
//certificates
certificates.map(edu => {
    certificatesContainerTag.appendChild(certElement(edu))
})




/*
** Components like thingies for html elements
**
*/
function eduElement(edu){
    const educationDeatil = document.createElement('p')
    educationDeatil.classList.add('p-list')
    educationDeatil.innerHTML = `${edu.institution} | ${edu.end_year}`
    return educationDeatil
}

function certElement(certificate){
    const certDeatil = document.createElement('p')
    certDeatil.classList.add('p-list')
    certDeatil.innerHTML = `${certificate.issuer} | ${certificate.date}`
    return certDeatil
}

//Projects

const projectContainer = document.getElementById('project-c')

projects.map(project=>{
    projectContainer.appendChild(projectElement(project))
})

function projectElement(project){
    var stackList = ''

    const projectDetail = document.createElement('div')
    projectDetail.classList.add('project')
    projectDetail.innerHTML = `
        <img src="${project.image}" alt="project">
        <h3 class="title">${project.title}</h3>
        <p class="desciption">${project.decription.toString()}</p>
    `
    const stacks = document.createElement('ul')
    stacks.classList.add('stacks')
    project.stacks.map(element => {
        stackList += `<li>${element}</li>`
    });
    stacks.innerHTML = stackList

    projectDetail.appendChild(  stacks  )

    return projectDetail
}