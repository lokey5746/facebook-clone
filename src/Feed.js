import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      {/* Story-section */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
      {/* post */}
      <Post
        profilePic="https://m.media-amazon.com/images/M/MV5BNmVkODYwNDgtY2I2MC00Mjg4LWI4OTUtNzFhYTA3ODJhOTA2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SY1000_CR0,0,743,1000_AL_.jpg"
        username="Pragya Jaiswal"
        timestamp="20 minute ago."
        image="https://pbs.twimg.com/profile_images/1253051510809919490/5rKWySbh_400x400.jpg"
      />
    </div>
  );
}

export default Feed;
