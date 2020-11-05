import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import video from "./assets/video.mp4";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import "./styles.css";
import Airpods from "./airpods";
import AirpodsNoReact from "./airpodsnoreact";

function App() {
  // let introref = useRef(null);
  // let videoref = useRef(null);
  // let text = useRef(null);

  // let section = useRef(null);
  // let endText = useRef(null);

  // let accelamount = 0.1;
  // let scrollpos = 0;
  // let delay = 0;
  // let textprogress = 0;

  // useEffect(() => {
  //   videoref.currentTime = 1;
  //   setInterval(() => {
  //     delay += (scrollpos - delay) * accelamount;
  //     videoref.currentTime = delay;
  //   }, 33.3333);
  //   // console.log(videoref.currentTime);
  // }, []);

  return (
    <div>
      {/* <Controller>
        <Scene
          duration="9000"
          // triggerElement={introref}
          triggerHook="0"
          indicators="true"
          pin={true}
        >
          {(progress) => {
            scrollpos = (progress * 9000) / 1000;
            textprogress = progress * 5;
            return (
              <div ref={(el) => (introref = el)} className="intro">
                <Timeline paused>
                  <Tween
                    totalProgress={textprogress}
                    duration={3}
                    from={{
                      css: {
                        opacity: "1",
                      },
                      ease: "easeIn",
                    }}
                    to={{
                      css: {
                        opacity: "0",
                      },
                      // ease: "eassOut",
                    }}
                  >
                    <h1>This is a cool heading</h1>
                  </Tween>
                </Timeline>

                <video ref={(el) => (videoref = el)} src={video}></video>
              </div>
            );
          }}
        </Scene>
      </Controller>
      <section ref={(el) => (section = el)}>
        <h1 ref={(el) => (endText = el)}>Revolution</h1>
      </section> */}
      {/* <Airpods /> */}
      <AirpodsNoReact />
    </div>
  );
}

export default App;
