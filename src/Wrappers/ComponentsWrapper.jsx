import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import StatsContainer from './StatsContainer'
import GraphsContainer from './GraphContainer'
import Footer from '../Components/Footer'
import Spinner from '../Components/spinner'
import { MyContext } from '../Context/GlobalContext'

const ComponentsWrapper = () => {
    let { data: { countryData } } = useContext(MyContext)
    if (countryData) {
        return (
            <>
                <Navbar />
                <StatsContainer />
                <GraphsContainer />
                <Footer />
            </>
        )
    } else { return <Spinner/> }
}

export default ComponentsWrapper