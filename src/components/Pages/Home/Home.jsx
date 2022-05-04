import React from 'react'
import Banner from './Banner'
import Footer from '../../Shared/Footer/Footer.jsx'
import Inventories from './Inventories'
import SubForm from './SubForm'
import useDynamicTitle from '../../../Hooks/useDynamicTitle'
import SingleBlog from './SingleBlog'
function Home() {
    useDynamicTitle("Getting Started");
    return (
        <div>
            <Banner/>
            <Inventories/>
            <SingleBlog/>
            <SubForm/>
            <Footer/>
        </div>
    )
}

export default Home
