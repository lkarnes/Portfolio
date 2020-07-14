
import Bountiful from '../images/Bountiful.jpeg';
import Better from '../images/BetterProfessor.png';
import DadJokes from '../images/dad-jokes.png';
import Findur from '../images/Findur.png';
import Cgol from '../images/cgol.PNG'

export const projectsData = [
    {
        id: 1,
        title:'Better Professor, Build Week Unit 3 w/ Lambda',
        date:'late October 2019',
        description: 'The Better Professor App allows a professor to login or sign up and then gives the professor the ability to add, delete, and edit students as well projects for that student. Allowing the professor to keep track of his students and upcoming projects due for each one of them. This build week taught me a lot when it comes to axios calls, authentication, and localStorage. I also learned how to work well with a team of developers(four). We managed to stay on top of everything and stay organized finishing the entire two weeks without a single merge conflict. I am very proud of what we were able to pull off this build week and was complemented by my Project Lead on my leadership skills. This project is hosted so if youd like please click the link below and sign up to test the features of the site!',
        skills:  ['localStorage', 'Authentication', 'react-router','forms', 'APIs', 'useState','CRUD Operations', 'reactstrap'],
        img: `${Better}`,
        githubLink: 'https://github.com/lkarnes/better-professor-app',
        siteLink: 'https://betterprofessor19.netlify.com'
    },
    {
        id: 2,
        title:'Bountiful StoryTelling Build Week Unit 2 w/ Lambda',
        date:'late August 2019',
        description: 'This was my second build week I did with Lambda School which me and my partner built using React.js. My teammate and I worked together with a back end developer to build a fully functional web page which allows users to sign up, share their story to others, view others stories and much more. I mostly focused on the sign up, country selector, routing, saving, editing, and user profile. This was my first project using React while working on a team and it taught me how to share ideas and work with others to make all the puzzle pieces go together. Although I didnt finish everything I wanted to due to the 2 week time restraint and my limited part-time school schedule I am happy we were able to show our fully functional project.*Please keep in mind that this project was not graded based on design and strictly on functionality*',
        skills: ['react', 'react-router','forms', 'APIs', 'useState', 'useEffect', 'CSS/LESS' ],
        img: `${Bountiful}`,
        githubLink: 'https://github.com/lkarnes/StoryTelling-Front-End'
    },
    
    {
        id: 3,
        title:'Dad Jokes Web API: Node',
         date:'December 2019',
          description: 'In this project I collaborated with the front end developers in my group to assemble a well structured database that fits the needs of the application. I built this server from the ground up and made changes that were requested by the other developers(me as backend and 2 otheres aS front end). Although my frontend developers ran out of time before being able to add features like the ability to save and edit jokes all the basic CRUD operations are built out in the back end with end to end testing. This server was built using mainly Node.js, express, knex and SQL.', 
    skills: ["Node.js", "express", "helmet", "SQL", "sqlite", "knex", "jsonwebtokens", "middleware", "authentication","encryption(bcrypt.js)", "cross-env" ],
    img: `${DadJokes}`, 
    githubLink: 'https://github.com/lkarnes/Back-end',
    siteLink: ''},
    {id: 4,title:'FindUr.city Lambda Labs', date:'January-May 2020', description: "Lambda Labs is The Biggest Project in Lambdas Program, spanning over 4 months it is made to simulate working on a real development team from beginning to end of a project. My group(4 developers, 2 designers and 3 data scientists) worked together to build Findur.city, an application made to help the user find the city they need based off of surveys and the DS teams custom livability score. Lambda Labs was an amazing learning experience, from learning how to speak with a stakeholder, working with UX designers and Data Scientist to writing new, clean and efficient code with a strong team of developers.",
    skills: ['react', 'react-router','forms', 'APIs', 'useState', 'useEffect', 'CSS/LESS',"Node.js", "express", "pgAdmin", "postgres", "knex", "middleware", "third-party authentication" ],
      img:`${Findur}`, githubLink: 'https://github.com/Lambda-School-Labs/juxta-city-data-fe',
      siteLink: 'https://production-juxta-city.herokuapp.com/'},
    {id:5, title:'Conways Game of Life', date:'June 2020', description:'Conways Game of Life was created by the Mathmatician John Conway in the 70s originally done with pen in paper it has become a huge trend in the Computer Science community. Sadly John Conway passed away earlier this year during the Corona Virus outrbreak, to help commemorate him Lambda School assigned The Game of Life as our first CS Build Week. for this project I decided the stick with Vanilla JS rather than React or python to refresh myself on the syntax and improve my general JS ability. to display the cells on the screen I used a HTML table and assigned each position a unique id (example: r1c2 = row 2 column 3). I then created a 2d array that matches the hight and width of the table and used that to loop through and run the function to check if the cell is dead alive or born based off of conways rules. I also created some additional features like changing the timing, width, height as well as randomization, clickable cells and some prebuilt shapes that can be used. I highly encourage you to check it out if you are not familiar of Conways Game of Life its a lot of fun and pretty interesting.',
    skills: ['Vanilla JS','Algorithms','Computer Science','CSS', 'HTML Tables'],  img: `${Cgol}`, siteLink: 'https://lkarnes.github.io/CS-Build-Week-1/index.html', githubLink:'https://github.com/lkarnes/CS-Build-Week-1'},
    // {id:6,title:'t4', date:'', description: '',  skills: [],  img: '', link: ''},
    // {id:7,title:'t4', date:'', description: '',  skills: [],  img: '', link: ''},
    // {id:8,title:'t4', date:'', description: '',  skills: [],  img: '', link: ''},
    // {title:'t5', date:'', description: '',  skills: [], img: '', link: ''},
    ]
    //{title:'', date:'', description: '', img: '', link: ''},
