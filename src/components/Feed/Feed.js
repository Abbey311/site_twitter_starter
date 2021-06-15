import Tweet from "../Tweet/Tweet"
import TweetInput from "../TweetInput/TweetInput"
import "./Feed.css"

const firstTweet = {
  id: -1,
  name: `Abbey`,
  handle: `Abbey311`,
  text: `I am bored.`,
  comments: 145,
  retweets: 221,
  likes: 165000,
}

export default function Feed({tweets, addTweet}) {
  return (
    <div className="col feed">
      <TweetInput />

      <div className="see-new-tweets">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {/* example first tweet */}
        <Tweet tweet={firstTweet} />
        {}
      </div>
    </div>
  )
}
