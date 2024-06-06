import React from 'react'
import '../css/movie.css'

export default function MovieBox({movie}) {

    return (
        <a href={`/get/${movie.id}`}>
            <div className='movieContainer'>
                <div className='movieCoverLoader'>
                    <div className='movieCoverBox'>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=36d14e31c514fb8eebf881f6ec9715e7`} alt="Cover"/>
                    </div>
                </div>
                <div className='movieContent'>
                    <h3>{movie?.title || movie?.name}</h3>
                    <div className='movieContentFooter'>
                        <time>{movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}</time>
                        <div className='movieRate'>
                            <span>{movie.vote_average.toFixed(1)}</span>
                            <div className='movieStar'>
                                <img src={require("../assets/icons/star.png")} alt="Star"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

