import React from 'react'
import './Header.scss'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from 'react-router-dom';




export default function Header() {

    const style = {
        coin: {
            cursor: 'pointer', color: '#4e42d4', fontSize: '3rem'
        }, 
        link: {textDecoration: 'none'}
    }

  return (
    <div>
        <Link to="/" style={style.link}>
        <header className='header'>
                <div className="header__box">
                    <div className="header__box-text">Aplikacja walutowa</div>
                    <div className="header__icon">
                        <MonetizationOnIcon style={style.coin}/>
                    </div>
                </div>
        </header>
        </Link>
       
    </div>
  )
}
