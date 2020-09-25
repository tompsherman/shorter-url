import React from 'react'

const LinkBox = () => {
    return (
        <div>
            <div className="left-side"><p>old URL</p></div>
            <div className="right-side"><a href="#">short url</a><button>COPY</button></div>
        </div>
    )
}

export default LinkBox
