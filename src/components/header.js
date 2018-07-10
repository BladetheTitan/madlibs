import React from 'react';

const Header = (title) => {
    return (
        <div className="Header">
            <h1>{title}</h1>
            <p>Fill out the fields below and click the generate button to see the Mad Lib story.</p>
        </div>
    )
}

export default Header