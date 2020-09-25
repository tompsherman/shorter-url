import React from 'react'

const LinkBox = ({hashid, url}) => {

    return (
        <div>
            <div className="left-side"><p>{url}</p></div>
    <div className="right-side"><a href={`https://rel.ink/${hashid}`}>{`https://rel.ink/${hashid}`}</a><button>COPY</button></div>
        </div>
    )
}

export default LinkBox
