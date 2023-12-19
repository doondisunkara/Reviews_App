import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    const {reviewsList} = this.props
    const initialProfile = reviewsList[0]
    this.state = {
      activeProfile: initialProfile,
    }
  }

  getPreviousProfile = () => {
    const {reviewsList} = this.props
    const {activeProfile} = this.state
    const {username} = activeProfile
    const index = reviewsList.findIndex(
      profile => profile.username === username,
    )
    if (index !== 0) {
      this.setState({activeProfile: reviewsList[index - 1]})
    }
  }

  getNextProfile = () => {
    const {reviewsList} = this.props
    const {activeProfile} = this.state
    const {username} = activeProfile
    const index = reviewsList.findIndex(
      profile => profile.username === username,
    )
    if (index !== reviewsList.length - 1) {
      this.setState({activeProfile: reviewsList[index + 1]})
    }
  }

  render() {
    const {activeProfile} = this.state
    const {username, companyName, description, imgUrl} = activeProfile
    console.log(activeProfile)
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="card">
            <button
              data-testid="leftArrow"
              className="arrow-btn"
              type="button"
              onClick={this.getPreviousProfile}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
            <div className="profile-container">
              <img className="user-img" src={imgUrl} alt={username} />
              <p className="user-name">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              data-testid="rightArrow"
              className="arrow-btn"
              type="button"
              onClick={this.getNextProfile}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
