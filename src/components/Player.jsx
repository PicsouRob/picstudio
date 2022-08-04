import React, { useCallback, useEffect } from 'react';
import { motion } from "framer-motion";

function Player({ setIsPlaying, isPlaying }) {
    const canclePlayer = (key) => {
        if (key.target.classList.contains("cancle")) {
            setIsPlaying(false);
        }
    }
    
    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && isPlaying) {
                setIsPlaying(false);
            }
        },
        [setIsPlaying, isPlaying],
    );
    
    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);
    
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 w-full grid place-items-center px-0 md:px-6 cancle"
            onClick={(e) => canclePlayer(e)}
        >
            <div class="absolute top-3 right-6 text-white cursor-pointer "
                onClick={() => setIsPlaying(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            
            <motion.div
                class="bg-black rounded h-[400px] w-full md:w-[600px] md:h-[500px] lg:w-[700px] shadow z-20"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            >
                <iframe title="demo video"
                    className="h-full w-full" src="assets/video.mp4" frameborder="0"
                />
            </motion.div>
        </div>
    );
}

export default Player;