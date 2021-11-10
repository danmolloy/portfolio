export const ProjectCard = (props) => {
  return (
    <div className="project-card bg-white flex flex-col border m-8 w-2/3 items-center shadow">
      <h2>{props.project.title}</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly m-4">
      <img src={props.project.image} className="w-60 border h-auto md:mr-2"/>
      <div className="flex flex-col md:ml-2" >
        <p className="w-72">{props.project.blurb}</p>
        <div className="flex flex-col">
          <a href={props.project.link}>Live Example</a>
          <a href={props.project.code}>Code</a>
        </div>
      </div>
      <div className="hidden lg:flex flex-col">
        <ul>
          {props.project.stack.map(i => 
            <li key={i}>{i}</li>)}
        </ul>
      </div>
      </div>
    </div>
  )
}