import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.6 },
    });
    timeline.fromTo(
      targetSection.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0 }
    );

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 85%",
      animation: timeline,
    });
  };

  useEffect(() => {
    const scrollTrigger = initRevealAnimation(targetSection);
    return scrollTrigger.kill;
  }, [targetSection]);

  return (
    <section
      className="py-24 w-full relative select-none section-container"
      ref={targetSection}
    >
      <p className="text-2xl md:text-3xl font-medium text-gray-300 max-w-3xl leading-relaxed">
        Software engineering student at TELECOM SudParis, Paris.{" "}
        I build distributed systems, blockchain protocols, ML pipelines, and full-stack web apps.
      </p>
    </section>
  );
};

export default AboutSection;
