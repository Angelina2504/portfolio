import {  useState } from "react";
import ProjectCarrousel from "../components/ProjectCarrousel";
import ProjectList from "../components/ProjectList";



function ProjectsPage() {
    const [viewMode, setViewMode] = useState('carousel');


    return (

        <>
        
        <form >
          <label htmlFor="card-select">
            Filtrer par{""}
            <select
              id="card-select"
              onChange={(e) => setViewMode(e.target.value)}
            >
              <option value="carousel">Carrousel</option>
              <option value="liste">Liste</option>
            </select>
          </label>
        </form>

        <div>
            {
             viewMode === 'carousel'
              ? 
            ( <ProjectCarrousel /> ) 
            : 
            ( <ProjectList /> ) 
            }
        </div>
      
        </>
    ) }
    


export default ProjectsPage;