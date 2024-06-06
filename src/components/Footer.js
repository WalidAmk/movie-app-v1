import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
        <footer>
                <div className="navbar_logo">
                    <a href="/"><img src={require("../assets/icons/navbar-logo.png")} alt="Logo"/></a>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; Movies and Series 2023</p>
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
        </footer>
    )
}

export default Footer