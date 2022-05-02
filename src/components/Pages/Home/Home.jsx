import React from 'react'
import Banner from './Banner'
import Footer from '../../Shared/Footer/Footer.jsx'
import Inventories from './Inventories'
function Home() {
    return (
        <div>
            <Banner/>
            <Inventories/>
            <Footer/>
        </div>
    )
}

export default Home
