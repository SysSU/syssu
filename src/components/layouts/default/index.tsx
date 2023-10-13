import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Background from "./background";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const possibleShadeColors = [
    {
      shadow: "shadow-indigo-600/70 dark:shadow-indigo-600/70",
      border: "border-indigo-600 dark:border-indigo-600",
    },
    {
      shadow: "shadow-indigo-600/75 dark:shadow-indigo-600/75",
      border: "border-indigo-600 dark:border-indigo-600",
    },
    {
      shadow: "shadow-indigo-600/80 dark:shadow-indigo-600/80",
      border: "border-indigo-600 dark:border-indigo-600",
    },
  ];

  const [currentShadowColor, setCurrentShadowColor] = useState(0);
  const [countDirection, setCountDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        countDirection === 1 &&
        currentShadowColor === possibleShadeColors.length - 1
      ) {
        setCountDirection(-1);
        setCurrentShadowColor(currentShadowColor - 1);
      } else if (countDirection === -1 && currentShadowColor === 0) {
        setCountDirection(1);
        setCurrentShadowColor(currentShadowColor + 1);
      } else if (countDirection === 1) {
        setCurrentShadowColor(currentShadowColor + 1);
      } else if (countDirection === -1) {
        setCurrentShadowColor(currentShadowColor - 1);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [currentShadowColor, countDirection, possibleShadeColors.length]);

  return (
    <main className={`flex ${inter.className}`}>
      <Background />
      <section className="z-40 m-auto max-w-7xl">
        <div
          className={`
            break-words
          dark:bg-slate-900/95
          bg-slate-900/95
           ${possibleShadeColors[currentShadowColor].border} 
            m-10
            pb-2
            p-6 
            shadow-xl 
            ${possibleShadeColors[currentShadowColor].shadow} 
            border-2
         `}
        >
          {children}
        </div>
      </section>
    </main>
  );
}
