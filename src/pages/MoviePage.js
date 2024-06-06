import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MoviePageUI from '../components/MoviePage' 
import SeriePageUI from '../components/SeriePage'

export default function MoviePage() {

    const [movie, setMovie] = useState({})
    const [isMovie, setIsMovie] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchingMovie = async () => {
            try {
                let fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=36d14e31c514fb8eebf881f6ec9715e7`) 
                let responseMovie = await fetchMovie.json()
                if (!responseMovie.status) {
                    fetchMovie = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=36d14e31c514fb8eebf881f6ec9715e7`) 
                    responseMovie = await fetchMovie.json()
                    setIsMovie(false)
                }
                setMovie(responseMovie)
            } catch (error) {
                console.error(error)
            }
        }
        fetchingMovie()
    }, [])

    return (
        isMovie ? <MoviePageUI data={movie} id={id}/> : <SeriePageUI data={movie} id={id}/>

    )
}
