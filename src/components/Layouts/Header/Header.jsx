import React from 'react'
import { ItemNavbar } from '../../Ui/ItemNavbar/ItemNavbar'


export const Header = () => {
    return (
        <header>
            <h1>UseEffects</h1>
            <nav>
                <ul>
                    <ItemNavbar route='/' content='Contador' />
                    <ItemNavbar route='/timer' content='Temporizador' />
                    <ItemNavbar route='/Clock' content='Reloj' />
                    <ItemNavbar route='/login' content='Logear' />
                </ul>
            </nav>
        </header>
    )
}
