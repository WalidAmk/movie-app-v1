import { useState, useEffect } from 'react'
import '../css/moviePage.css'

export default function MoviePageUI({data, id}) {

    const [videos, setVideos] = useState([])
    const [loadingVideos, setLoadingVideos] = useState(true)
    const [images, setImages] = useState([])
    const [loadingImages, setLoadingImages] = useState(true)

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const fetchVideos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=36d14e31c514fb8eebf881f6ec9715e7`)
                const responseVideos = await fetchVideos.json()
                if(!responseVideos.status) {
                    const fetchVideos = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=36d14e31c514fb8eebf881f6ec9715e7`)
                    const responseVideos = await fetchVideos.json()
                    setVideos(responseVideos.results)
                    setLoadingVideos(false)
                } 
                setVideos(responseVideos.results)
                setLoadingVideos(false)
                
                console.log(responseVideos.results)
            } catch (error) {
                console.error(error)
            }
            try {
                const fetchImages = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=36d14e31c514fb8eebf881f6ec9715e7`)
                const responseImages = await fetchImages.json()
                if(!responseImages.status) {
                    const fetchImages = await fetch(`https://api.themoviedb.org/3/tv/${id}/images?api_key=36d14e31c514fb8eebf881f6ec9715e7`)
                    const responseImages = await fetchImages.json()
                }
                setImages(responseImages)
                setLoadingImages(false)
                console.log(responseImages)
            } catch (error) {
                console.error(error)
            }
        }
        fetchingData()
    }, [])

    return (
        <div className='page_container'>
            <div className='movie_container' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=36d14e31c514fb8eebf881f6ec9715e7)`}}>
                <div className='movie_container_dark'>
                    <div className='movie_content'>
                        <div className='movie_cover_box'>
                            <div className='movie_cover' style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${data.poster_path}?api_key=36d14e31c514fb8eebf881f6ec9715e7)`}}></div>
                        </div>
                        <div className='movie_content_info'>
                            <time>{data.release_date?.split('-')[0] || data.first_air_date?.split('-')[0]}</time>
                            <h1>{data.original_title || data.original_name}</h1>
                            <div className='movie_genre'>
                                {data.genres?.map((genre, index) => (
                                    <span key={index}>{genre.name}</span>
                                ))}
                            </div>
                            <p>{data.overview}</p>
                            <div className='movie_duration_score'>
                                <div className='movie_duration'>
                                    <img src={require('../assets/icons/clock.png')} alt="clock"/>
                                    <time>{data.runtime} min</time>
                                </div>
                                <div className='movie_score'>
                                    <span>{data.vote_average?.toFixed(1)}/10</span>
                                </div>
                            </div>
                            <div className='movie_readmore'>
                                <a href={data.homepage} rel='noreferrer' target='_blank'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='movies_videos'>
                <h2>Watch Trailer</h2>
                <div className='trailer_container'>
                    {!loadingVideos && (
                        <>
                            <iframe allowFullScreen frameborder="0" src={'https://www.youtube.com/embed/' + videos?.filter((video) => video.type === 'Trailer')[0]?.key}></iframe>
                        </>
                    )}
                </div>
                <h2>Watch more</h2>
                <div className='more_videos_container'>
                    {!loadingVideos && (
                        <>
                        {
                            videos?.slice(0, 3)?.map((video, index) => (
                                <iframe key={index} allowFullScreen frameborder="0" src={'https://www.youtube.com/embed/' + video.key}></iframe>
                            ))
                        }
                        </>
                    )}
                </div>
            </div>
            <div className='movies_galeries'>
                <h2>Galery</h2>
                <div className='movies_galeries_container'>
                    {!loadingImages &&
                        images?.backdrops?.slice(0, 12).map((image, index) => (
                            <div className='backdrop_box' key={index}>
                                <img src={`https://image.tmdb.org/t/p/original${image.file_path}?api_key=36d14e31c514fb8eebf881f6ec9715e7`} alt="Image"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

