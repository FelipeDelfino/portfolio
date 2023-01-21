import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Navigation, Pagination } from "swiper";


import Carousel from './index';

interface Project {

    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    language: string;

}


export default function RepoList() {
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

                <Swiper
                    slidesPerView={2}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={30}
                    // navigation={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Grid, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ height: '700px' }}
                >
                    {projects.map(project => (

                        <SwiperSlide>

                            <Carousel key={project.id} project={project} />

                        </SwiperSlide>
                        

                        
                        ))}
                        </Swiper>


            </>
        )
    }
}
