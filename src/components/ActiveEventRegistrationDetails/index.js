// Write your code here
import {Component} from 'react'
import './index.css'
class ActiveEventRegistrationDetails extends Component {
  renderYetToRegisterView = () => {
    return (
      <div className="yet-to-register">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-img"
        />
        <p className="register-para">
          A live performance brings so much to your relationship with dance.Seeing dance live can often make you fall totally in love with
          this beautiful art form.
        </p>
        <button className="btn">Register Here</button>
      </div>
    )
  }

  renderRegisteredView = () => {
    return (
      <div className="registered">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-img"
        />
        <h1 className="registered-heading">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegistrationClosedView = () => {
    return (
      <div className="registration-closed">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registration-closed-img"
        />
        <h1 className="registered-heading">Registrations Are Closed Now!</h1>
        <p className="regestered-para">
          Stay tuned. We will reopen the registrations soon.
        </p>
      </div>
    )
  }
  renderInitialView = () => {
    return (
      <p className="initial-para">
        Click on an event, to view its registration details
      </p>
    )
  }
  render() {
    const {activeStatus} = this.props

    console.log(activeStatus)
    switch (activeStatus) {
      case 'INITIAL':
        return this.renderInitialView()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
