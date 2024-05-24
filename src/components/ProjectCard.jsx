import '../styles/projetCard.css'

function ProjectCard ({projectCard}) {
    return (
        <div className='card-container'>
        <div className='projetCard-container'>
            <h2 className="h2Card">{projectCard.name}</h2>
            <img className='imgCard' src={projectCard.image} alt={`logo ${projectCard.name}`} />
            <p className='pCard'>{projectCard.description}</p>
            <p className='techCard'>{projectCard.techno}</p>
            <a className='liensSite' rel="stylesheet" href={projectCard.site} >Site</a>
            <a className='liensRepo' rel="stylesheet" href={projectCard.repo} >Github</a>
        </div>
        </div>
    )
}

export default ProjectCard ;