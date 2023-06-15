import React from 'react';

const HomePage = () => {
  return (
    <div className="w-5/6 mx-auto mt-5">
     <div className="flex flex-row justify-around text-center gap-5">
        <div>
          <h1 className="text-5xl my-5">Iryna Kolhanova | <span className="text-lg">Front-end Developer</span></h1>
          <h3 className="text-2xl text-left my-2">Summary:</h3>
          <p className="text-left"> 
              A highly skilled Frontend Web Developer with experience to design and implement responsive and user-friendly websites. 
              Proficient in HTML, CSS, JavaScript, and various frontend frameworks. 
              Strong ability to collaborate with cross-functional teams and deliver high-quality solutions.
              Continuously staying updated with emerging trends and technologies in frontend development.
          </p>
          <h3 className="text-2xl text-left my-2">Skills:</h3>
          <ul className="flex flex-col flex-wrap text-left">
            <li><b>Languages: </b>JavaScript (ES6+), TypeScript, HTML5, CSS3 (preprocessors: Sass, Less), NodeJS</li>
            <li><b>Frameworks/Libraries: </b>React, Angular, Material UI, Bootstrap, TailwindCSS, Mantine, Express, Next.js</li>
            <li><b>Tools: </b>Git/GitHub,  Webpack, Gulp, Docker, Figma, Postman, Swagger</li>
            <li><b>Project Management: </b>Jira, Trello, Slack, Discord</li>
            <li><b>IDEs: </b>VSCode, IntelliJ IDEA, WebStorm</li>
            <li><b>Testing: </b>Cypress, Jest, RTL</li>
            <li><b>Databases: </b>MySQL, PostgreSQL, MongoDB, FireBase</li>
            <li>Experience with RESTful APIs, GraphQL and JSON</li>
            <li>Strong problem-solving and analytical skills</li>
            <li>Excellent communication and collaboration abilities</li>      
          </ul>
        </div> 
        <div className="flex items-center"><img className="rounded-full" src='./assets/my-photo3.jpg' alt='Iryna' /></div>    
     </div>
     
    </div>
  )
}

export default HomePage