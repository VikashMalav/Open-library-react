import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function MainApi() {

    let [books, setBooks] = useState([])

    useEffect(() => {
        async function fetch() {
            let res = await axios.get('http://openlibrary.org/subjects/love.json?limit=100')
            setBooks(res.data.works)
            // console.log(res.data.works)
           
        }
        fetch()
    }, [])
    return (
        <div className='box-outer'>
             {/* console.log(books) */}
            {
                books.map((book, index) => {
                    return (

                        <div className='box-inner' key={index}>
                            <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} />
                            <h2><Link className='title' to={`${book.cover_edition_key}`}>{book.title}</Link></h2>
                            <h4>{book.authors[0].name}</h4>
                            <h4></h4>
                        </div>

                    )
                })


            }</div>
    )
}

export default MainApi