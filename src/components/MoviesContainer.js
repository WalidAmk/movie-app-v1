import React from 'react'
import MovieBox from './MovieBox'
import '../css/moviesContainer.css'

export default function MoviesContainer({ data }) {
    return (
        <div className='moviesContainer'>
            {data.map((movie, index) => (
                <MovieBox movie={movie} key={index}/>
            ))}
        </div>
    )
}
