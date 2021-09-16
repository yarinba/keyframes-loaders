import React from 'react'
import './index.scss'

const Button = ({ loader, onClick }) => {
    return (
        <div className="btn" onClick={onClick}>
            <span className="noselect">{loader.title}</span>
        </div>
    )
}

export default Button
