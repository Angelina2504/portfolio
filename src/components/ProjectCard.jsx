import '../styles/projetCard.css'



function ProjectCard (projectCard) {
   

    return (
        <div className='projetCard-container'>
            
                <h2>{projectCard.name}</h2>
                <img src={projectCard.image} alt={`logo ${projectCard.name}`}/>
                <p>{projectCard.description}</p>
                <p>{projectCard.techno}</p>
                <a rel="stylesheet" target="_blank" href={projectCard.site} />
                <a rel="stylesheet" target="_blank" href={projectCard.repo} />
        </div>
                )} 

export default ProjectCard ;