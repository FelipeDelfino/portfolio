import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Navigation, Pagination } from "swiper";


import Carousel from './RepoItem';

interface RepoProps {
    showRepo?: boolean;
    showSmallRepo?: boolean;
}

interface Project {

    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    language: string;

}

export default function RepoList({ showRepo = true, showSmallRepo = false}: RepoProps) {
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
                {showSmallRepo && (
                    <Swiper
                    spaceBetween={30}
                    className="mySwiper"
                    // style={{height:'600px'}}
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <Carousel project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                )

                }
                {showRepo &&
                    (
                        <Swiper
                            slidesPerView={2}
                            grid={{
                                rows: 2,
                            }}
                            spaceBetween={30}
                            modules={[Grid, Pagination, Navigation]}
                            className="mySwiper"
                            style={{ height: '700px' }}
                        >
                            {projects.map(project => (
                                <SwiperSlide key={project.id}>
                                    <Carousel project={project} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                }

            </>
        )
    }
}
