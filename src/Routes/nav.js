import React from 'react'
import request from '../components/request'
import './css/nav.css'

function Nav({ setSelectedOption }) {
    return (
        <div className='nav'>
            <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>Action</h2>
            <h2>Epic</h2>
            <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>Comedy</h2>
        </div>
    )
}

export default Nav
