import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const emojis = ['⚛️', '💻', '🔧', '⚡', '🚀', '🎨', '📱', '🌐', '🔮', '🎯', '⚙️', '🔍'];

interface EmojiData {
  id: number;
  emoji: string;
  initialX: number;
  initialY: number;
  size: number;
}

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [emojiElements, setEmojiElements] = useState<EmojiData[]>([]);

  console.log("AnimatedBackground component rendering");

  useEffect(() => {
    const generatedEmojis: EmojiData[] = emojis.map((emoji, index) => ({
      id: index,
      emoji,
      initialX: Math.random() * 120 - 10,
      initialY: Math.random() * 120 - 10,
      size: Math.random() * 1.5 + 1,
    }));
    setEmojiElements(generatedEmojis);
  }, []); // Generate emojis once on mount

  useEffect(() => {
    if (!containerRef.current || emojiElements.length === 0) return;

    const container = containerRef.current;

    // Animate each emoji
    emojiElements.forEach((emojiData) => {
      const element = container.querySelector(`[data-emoji-id="${emojiData.id}"]`);
      if (!element) return;

      // Set initial position (already set by inline style, but good for clarity)
       gsap.set(element, {
         x: `${emojiData.initialX}vw`,
         y: `${emojiData.initialY}vh`,
       });

      // Create floating animation
      gsap.to(element, {
        x: `${emojiData.initialX + (Math.random() * 40 - 20)}vw`,
        y: `${emojiData.initialY + (Math.random() * 40 - 20)}vh`,
        rotation: Math.random() * 360,
        duration: Math.random() * 3 + 7,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 5, // Random delay
      });
    });

    // GSAP cleanup happens automatically when the elements are removed from DOM by React
  }, [emojiElements]); // Rerun animation when emojiElements state changes

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      {emojiElements.map((emojiData) => (
        <div
          key={emojiData.id}
          data-emoji-id={emojiData.id} // Use data attribute to find element
          style={{
            position: 'absolute',
            fontSize: `${emojiData.size}rem`,
            opacity: '0.25', // Decreased opacity
            userSelect: 'none',
            pointerEvents: 'none',
            // Z-index is handled by the container
          }}
        >
          {emojiData.emoji}
        </div>
      ))}
    </div>
  );
} 