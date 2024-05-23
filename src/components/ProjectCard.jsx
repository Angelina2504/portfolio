import '../styles/projetCard.css'

function ProjectCard ({projectCard}) {
    return (
        <div className='projetCard-container'>
            <h2 className="h2Card">{projectCard.name}</h2>
            <img className='imgCard' src={projectCard.image} alt={`logo ${projectCard.name}`} />
            <p className='pCard'>{projectCard.description}</p>
            <p className='techCard'>{projectCard.techno}</p>
            <link className='liensSite' rel="stylesheet" href={projectCard.site} />
            <link className='liensrepo' rel="stylesheet" href={projectCard.repo} />
        </div>
    )
}

export default ProjectCard ;