import React, { useRef, useState, useEffect } from "react";
import "./css/main.css";
import "./css/normalize.min.css";
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { CSSRulePlugin, CSSPlugin } from "gsap/all";
// import "imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";
import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
const AirpodsNoReact = () => {
  let img = useRef(null);
  let iphone1 = useRef(null);
  let iphone1Text = useRef(null);
  let iphone2 = useRef(null);
  let iphone2Text = useRef(null);

  var controller = new ScrollMagic.Controller();

  useEffect(() => {
    TweenMax.defaultOverwrite = false;
    let tlFirstScroll = new TimelineMax();

    tlFirstScroll
      .set(img, { scale: 4, transformOrigin: "center top" })
      .to(img, 3, {
        scale: 2,
        y: "-40%",
      })
      .to(img, 2, { scale: 1, y: "0%" });

    //Scene 1
    new ScrollMagic.Scene({
      triggerElement: ".trigger1",
      duration: "100%", // scroll distance
      triggerHook: 0,
    })
      .setTween(tlFirstScroll)
      .addIndicators()
      .addTo(controller);

    let tlSecondScroll = new TimelineMax();
    tlSecondScroll
      .to(iphone1, 3, { x: "-54%" })
      .to(iphone2, 3, { x: "54%" }, "-=3")
      .from(iphone1Text, 3, { autoAlpha: 0 }, "-=3")
      .from(iphone2Text, 3, { autoAlpha: 0 }, "-=3")
      .to(iphone1Text, 3, { x: "-30%" }, "-=3")
      .to(iphone2Text, 3, { x: "30%" }, "-=3")
      .set(".iphone-stick", { display: "block" })
      .to(".iphone1-img-behind", 3, { x: "-50%" })
      .to(".iphone2-img-behind", 3, { x: "50%" }, "-=3")
      .to(".iphone1-img", 0.3, { autoAlpha: 0 }, "-=3")
      .to(".iphone2-img", 0.3, { autoAlpha: 0 }, "-=3")
      .to(iphone1Text, 0.3, { autoAlpha: 0 }, "-=3")
      .to(iphone2Text, 0.3, { autoAlpha: 0 }, "-=3");
    new ScrollMagic.Scene({
      triggerElement: ".trigger2",
      triggerHook: 0,
      duration: "100%",
    })
      .setTween(tlSecondScroll)
      .addIndicators()
      .setPin(".trigger2")
      .addTo(controller);
  }, []);
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
      <section>
        <div className="trigger2">
          <div ref={(el) => (img = el)} className="iphone-image-wrapper">
            <div ref={(el) => (iphone1Text = el)} className="iphone1-text">
              <p>iPhone Xs Max</p>
              <p>6.5" dsiplay</p>
            </div>
            <div ref={(el) => (iphone1 = el)} className="iphone-image iphone1">
              <div className="inner-phone">
                <img className="iphone1-img" src="img/iphone-1.png" alt="" />
                <img className="iphone-stick" src="img/iphone-3.png" alt="" />
                <img
                  className="iphone1-img-behind"
                  src="img/iphone-left.png"
                  alt=""
                />{" "}
              </div>
            </div>
            <div ref={(el) => (iphone2 = el)} className="iphone-image iphone2">
              <div className="inner-phone">
                <img className="iphone2-img" src="img/iphone-1.png" alt="" />
                <img
                  className="iphone2-img-behind"
                  src="img/iphone-right.png"
                  alt=""
                />
              </div>
            </div>
            <div ref={(el) => (iphone2Text = el)} className="iphone2-text">
              <p>iPhone Xs Max</p>
              <p>5.8" display</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirpodsNoReact;
