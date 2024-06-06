import React from 'react'
import MovieBox from './MovieBox'
import '../css/moviesSection.css'

export default function MoviesSection({ dataType, data, loading }) {
    return (
        <div className='movies_section'>
            <div className='movies_section_header'>
                <h2>{dataType}</h2>
                <a href={`/${dataType.toLowerCase()}`}>Discover More</a>
            </div>
            <div className='line'></div>
            <div className='movies_container'>
                {
                    data.map((movie, index) => (
                        <MovieBox key={index} movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}