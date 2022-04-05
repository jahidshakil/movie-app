import { ArrowBackIosOutlined, ArrowForwardIosOutlined, Translate } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import './list.scss'
import Listitem from "../listitem/Listitem"

const List = () => {

  const [slideNumber, setSlideNumbe] = useState(0)
  const [isMoved, setIsMoved] = useState(false)

  const  listRef = useRef()
  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === "backward" && slideNumber > 0) {
      setSlideNumbe(slideNumber-1)
      listRef.current.style.transform = `translateX(${230 + distance
        }px)`
      
      
    }
    if (direction === "forward" && slideNumber < 10) {
      setSlideNumbe(slideNumber+1)
      listRef.current.style.transform = `translateX(${-230 + distance
    }px)`
    }

  }
  return (
      <div className='list'>
          <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined className='arrow backward' onClick={() => handleClick("backward")} style={ {display: !isMoved && "none" }}/>
        <div className='container' ref = {listRef}>
          <Listitem index={0}/>
          <Listitem index={1}/>
          <Listitem index={2}/>
          <Listitem index={3}/>
          <Listitem index={4}/>
          <Listitem index={5}/>
          <Listitem index={6}/>
          <Listitem index={7}/>
          <Listitem index={8}/>
          <Listitem index={9}/>
          <Listitem index={10}/>
          <Listitem index={11}/>
          <Listitem index={12}/>
          <Listitem index={13}/>
          <Listitem index={14}/>
          <Listitem index={15}/>


          
          
        </div>
        <ArrowForwardIosOutlined className=' arrow forward' onClick = {()=> handleClick("forward")}/>

          </div>
          
    </div>
  )
}

export default List