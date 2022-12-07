import React from 'react'
import { Link } from 'react-router-dom'
import './Describe.scss'

export default function Describe() {
  return (
    <div>
        <Link to="/">
                <div className='describe'>
                    <div className="describe__box">
                        <div className="describe__box-text">
                            Aplikacja pobiera aktualne dane o kryptowalutach. Zapoznaj się ze szczegółowymi informacjami.
                        </div>
                    </div>
                </div>
        </Link>
        
    </div>
  )
}
