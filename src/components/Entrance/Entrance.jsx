import React from 'react'
import './Entrance.scss'
import Main from '../Main/Main'
import { Link } from 'react-router-dom'
import Describe from '../Describe/Describe'

export default function Entrance() {

  const style = {
    link: {textDecoration: 'none'}
}

  return (
    <div>
        <Link to="/" style={style.link}>
          <Describe />
        <div className="entrance">
            <div className="entrance__box">
                <div className="entrance__box-shadow"></div>
                    <Main />
            </div>
        </div>
        </Link>
    </div>
  )
}
