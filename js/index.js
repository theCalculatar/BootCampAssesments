import data from "./data.js"

// defining data
const profile = data.profile
const logo = data.logo
const mapLink = data.embededLink

// get elements from document
const nameTag = document.getElementById('name')
const imageTag = document.getElementById('image')
const videoTag = document.getElementById('video')
const bioTag = document.getElementById('bio')

const addressTag = document.getElementById('address')
const facebookTag = document.getElementById('facebook-a')
const instaTag = document.getElementById('insta-a')
const xTag = document.getElementById('twitter-a')
const githubLink = document.getElementById('github')

const logoTag = document.getElementById('logo')

const mapTag = document.getElementById('imap')

//initiallizing the tags dynamically
bioTag.innerHTML = `${profile.bio}`
nameTag.innerHTML = `${profile.name} ${profile.surname}`
imageTag.src = profile.image
videoTag.src = profile.video

addressTag.innerHTML = profile.address
facebookTag.href = profile.facebookLink
instaTag.href = profile.instaLink
xTag.href = profile.xLink
githubLink.href = profile.githubLink

logoTag.src = logo
mapTag.src = mapLink

