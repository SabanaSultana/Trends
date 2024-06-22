import React from 'react'
import './Home.css'
// import HomeImg from './assets/Home header imgs/home img1.png'
import HandImage from '../assets/HomeHeaderImgs/wavingHand.png'

function Home() {
  return (
    <div className='home'>
        <div className="heading">
            <div>NEW ARRIVALS ONLY</div>
            <div className='img-new'>
                <span>new</span>
                <img src={HandImage} alt="Error Loading image" className='handimg' />
            </div>
            <div>
                collections
            </div>
            <div>
                for everyone
            </div>
            <div className='btn'>
                <button>Men</button>
                <button>Women</button>
            </div>
        </div>
        <div className="images">
            {/* This div is for image sliding, image added in css */}
        </div>
    </div>
  )
}

export default Home
