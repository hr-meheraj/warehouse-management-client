import React from 'react'
import Banner from './Banner'
import Footer from '../../Shared/Footer/Footer.jsx'
import Inventories from './Inventories'
import SubForm from './SubForm'
function Home() {
    return (
        <div>
            <Banner/>
            <Inventories/>
            <SubForm/>
            <Footer/>
        </div>
    )
}

export default Home
