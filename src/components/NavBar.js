
import { useState } from 'react'
import '../css/navbar.css'

export default function NavBar() {

    const [fixedNav, setFixedNav ] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200 ) {
            setFixedNav(true)
        } else {
            setFixedNav(false)
        }
    })

    return (
        // <nav className={fixedNav ? 'fixed_nav' : ''}>
        <nav>
            <div className="navbar_logo" >
                <a href="/"><img src={require("../assets/icons/navbar-logo.png")} alt="Logo"/></a>
            </div>
            <div className="navbar_links">
                <a href="/trending">Trending</a>
                <a href="/movies">Movies</a>
                <a href="/series">Series</a> 
            </div>
            <div className="navbar_sm_logos">
                <div className='fcb_box'>
                    <img src={require("../assets/icons/facebook.png")} alt="Facebook"/>
                </div>
                <div className='insta_box'>
                    <img src={require("../assets/icons/instagram.png")} alt="Insta"/>
                </div>
                <div className='twit_box'>
                    <img src={require("../assets/icons/twitter.png")} alt="Twitter"/>
                </div>
            </div>
        </nav>
    )
}
