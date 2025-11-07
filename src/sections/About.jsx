import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Creative developer passionate about crafting immersive digital experiences.
    I blend code, design, and motion to bring ideas to life across web and 3D.`;

  const aboutText = `I’m a multimedia and web developer who loves exploring every layer of digital creation from designing intuitive interfaces and dynamic animations to building structured, functional web experiences. 

My journey has led me through both front-end and back-end development, helping me understand how design and logic work together to create seamless results. 
I’ve built e-commerce platforms, designed engaging visuals, and experimented with interactive 3D and augmented experiences.

Every project I create aims to tell a story functional, elegant, and alive. 
I’m constantly learning new tools to grow my technical and creative sides, whether that’s React and GSAP for motion, WordPress for content creation, or Blender for visual storytelling.

Outside of coding, I’m always exploring new design trends, refining visuals in Photoshop or After Effects, and dreaming up ways to make the web more inspiring and human.`;


  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-blue-400 rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Where creativity meets technology"}
        title={"About Me"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/wejdenHaddad.png"
          alt="Wejden"
          className="w-md rounded-3xl shadow-xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
