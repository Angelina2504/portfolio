import '../styles/projetCard.css'
import { useEffect, useState } from 'react';



function ProjectCard ({projectCard}) {

    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        import(`../assets/${projectCard.image}`).then((image) => {
            setImageSrc(image.default);
        }).catch((error) => {
            console.error(`L'image ${projectCard.image} n'a pas pu être chargée : `, error);
        });
    }, [projectCard.image]);

    return (
        <div className='card-container'>
        <div className='projetCard-container'>
            <h2 className="h2Card">{projectCard.name}</h2>
            <img className='imgCard' src={imageSrc} alt={`logo ${projectCard.name}`} />
            <p className='pCard'>{projectCard.description}</p>
            <p className='techCard'>{projectCard.techno}</p>
            <a className='liensSite' rel="stylesheet" href={projectCard.site} >Site</a>
            <a className='liensRepo' rel="stylesheet" href={projectCard.repo} >Github</a>
        </div>
        </div> )} 

export default ProjectCard ;