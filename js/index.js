import data from "./data.js"

const title = data.title

const titleTag = document.getElementById('title')
const declarationTag = document.getElementById('declaration')
const historyTag = document.getElementById('history')
const mottoTag = document.getElementById('motto')


//
titleTag.innerHTML = title
declarationTag.innerHTML = data.declaration
historyTag.innerHTML = data.history
mottoTag.innerHTML = data.motto

//creations
const creations = data.creations
const creationsTag = document.getElementById('content-creations')

creations.map(element=>{
    creationsTag.appendChild(creationsComponent(element))
})


/*
**cardComponent
*/ 

function creationsComponent(creation){
    const creationDetail = document.createElement('div')
    creationDetail.classList.add('creation')
    creationDetail.innerHTML = `<img src="images/desktop/${creation.image}"></img>
                                <h5>${creation.title}</h>
    
    `
    return creationDetail
}


// Footer
const links = data.links

const titleFooter = document.getElementById('titleFooter')
const facebookTag = document.getElementById('facebook-a')
const instaTag = document.getElementById('insta-a')
const xTag = document.getElementById('twitter-a')
const pintersTag = document.getElementById('pintrest-a')

titleFooter.innerHTML = title
facebookTag.href = links.facebookLink
xTag.href = links.xLink
pintersTag.href = links.pinterstLink
instaTag.href = links.instaLink



