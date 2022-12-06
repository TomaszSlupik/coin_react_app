import React from 'react'
import './Entrance.scss'
import Main from '../Main/Main'

export default function Entrance() {
  return (
    <div>
        <div className="entrance">
            <div className="entrance__box">
                <div className="entrance__box-shadow"></div>
                    <Main />
            </div>
        </div>
    </div>
  )
}
