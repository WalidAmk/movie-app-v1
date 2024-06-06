import { useState } from 'react'
import '../css/search.css'
import { Navigate } from 'react-router-dom'

export default function Search() {

    const [query, setQuery] = useState('')

    return (
        <div className='search_container'>
            <div className='search_container_cover'>
                <div className='search_container_cover_animation'>
                    <div className='search_container_cover_animation_dark'></div>
                </div>
                <div className='search_container_content'>
                    <h1>Unlimited movies,TV <br/>shows, and more</h1>
                    <p>Ready to watch? Search what you want.</p>
                    <form >
                        <input type="text" name="query" onChange={(e) => setQuery(e.target.value)} required placeholder='Enter...'/>
                        <a href={query ? `/search/${query}` : ""}>Search</a>
                    </form>
                </div>
            </div>
        </div>
    )
}