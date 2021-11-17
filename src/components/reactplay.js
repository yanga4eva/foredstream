import React from 'react'
import ReactPlayer from 'react-player'

function Reactplay() {
    return (
        <div className='reactplay'>
            <ReactPlayer 
            url="https://storage.googleapis.com/etransfer/sampleVideo.mp4" 
            />
        </div>
    )
}

export default Reactplay
