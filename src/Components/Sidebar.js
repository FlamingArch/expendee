import React from 'react'
import Branding from './Branding'
import CurrentCard from './CurrentCard'

const Sidebar = () => {
    return (
        <div className="flex flex-col p-6 h-full justify-items-center">
            <Branding/>
            <CurrentCard/>
        </div>
    )
}

export default Sidebar
