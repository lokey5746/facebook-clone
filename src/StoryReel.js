import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://pbs.twimg.com/profile_images/1253051510809919490/5rKWySbh_400x400.jpg"
        profileSrc="https://static.toiimg.com/photo/70242460.cms"
        title="Pragya Jaiswal"
      />
      <Story
        image="https://static.toiimg.com/thumb/msid-66264258,imgsize-171132,width-800,height-600,resizemode-75/66264258.jpg"
        profileSrc="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/a7xekyavj0dmwq9g_1586762992.jpeg?tr=w-812,h-464"
        title="Anupama Parameswaran"
      />
      <Story
        image="https://cdn.123telugu.com/content/wp-content/uploads/2018/04/anumanual.jpg"
        profileSrc="https://i.pinimg.com/originals/5a/8b/26/5a8b262109888ff90e72a51c3b8bbf7d.jpg"
        title="Anu Emmanuel"
      />
      <Story
        image="https://m.media-amazon.com/images/M/MV5BMjVmMzA1ODItZTBjMi00OWNmLTkxZGQtNGYyOTI3NTVlZmZkXkEyXkFqcGdeQXVyMjY5NTQ5ODQ@._V1_.jpg"
        profileSrc="https://static.toiimg.com/thumb/msid-67611616,width-800,height-600,resizemode-75,imgsize-210667,pt-32,y_pad-40/67611616.jpg"
        title="Naba Natash"
      />
      <Story
        image="https://lyricsraag.com/wp-content/uploads/2020/03/V-Songs-Vasthunnaa-Vachestunna-Lyrics.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1190886714002292736/0jfpp8XE_400x400.jpg"
        title="Nivetha Thomas"
      />
    </div>
  );
}

export default StoryReel;
