import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({ route, content }) => {
    return (
        <li className='style_i'>
            <NavLink to={route} className='style_a'>{content}</NavLink>
        </li>
    )
}
