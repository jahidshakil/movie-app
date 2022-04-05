import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

const Listitem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className='Listitem'
      style = {{left:isHovered && index*225-50+index*2.5}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i0.wp.com/www.dailycal.org/assets/uploads/2016/09/friends.png?ssl=1" alt="" />

      {isHovered && (

      <>
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined/>
        </div>
        <div className='itemInfoTop'>
          <span>1 hour 14 mins</span>
          <span className="limit">16+</span>
          <span>1999</span>
        </div>
        <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut dolor quis mi egestas cursus vitae a urna.
        </div>
        <div className="genre">Action</div>
          </div>
          </>
      )}
      </div>
  )
}

export default Listitem