import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Main.scss'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';



export default function Main() {

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  
  const [coin, setcoin] = useState([])

  useEffect(()=> {
    const getCoin = async () => {
      const {data: res} = await axios.get(url)
      setcoin(res)
    }
    getCoin()
  }, [])

  const style = {
    arrow: {
      color: '#4e42d4', cursor: 'pointer', fontSize: '3rem'
    }, 
    img: {width: '40px', height: '40px'}
  }
 
  console.log(coin)
  return (
    <div>

        <main className='main'>
            <div className="main__box">
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Coin</th>
                        <th scope="col">Cena</th>
                        <th scope="col">Info</th>
                        </tr>
                    </thead>
                    {
                      coin.map((el, index)=> {
                        return(
                          <tbody key={index}>
                              <tr>
                              <th scope="row">{el.market_cap_rank}</th>
                              <td>{el.symbol}&nbsp;
                              <img src={el.image} alt='ikonki coin' style={style.img}/>
                              </td>
                              <td>{(el.current_price).toFixed(2)}$</td>
                              <Link to=":coinId">
                              <td><ArrowCircleRightIcon style={style.arrow}/></td>
                              </Link>
                              </tr>
                              <tr>  
                              </tr>
                          </tbody>
  
                        )
                      })
                    }
                    </table>
            </div>
        </main>
    </div>
  )
}
