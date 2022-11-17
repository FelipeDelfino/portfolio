import { useEffect, useState } from "react";
import Repository from './ProjectItem';

interface Project {

    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    language: string;

}


export default function ProjectList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);


    useEffect(() => {
        fetch("https://api.github.com/users/felipedelfino/repos")
            .then(response => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setProjects(data);
                    console.log(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [])
    if (error) {
        return <div>Erro</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                

                {projects && projects.map(project => (
                    <Repository key={project.id} project={project} />
                    ))}

                
            </>
        )
    }
}
