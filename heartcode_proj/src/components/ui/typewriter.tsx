"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterWords = ({
  words,
  typingSpeed = 100, // Speed of typing (in milliseconds per letter)
  wordDelay = 2000, // Delay before starting the next word
  className,
}: {
  words: string[];
  typingSpeed?: number;
  wordDelay?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks current word index
  const [typedWord, setTypedWord] = useState(""); // Tracks the portion of the word being typed
  const [isTyping, setIsTyping] = useState(true); // Flag to control typing state

  useEffect(() => {
    const word = words[currentWordIndex]; // Ensure word is always fresh and tied to currentWordIndex
    let charIndex = 0;

    if (isTyping) {
      // Reset typedWord at the beginning of the typing
      setTypedWord("");

      // Start typing each character
      const typeInterval = setInterval(() => {
        if (charIndex < word.length-1) {
          setTypedWord((prev) => prev + word[charIndex]);
          charIndex++;
        } else {
          // When the word is completely typed
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, wordDelay); // Delay before starting the next word
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval); // Cleanup the interval
    } else {
      // After finishing the current word, move to the next word
      setIsTyping(true); // Start typing the next word
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Loop through words
    }
  }, [isTyping, words, currentWordIndex, typingSpeed, wordDelay]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className={cn(
        "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
        className
      )}
    >
      <span>{typedWord}</span>
      {/* Blinking cursor effect */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="inline-block"
      >
        |
      </motion.span>
    </motion.div>
  );
};
