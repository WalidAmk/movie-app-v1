
import { useState, useEffect } from 'react'
import '../css/home.css'
import Search from '../components/Search'
import MoviesSection from '../components/MoviesSection'

export default function Home() {

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
    const [series, setSeries] = useState([{
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
    }])
    const [seriesLoading, setSeriesLoading] = useState(true)
    const [trending, setTrending] = useState([{
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
    }])
    const [trendingLoading, setTrendingLoading] = useState(true)

    useEffect(() => {

        const fetchingData = async () => {
            try {
                const fetchMovies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=36d14e31c514fb8eebf881f6ec9715e7')
                const responseMovies = await fetchMovies.json()
                setMovies(responseMovies.results.slice(0, 5))
                setMoviesLoading(false)
            } catch (error) {
                console.error(error)
            }
            try {
                const fetchSeries = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=36d14e31c514fb8eebf881f6ec9715e7')
                const responseSeries = await fetchSeries.json()
                setSeries(responseSeries.results.slice(0, 5))
                setSeriesLoading(false)
            } catch (error) {
                console.error(error)
            }
            try {
                const fetchTrending = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=36d14e31c514fb8eebf881f6ec9715e7')
                const responseTrending = await fetchTrending.json()
                setTrending(responseTrending.results.slice(0, 10))
                setTrendingLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchingData()

    }, [])


    return (
        <div className='home_page'>
            <Search />
            <MoviesSection 
                dataType='Trending'
                data={trending} 
                loading={trendingLoading} 
            />
            <MoviesSection 
                dataType='Movies'
                data={movies} 
                loading={moviesLoading} 
            />
            <MoviesSection 
                dataType='Series'
                data={series} 
                loading={seriesLoading} 
            />
        </div>
    )
}
