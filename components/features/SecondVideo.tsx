"use client";

import React, { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SecondVideo = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useGSAP(() => {
        gsap.set('.lucia', { marginTop: '-60vh', opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.lucia',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
            pin: true
          }
        })

        tl.to('.lucia', { opacity: 1, duration: 1, ease: 'power1.inOut' })

        if (videoRef.current) {
          const video = videoRef.current;
        
          const playAnimation = () => {
            tl.to(video, {
              currentTime: video.duration,
              duration: 3,
              ease: 'power1.inOut'
            }, '<');
          };
        
          if (video.readyState >= 3) {
            playAnimation();
          } else {
            video.addEventListener('canplaythrough', playAnimation, { once: true });
          }
        }
      }, []);

    return (
    <section className="lucia">
        <div className='h-dvh'>
            <video 
             ref={videoRef}
             muted
             playsInline
             preload="auto"
             src="/videos/output2.mp4"
             className="size-full object-cover second-vd"
             style={{ 
               objectPosition: '15% 0%' 
             }}
            />
        </div>
    </section>
  )
}

export default SecondVideo
