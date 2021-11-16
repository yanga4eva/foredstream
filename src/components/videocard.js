import React, { forwardRef } from 'react'
import '../Routes/css/videoCard.css'
import TextTruncate from 'react-text-truncate'

const base_url = 'https://image.tmdb.org/t/p/original/'

const VideoCard = forwardRef(({movie}, ref) => {
    return (
        <div ref={ref} className='videoCard'>
            <img
                src = {`${base_url}${movie.backdrop_path}`} />
                <TextTruncate
                    line={2}
                    element="p"
                    truncateText="..."
                    text={movie.overview}
                    />
                <h2> {movie.title}</h2>
                <p className='videocard_stats'> 
                {movie.media_type && `${movie.media_type} .`}
                    {movie.release_date || movie.first_air_date} </p>
                
        </div>
    )
})

export default VideoCard
