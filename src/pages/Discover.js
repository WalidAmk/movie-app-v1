
import { useState, useEffect } from 'react'
import MoviesContainer from '../components/MoviesContainer'
import '../css/trendingSection.css'

export default function  Discover ({api_url, title}) {
    const [pages, setPages] = useState([])
    const [movies, setMovies] = useState(
        [{
            "adult": false,
            "backdrop_path": "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                14,
                35
            ],
            "id": 502356,
            "original_language": "en",
            "original_title": "The Super Mario Bros. Movie",
            "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
            "popularity": 8687.747,
            "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "release_date": "2023-04-05",
            "title": "The Super Mario Bros. Movie",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 2710
        }]
    )
    const [moviesLoading, setMoviesLoading] = useState(true)
    const [pageCounter, setPageCounter] = useState(1)

    const addMoreMovies = async (page) => {
        try {
            const fetchMovies = await fetch(`${api_url}&page=${page}`)
            const responseMovies = await fetchMovies.json()
            setPages([...pages, responseMovies.results])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const fetchMovies = await fetch(`${api_url}`)
                const responseMovies = await fetchMovies.json()
                setMovies(responseMovies.results)
                setPages([...pages, responseMovies.results])
                setMoviesLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchingData()
    }, [])
    
    useEffect(() => {
        addMoreMovies(pageCounter)
    }, [pageCounter])
    

    return ( 
        <div className='trendingSection'>
            <h2>{title}</h2>
            <div className='line'></div>
            <div className='trendingContainerLoader'>

                {moviesLoading ? (<MoviesContainer data={movies} />) : 
                    pages.map((page, index) => (
                        <MoviesContainer key={index} data={page} />
                    ))
                }

                <div className='loading'>
                    <button onClick={() => {
                        setPageCounter(pageCounter + 1)
                        console.log(pageCounter)
                    }}>See More</button>
                </div>
            </div>
            
        </div>
    )
}
