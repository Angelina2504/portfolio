import '../styles/projetCard.css'



function ProjectCard (projectCard) {
   

<<<<<<< HEAD
=======


function ProjectCard ({projectCard}) {
>>>>>>> 3877c45b73c34444943045972ced065c820bb6da
    return (
        <div className='card-container'>
        <div className='projetCard-container'>
<<<<<<< HEAD
            
                <h2>{projectCard.name}</h2>
                <img src={projectCard.image} alt={`logo ${projectCard.name}`}/>
                <p>{projectCard.description}</p>
                <p>{projectCard.techno}</p>
                <a rel="stylesheet" target="_blank" href={projectCard.site} />
                <a rel="stylesheet" target="_blank" href={projectCard.repo} />
=======
            <h2 className="h2Card">{projectCard.name}</h2>
            <img className='imgCard' src={projectCard.image} alt={`logo ${projectCard.name}`} />
            <p className='pCard'>{projectCard.description}</p>
            <p className='techCard'>{projectCard.techno}</p>
            <a className='liensSite' rel="stylesheet" href={projectCard.site} >Site</a>
            <a className='liensRepo' rel="stylesheet" href={projectCard.repo} >Github</a>
        </div>
>>>>>>> 3877c45b73c34444943045972ced065c820bb6da
        </div>
                )} 

export default ProjectCard ;