import {  useState } from "react";
import ProjectCarrousel from "../components/ProjectCarrousel";
import ProjectList from "../components/ProjectList";
import '../styles/projectsPage.css'


function ProjectsPage() {
    const [viewMode, setViewMode] = useState('carousel');


    return (

        <>

        <form className="choice-list">
          <label className='label' htmlFor="card-select">
            Affichage
            <select className="select-list"
              id="card-select"
              onChange={(e) => setViewMode(e.target.value)}
            >
              <option value="carousel">Carrousel</option>
              <option value="liste">Liste</option>
            </select>
          </label>
        </form>

        <div className='projects-container'>
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
