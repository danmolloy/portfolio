import { ProjectCard } from "./ProjectCard"
import battleships from '../images/battleships.png'
import twitter from '../images/twitter.png'

const projects = [
   {
    title: "Twitter Clone",
    image: `${twitter}`,
    blurb: "A full stack social network, complete with authentication, authorization, notifications and direct messaging. Share your thoughts with your friends and interact with them.",
    link: "https://sharp-hugle-251ecd.netlify.app/",
    code: "https://github.com/danmolloy/twitter-clone",
    stack: ["React", "Apollo Client", "TypeScript", "Tailwind", "Jest", "React Router", "Node.js", "Apollo Server", "Prisma", "SQLIte",],
    key: 1
  },
  {
    title: "Battleships",
    image: `${battleships}`,
    blurb: "Play the classic board game against the computer. Go face-to-face with the computer to see who will win the battle. Try and beat the highscores!",
    link: "https://mystifying-saha-d28822.netlify.app/",
    code: "https://github.com/danmolloy/battleships",
    stack: ["React", "Redux", "Tailwind", "Typescript", "Jest", "Mirage JS"],
    key: 2
  }
]

export const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center mt-24">
      <h1 className="text-4xl">Projects</h1>
      {projects.map(i => {
        return <ProjectCard project={i} key={i.key}/>
      })}
    </div>
  )
}