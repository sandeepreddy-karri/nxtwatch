import {DetailsLink, ListItem, ThumbnailImage, Desc} from './styledComponents'
import VideoContext from '../../context/VideoContext'

const GamingVideoItem = props => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

      const {gamingVideos} = props

      const {id, thumbnailUrl, title, viewCount} = gamingVideos

      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

            <Desc textColor={textColor}>{title}</Desc>

            <Desc textColor={textColor}>{viewCount}</Desc>
          </ListItem>
        </DetailsLink>
      )
    }}
  </VideoContext.Consumer>
)

export default GamingVideoItem
