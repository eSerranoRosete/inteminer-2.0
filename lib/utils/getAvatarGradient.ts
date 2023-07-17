"use client";

const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getAvatarGradient = () => {
  const startColor = generateRandomColor();
  const endColor = generateRandomColor();

  return {
    from: startColor,
    to: endColor,
  };
};
