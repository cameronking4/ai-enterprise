import React from "react";

// const videos = [
//     "https://z9ykp7uocd.ufs.sh/f/zFhXe4KhKijBEyUluiocwjJSNfKaih6XPnEtz34Csemp9VAb",
//     "https://z9ykp7uocd.ufs.sh/f/zFhXe4KhKijBNrwOW3QpYA5k2t4mcfWJx3KG9eXOauh7oCsP",
//     "https://z9ykp7uocd.ufs.sh/f/zFhXe4KhKijBG0WlEHtJcLVJha9UroYlvRFzw5pxMBOZI0SQ",
//     "https://z9ykp7uocd.ufs.sh/f/zFhXe4KhKijBosTra6Fwk5p9GX0drvQWCIeil2RncoaTO7Mj",
//     "https://z9ykp7uocd.ufs.sh/f/zFhXe4KhKijBTmwvYJHWaoqnFKzQtE0T3sRZp5eSAmX6ifwj"
// ]

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <video
        className="h-full w-full object-cover"
        autoPlay={true}
        playsInline={true}
        loop
        muted
        preload="auto"
      >
        <source
          src="https://z9ykp7uocd.ufs.sh/f/zFhXe4KhKijBYid39SzeaOlvojQ4d1iI06Hmt7LsrqgKPZGE"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
};

export default HeroBackground;
