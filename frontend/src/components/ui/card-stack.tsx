"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

let interval: any;
type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative flex justify-center mt-16 h-60 w-10/12 m-auto md:h-60 md:w-96">
      {cards.map((card, index) => {
        if (index == 0) {
          return (
            <motion.div
              key={card.id}
              className="absolute border-blue border-[3px] bg-white h-60 w-[300px] md:w-[32rem] md:h-[18rem] p-4 shadow-xl  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center right",
              }}
              animate={{
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                top: -20 * index,
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="">{card.content}</div>
              <div>
                <p className="">{card.name}</p>
                <p className="">{card.designation}</p>
              </div>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key={card.id}
              className="absolute border border-black border-[3px] bg-white h-60 w-[300px] md:w-[32rem] md:h-[18rem] p-4 shadow-xl  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
              style={{
                transformOrigin: "top center right",
                top: -20 * index,
              }}
              animate={{
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                top: -20 * index,
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="">{card.content}</div>
              <div>
                <p className="">{card.name}</p>
                <p className="">{card.designation}</p>
              </div>
            </motion.div>
          );
        }
      })}
    </div>
  );
};
