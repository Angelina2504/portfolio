import projets from "../../public/data/projets.json" 
import ProjectCard from "./ProjectCard"
import "../styles/projetList.css"



function ProjectList() {


    return (
        <>
        {
            projets.map((projectCard) => (
                <ProjectCard key={projectCard.id} 
                projectCard={projectCard}/>
            ))
        }
        </>
    )
}

export default ProjectList;