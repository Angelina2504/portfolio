import projets from "../data/projets.json"; 
import ProjectCard from "./ProjectCard"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function ProjectCarrousel () {
    return (
        <Carousel>
              {
            projets.map((projectCard) => (
                <ProjectCard key={projectCard.id} projectCard={projectCard}/>
            ))
        }
        </Carousel>
    )
    
}

export default ProjectCarrousel;