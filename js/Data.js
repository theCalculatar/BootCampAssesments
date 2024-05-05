
//Profile
const name = 'Mahlane'
const surname = 'Mabetlela'
const bio =`Hello! I'm Alpheus Mabetlela, a computer enthusiast with a diverse set of interests and skills. My journey in the world of technology began with a BSc in Computer Science and Statistics. I thrive on exploring everything related to computers, from coding, DIY projects and chess to hitting the gym and diving into video games.
<br><br>Proficient in Java, C++, Js, sql, and Python, I have hands-on experience working on multiple projects for myself and as freelancer with various frameworks, including Android Studio, React Native, Django, and Django Rest Framework. My passion lies in the intersection of creativity and technology, and I enjoy leveraging my programming expertise to bring innovative ideas to life and to make day to day tasks simpler for mankind
<br><br>When not immersed in lines of code, you'll find me strategizing on the chessboard, staying active in the gym, or immersing myself in the latest video game adventures. Always up for a challenge, I embrace opportunities to learn and grow in the ever-evolving landscape of computer science.`
const title ='Software developer | UX Enthusiast'
const intro =`Hello! I'm Alpheus Mabetlela, a recent graduate with a degree in <a style="text-decoration: none;" href="https://www.ul.ac.za/index.php?Entity=School%20Main%20Menu&school_id=1">Computer Science</a> from the <a style="text-decoration: none;" href="https://ul.ac.za">University of Limpopo</a>. My passion lies in both front-end and back-end development, 
where I find joy in crafting elegant software solutions and creating engaging user experiences.
<br>When I'm not coding, you'll often find me strategizing on the chessboard, staying active in the gym, or diving into the latest video game adventures. I thrive on challenges and am always eager to learn and adapt in the dynamic world of computer science.`

//External links
const address = 'Mentz Mshongoville,R71 Stand no 632'
const facebookLink = 'https://web.facebook.com/al.yas.58726823'
const instaLink = 'https://www.instagram.com/iam.mahlane'
const xLink = 'https://x.com'
const githubLink = 'https://github.com/theCalculatar'

//images
const image = '../assets/headshot.jpeg'
const video = '../assets/video.mp4'
const logo = 'assets/logo-light.png'

//Map thingie
const embededLink = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14590.537041707865!2d29.754185149999998!3d-23.902584549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1714820031775!5m2!1sen!2sza'

//projects
const projects = [
    {   image:'assets/img/medinow-screenshots.png',
        title:'Medinow',
        decription:`Welcome Medinow App, your reliable companion in times of need! primarily build for students, our app is 
        designed with your safety in mind, providing a range of features to ensure swift and effective emergency 
        assistance.`,
        stacks:[
            'Kotlin',
            'Java',
            'XML',
            'Google Maps',
            'Android studio',
            'Room Database']
    },
    {   image:'assets/img/weather-screenshots.png',
        title:'Weather App',
        decription:`Weather is an application that retrieves and displays weather information for a user ' s location. The app should use a weather API to fetch real-time weather data, display it
        to the user, and provide a forecast for the upcoming days`,
        stacks:['Kotlin','XML','Android studio','OpenWeatherApi']
    },
    {   image:'assets/img/Taskmanager-screenshots.png',
        title:'Task Manager',
        decription:`task management Android application. The app allow users to create, edit, and manage tasks and to-do lists. Application features includes task prioritization
        due dates, Notification and Data Storage.`,
        stacks:['Kotlin',
        'Java',
        'XML',
        'Android studio',
        'Room Database, Work manager']
    },

]

//Education
const education = [
    {
        institution:'University of limpopo',
        end_year: 2023
    },
    {
        institution:'Marobathota High school',
        end_year: 2018
    }
]

//certificates
const certificates = [
    {
        issuer: 'MTN Business App academy',
        date: 2024
    }
]

const profile = {name, surname, title, education, certificates, intro, image, video, bio, address, githubLink, facebookLink, instaLink, xLink}

export default {profile, projects, logo, embededLink}

