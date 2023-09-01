import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import  {profile1,profile2,profile3} from "/img./profile";
import "bootstrap/dist/css/bootstrap.min.css";

import { HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";

function Post(props) {
  return (
    <div className="post">
      <div className="postHead">
        <img src={props.profileImg} width={65} height={65} alt="" />
        <div>
          <h1> {props.name} </h1>
          <div className="date"> {props.date}</div>
        </div>
      </div>

      <p> {props.text}</p>

      <img className="postImg" src={props.img} alt="" />

      <div className="postFooter">
        <div className="button">
          <HandThumbsUp />
          Like
        </div>
        <div className="button">
          <ChatLeftText /> Comment
        </div>
        <div className="button">
          <Share /> Share
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Post
      profileImg={profile3}
      name="Ahmed Raza"
      date="3-Jan-2013 4:30 pm"
      img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
      text="
      "Exploring new horizons and embracing change. Life's greatest adventures often begin outside of our comfort zones. 🌍✨ #AdventureAwaits #EmbraceChange #ExploreTheUnknown"" />
    <Post
      profileImg={profile2}
      name="Farhan"
      date="20-Jan-2013 5:00 pm"
      img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
      text="
      "Exploring new horizons and embracing change. Life's greatest adventures often begin outside of our comfort zones. 🌍✨ #AdventureAwaits #EmbraceChange #ExploreTheUnknown""/>
    <Post
      profileImg={profile1}
      name="Usama Khan"
      date="20-Jan-2013 5:00 pm"
      img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
      text=""Embracing the beauty that surrounds us each day, I'm reminded of the precious moments we often take for granted. 🌸🌟 As the sun paints the sky with its golden hues and the world awakens to a new dawn , now take a moment to cherish the simple joys that make life truly beautiful . 🌄❤️ Whether it’s a warm hug from a loved one, the laughter of children, or the gentle whisper of the wind through the trees, let's treasure these priceless gifts that fill our hearts with happiness. 💖✨ Remember, life's beauty lies not just in grand gestures, but in the everyday moments that make our souls sing."
    />
  </div>,
  document.querySelector("#root")
);