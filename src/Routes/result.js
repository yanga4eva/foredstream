import React, { useEffect, useState } from 'react'
import VideoCard from '../components/videocard'
import './css/result.css'
import axios from '../components/axios'
import requests from '../components/request'
import FlipMove from 'react-flip-move'

function Result({selectedOptions}) {

    const [movies, setMovies] = useState([])
    // console.log(movies)
    

    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(selectedOptions);
            setMovies(request.data.results);
            return request 
            
        }

        fetchdata()
        
    }, [selectedOptions])

    return (
        <div className='result'>
           <FlipMove>
            {movies && movies.map((movie) => ( 

                <VideoCard key={movie.id} movie={movie}/> 
            ))} 
            </FlipMove>
        </div>
    )
}

export default Result
