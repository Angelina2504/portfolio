
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
    return (
        <div>
            <ProjectCard
            title='Lego Muscu'
            imageUrl='src/assets/logo-lego-muscu.png'
            description='Premier projet : créer pour adopter un coach sportif qui est attribuer en fonction des résultats du questionnaire.'
            repo='https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-P1-Lego-Muscu.git'
            url='https://wildcodeschool-2024-02.github.io/JS-RemoteFR-P1-Lego-Muscu/'
            />
        </div>
    );
}

export default ProjectsPage;