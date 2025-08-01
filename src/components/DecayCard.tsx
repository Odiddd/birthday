'use client';
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { gsap } from "gsap";
import "@/app/DecayCard.css";

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
  width = 300,
  height = 400,
  image = "image/fotososweet.jpeg",
  children,
}) => {
  const svgRef = useRef<HTMLDivElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);

  // Inisialisasi nilai default tanpa mengakses window
  const cursor = useRef({ x: 0, y: 0 });
  const cachedCursor = useRef({ x: 0, y: 0 });
  const winsize = useRef({ width: 0, height: 0 });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Jalankan hanya di client
    setIsClient(true);
    cursor.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    cachedCursor.current = { ...cursor.current };
    winsize.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const lerp = (a: number, b: number, n: number): number =>
      (1 - n) * a + n * b;

    const map = (
      x: number,
      a: number,
      b: number,
      c: number,
      d: number
    ): number => ((x - a) * (d - c)) / (b - a) + c;

    const distance = (
      x1: number,
      x2: number,
      y1: number,
      y2: number
    ): number => {
      const a = x1 - x2;
      const b = y1 - y2;
      return Math.hypot(a, b);
    };

    const handleResize = (): void => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const handleMouseMove = (ev: MouseEvent): void => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    const render = () => {
      const targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1
      );
      const targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1
      );
      const targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.1
      );

      const bound = 50;
      let finalX = targetX;
      let finalY = targetY;

      if (finalX > bound) finalX = bound + (finalX - bound) * 0.2;
      if (finalX < -bound) finalX = -bound + (finalX + bound) * 0.2;
      if (finalY > bound) finalY = bound + (finalY - bound) * 0.2;
      if (finalY < -bound) finalY = -bound + (finalY + bound) * 0.2;

      imgValues.imgTransforms.x = finalX;
      imgValues.imgTransforms.y = finalY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz,
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: imgValues.displacementScale },
        });
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Hindari render jika belum client (opsional tapi aman)
  if (!isClient) return null;

  return (
  <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
    <div
      className="content"
      style={{ width: `${width}px`, height: `${height}px` }}
      ref={svgRef}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="svg"
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="card-text">{children}</div>
    </div>
    </div>
  );
};

export default DecayCard;