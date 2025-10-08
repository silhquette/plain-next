import { motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Heading, Subheading, Lead } from "./text";

interface ParallaxBannerProps {
  children: ReactNode;
}

function ParallaxBanner({ children }: ParallaxBannerProps) {
    const { scrollYProgress } = useScroll()
    const [progress, setProgress] = useState(0);
    const ref = useRef(null)

    useEffect(() => {
        return scrollYProgress.on("change", (v => setProgress(v)));
    }, [scrollYProgress]);

    const y = progress * -340;

    return (
        <div ref={ref} className="relative overflow-hidden h-[430px] rounded-4xl w-full max-w-7xl mx-auto mt-16">
            <motion.img 
                style={{ 
                    translateY: y
                }}
                src={'/banner/banner.jpg'} 
                alt="image hero brand relative" 
                className="h-[770px] w-full object-cover object-top" 
            />
            <div className="bg-gradient-to-r from-black/80 via-50% via-black/60 to-transparent absolute top-0 bottom-0 left-0 right-0 z-10">
                <div className="flex flex-col p-24 justify-center items-start h-full">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default ParallaxBanner;