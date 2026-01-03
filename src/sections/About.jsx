import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Multimedia & web developer blending code, design, and motion to build functional, elegant digital experiences. I create e-commerce sites, interactive 3D/AR demos, and animated interfaces — always focused on storytelling and results.`;


  // Full about text (replace your original)
const aboutText = `I’m a multimedia and web developer who explores every layer of digital creation from designing intuitive interfaces and motion-rich animations to building structured, production-ready web experiences.

My journey spans front-end and back-end development, which helps me balance design and logic to create clean, seamless results. I’ve built e-commerce platforms, crafted visual identities and marketing assets, and experimented with interactive 3D and augmented reality experiences.

Every project I create aims to tell a story: functional, elegant, and alive. I’m constantly learning new tools to grow both my technical and creative sides React and GSAP for motion, WordPress for content-driven sites, and Blender for visual storytelling.

Outside of code, I explore design trends, refine visuals in Photoshop and After Effects, and imagine ways to make the web more inspiring and human.`;


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
