import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

const Watch = () => {
  return (
      <div className='watch'>
          <div className='back'>
              <ArrowBackOutlined />
              Home
          </div>
          <video className='video' autoPlay onProgress controls src="https://vod-progressive.akamaized.net/exp=1649254003~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1252%2F19%2F481264773%2F2152867616.mp4~hmac=d6312319071a761fb856a031fa87550ad9cec1545fdf149717fcf38566418163/vimeo-prod-skyfire-std-us/01/1252/19/481264773/2152867616.mp4?filename=RHDHV+Digital+Brand+Element.mp4 "/>
      </div>
  )
}

export default Watch