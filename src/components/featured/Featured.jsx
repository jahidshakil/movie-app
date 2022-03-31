import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
      <div className='featured'>
          <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""/>
          <div className='info'>
          <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
              <span className='desc'>The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. </span>
              <div className='buttons'>
                  <button className='play'>
                      <PlayArrow />
                      <span>Play</span>
                </button>  
                  <button className='more'>
                      <InfoOutlined />
                      <span>info</span>
                </button>  

              </div>

          </div>
      </div>
  )
}

export default Featured