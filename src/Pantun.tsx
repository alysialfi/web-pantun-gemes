import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import bgImage1 from './assets/bg-pantun-1.png';
import bgImage2 from './assets/bg-pantun-2.png';
import bgImage3 from './assets/bg-pantun-3.png';

const pantunBgs = [bgImage1, bgImage2, bgImage3];

const Pantun = () => {
const [currentIndex, setCurrentIndex] = useState<number>(0);
const [progress, setProgress] = useState<number>(0);
const [isPlaying, setIsPlaying] = useState<boolean>(true);
const [bgImageNumber, setBgImageNumber] = useState<number>(0);

const location = useLocation();
const params = new URLSearchParams(location.search);

const from: string = params.get("from") || "Unknown";
const to: string = params.get("to") || "Unknown";
const bait1: string = params.get("bait1") || "No data";
const bait2: string = params.get("bait2") || "No data";

const navigate = useNavigate();

interface Story {
    id: number;
    text: string;
}

const stories: Story[] = [
    { id: 1, text: bait1 },
    { id: 2, text: bait2 },
    { id: 3, text: 'balas pantun aku, dong!' },
];

useEffect(() => {
    const getRandomNumber = (): number => Math.floor(Math.random() * 3);
    setBgImageNumber(getRandomNumber());
}, [])

useEffect(() => {
    if (!isPlaying) return;

    const interval: number = setInterval(() => {
        if (progress < 100) {
            setProgress((prev: number) => prev + 1);
        } else {
            nextStory();
        }
    }, 50);

    return () => clearInterval(interval);
}, [progress, isPlaying]);

const nextStory = (): void => {
    if (currentIndex < stories.length - 1) {
        setProgress(0);
        setCurrentIndex((prevIndex: number) => prevIndex + 1);
    } else {
        setIsPlaying(false);
    }
};

const prevStory = (): void => {
    setProgress(0);
    setCurrentIndex((prevIndex: number) =>
        prevIndex === 0 ? 0 : prevIndex - 1
    );
    setIsPlaying(true); 
};

const handleTap = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, target } = event;
    const { left, width } = (target as HTMLElement).getBoundingClientRect();
    const tapPosition: number = clientX - left;

    if (tapPosition < width / 2) {
        prevStory();
    } else {
        nextStory();
    }
};

  return (
    <div className="relative w-full h-24 max-w-md mx-auto">
      <div className="absolute z-30 top-8 left-0 right-0 flex gap-1 px-2">
        {stories.map((_, index) => (
          <div key={index} className="w-full h-1 bg-gray-500 rounded overflow-hidden">
            <div
              className={`h-1 bg-white transition-all`} style={{
                width:
                  index < currentIndex
                    ? "100%"
                    : index === currentIndex
                    ? `${progress}%`
                    : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>

      <div onClick={handleTap} className="relative w-full h-screen flex justify-center items-center px-8" style={{ backgroundImage: `url(${pantunBgs[bgImageNumber]})` }}>
        {
          currentIndex < 2 ? 
          <div className="w-full h-full flex items-center flex-wrap justify-between">
            // TODO: CREATE PANTUN TEXT
          </div>
          :
          <div className="flex flex-col items-center gap-4">
            // TODO: CREATE LAST PAGE WITH BUTTON
          </div>
        }
      </div>
    </div>
  );
};

export default Pantun;