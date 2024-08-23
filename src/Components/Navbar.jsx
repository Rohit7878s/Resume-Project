import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container nav_bar" 
        data-aos="fade-down"
     data-aos-duration="1500"
            >
                <div className="left nav_item">Protfolio</div>
                <div className="Right">
                    <a href="#Home" className="nav_item">Home </a>
                    <a href="#Eduction" className="nav_item">Eduction</a>
                    <a href="" className="nav_item">Skill</a>
                    <a href="#Project" className="nav_item">Project</a>
                    <a href="#Contact" className="nav_item">Contact</a>
                </div>
            </div>

        </>
    )
}

export default Navbar
