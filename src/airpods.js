import React, { useRef, useState, useEffect } from "react";
import "./css/main.css";
import "./css/normalize.min.css";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { TimelineMax } from "gsap";
const Airpods = () => {
  // let img = useRef(null);
  // let trigger1 = useRef(null);
  // let tlFirstScroll = new TimelineMax();

  // useEffect(() => {
  //   tlFirstScroll
  //     .set(img, { scale: 4, transformOrigin: "center top" })
  //     .to(img, 3, {
  //       scale: 2,
  //       y: "-40%",
  //     })
  //     .to(img, 2, { scale: 1, y: "0%" });
  // }, []);
  const [progress, setProgress] = React.useState(0);

  let trigger1 = useRef(null);
  let img1 = useRef(null);

  return (
    <div>
      <section>
        <div ref={(el) => (trigger1 = el)} className="grid-12 trigger1">
          <h2 className="position-h2">
            The custom OLED displays on iPhone&nbsp;X deliver the most accurate
            color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax
            has our largest display ever on an&nbsp;iPhone.
          </h2>
        </div>
      </section>
      <Controller>
        <Scene
          duration="100%"
          indicators
          triggerElement={trigger1}
          triggerHook={0}
        >
          {(progress) => (
            <section>
              <div className="trigger2">
                <Timeline
                  paused
                  totalProgress={progress}
                  target={
                    <div className="iphone-image-wrapper">
                      <div className="iphone1-text">
                        <p>iPhone Xs Max</p>
                        <p>6.5" dsiplay</p>
                      </div>
                      <div className="iphone-image iphone1">
                        <div className="inner-phone">
                          <img
                            className="iphone1-img"
                            src="img/iphone-1.png"
                            alt=""
                          />
                          <img
                            className="iphone-stick"
                            src="img/iphone-3.png"
                            alt=""
                          />
                          <img
                            className="iphone1-img-behind"
                            src="img/iphone-left.png"
                            alt=""
                          />{" "}
                        </div>
                      </div>
                      <div className="iphone-image iphone2">
                        <div className="inner-phone">
                          <img
                            className="iphone2-img"
                            src="img/iphone-1.png"
                            alt=""
                          />
                          <img
                            className="iphone2-img-behind"
                            src="img/iphone-right.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="iphone2-text">
                        <p>iPhone Xs Max</p>
                        <p>5.8" display</p>
                      </div>
                    </div>
                  }
                >
                  <Tween to={{ scale: 4, transformOrigin: "center top" }} />
                  <Tween duration={3} to={{ scale: 2, y: "-40%" }} />
                  <Tween duration={3} to={{ scale: 1, y: "0%" }} />
                  <Tween delay={-3} to={{ x: "-50%" }} />
                </Timeline>
              </div>
            </section>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default Airpods;
