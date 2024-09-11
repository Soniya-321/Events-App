// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  render() {
    const {eventsList, onChangeEvent} = this.props
    const {imageUrl, id, name, location, registrationStatus} = eventsList
    const onClickListItem = () => {
      onChangeEvent(registrationStatus)
    }

    return (
      <li className="list-container">
        <button className="image-btn">
          <img src={imageUrl} alt="event" className="event-img" onClick={onClickListItem}/>
        </button>
        <p className="list-heading">{name}</p>
        <p className="list-para">{location}</p>
      </li>
    )
  }
}

export default EventItem
