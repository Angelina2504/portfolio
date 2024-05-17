import '../styles/projetCard.css'

function ProjectCard ({projectCard}) {
    return (
        <div className='projetCard-container'>
            <h2>{projectCard.name}</h2>
            <img src={projectCard.image} alt={`logo ${projectCard.name}`} />
            <p>{projectCard.description}</p>
            <p></p>
        </div>
    )
}

export default ProjectCard ;