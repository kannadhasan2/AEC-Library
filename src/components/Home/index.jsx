import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const Home = ()=>{
    const navigate = useNavigate()
    return (
        <div className='home-main-container'>
            <Navbar />
            <div className='home-card-container'>
                <h1 className='home-main-heading'>Discover Your Next Great Read</h1>
                <p className='home-main-paragraph'>Empowering Minds, Shaping Futures. Where Innovation <br /> Meets Excellence.</p>
                <div className='home-button-container'>
                <button onClick={()=>navigate("/timeline")} className=' time-line-button'>AEC Timeline</button>
                <button className='home-main-button'>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Home