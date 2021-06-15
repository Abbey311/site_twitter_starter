import "./UserProfile.css"

function UserProfile(props) {
  return (
    <div className="col user-profile">
      <div className="user-info">
        <div className="card-top"></div>
        <div className="card-mid">
          <span className="fa-stack ">
            <i className="fas fa-camera fa-stack-2x">
              <i className="fas fa-plus fa-stack-1x"></i>
            </i>
          </span>
          <div className="twitter-handle">
            <h3>{props.userProfile.name}</h3>
            <p>{props.userProfile.handle}</p>
          </div>
        </div>
        <div className="card-bottom">
          <p>Tweets</p>
          <p>Followers</p>
          <h3>{props.userProfile.numTweets}</h3>
          <h3>{props.userProfile.numFollowers}</h3>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
