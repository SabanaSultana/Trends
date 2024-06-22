import React from 'react'
import './Home.css'
// import HomeImg from './assets/Home header imgs/home img1.png'
import HandImage from '../assets/HomeHeaderImgs/wavingHand.png'
import Cards from './Cards'

function Home() {
  return (
    <>
    <div className='home'>
        <div className="heading">
            <div>NEW ARRIVALS ONLY</div>
            <div>
                new 
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
    <div>
        <Cards/>
    </div>
    </>
  )
}

export default Home
