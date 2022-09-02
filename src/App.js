/**
 * Welcome! Here is a small React app that renders tweets.
 * Please complete the tasks listed below to get a
 * fully functional Twitter timeline!
 */

import "./styles.css";

// task 1: please add name, username and avatar to tweet
const users = {
  vani_3: {
    name: "Vanessa",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg"
  },
  ger_bear: {
    name: "Gerald",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  dice: {
    name: "Diana",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  js_dev: {
    name: "Jesse",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg"
  }
};

// task 2: sort tweets by date, asc + desc
const tweets = [
  {
    id: 0,
    text: "Test post, please ignore",
    imgSrc: null,
    username: "vani_3",
    time: new Date("8/15/2022 23:00")
  },
  {
    id: 1,
    text: null,
    imgSrc:
      "https://wallup.net/wp-content/uploads/2019/09/110394-cats-grey-kittens-fluffy-fat-grass-animals-cat-kitten-baby-cute.jpg",
    username: "ger_bear",
    time: new Date("8/12/2022 10:00")
  },
  {
    id: 2,
    text: "hello world",
    imgSrc: null,
    username: "dice",
    time: new Date("8/17/2022 12:00")
  },
  {
    id: 4,
    text: "lol i feel this deeply",
    imgSrc:
      "https://preview.redd.it/ig5u8ke5qo421.png?width=960&crop=smart&auto=webp&s=ec8772000e6d0d7da59213c7be0c1c9470cdafbf",
    username: "js_dev",
    time: new Date("8/28/2022 10:00")
  },
  {
    id: 3,
    text: "vanilla js > react",
    imgSrc: null,
    username: "js_dev",
    time: new Date("8/27/2022 1:00")
  }
];

const TweetAuthor = () => {
  return <></>;
};

const TweetContent = ({ text, imgSrc, time }) => {
  return (
    <>
      {text && <p>{text}</p>}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={text ? `Tweeted Image for text ${text}` : "Tweeted Image"}
        />
      )}
      <p>Posted: {time.toString()}</p>
    </>
  );
};

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet">
      <TweetAuthor />
      <TweetContent text={tweet.text} imgSrc={tweet.imgSrc} time={tweet.time} />
    </div>
  );
};

const Timeline = () => {
  return (
    <>
      <h1>Your Timeline</h1>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Timeline />
    </div>
  );
}
