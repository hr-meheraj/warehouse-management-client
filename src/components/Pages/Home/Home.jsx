import React from 'react'
import Banner from './Banner'
import Carousel from './Carousel'
import Footer from '../../Shared/Footer/Footer.jsx'
import Inventories from './Inventories'

function Home() {
    return (
        <div>
            <Banner/>
            <Inventories/>
            {/* <Carousel/> */}
            <Footer/>
        </div>
    )
}

export default Home
