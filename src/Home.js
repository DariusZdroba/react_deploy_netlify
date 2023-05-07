import React from 'react'
import Feed from './Feed'
import { useContext } from 'react'
import DataContext from './context/DataContext'


const Home = () => {
        const {searchResults, fetchError, isLoading} = useContext(DataContext);
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError.message}</p>}
            {!isLoading && !fetchError &&(searchResults.length ? <Feed posts={searchResults} /> : <p className="statsuMsg">No posts to display</p>) }
        </main>

    )
}

export default Home