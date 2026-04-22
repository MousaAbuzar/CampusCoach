"use client";
import { useEffect, useRef } from "react";

const SYMBOLS = ["$", "$", "$", "¢", "%", "$"];

type Coin = {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  angle: number; spin: number;
  opacity: number;
  symbol: string;
  gold: number;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use non-null refs so closures don't lose narrowing
    const c: HTMLCanvasElement = canvas;
    const x: CanvasRenderingContext2D = ctx;

    const isMobile = () => window.innerWidth < 768;

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COIN_COUNT = isMobile() ? 14 : 35;

    function makeCoin(randomY = true): Coin {
      const maxR = isMobile() ? 13 : 22;
      const minR = isMobile() ? 8 : 14;
      const radius = Math.random() * maxR + minR;
      return {
        x: Math.random() * c.width,
        y: randomY ? Math.random() * c.height : c.height + radius + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.4),
        radius,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.025,
        opacity: Math.random() * 0.45 + 0.35,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        gold: Math.random() * 30 - 10,
      };
    }

    const coins: Coin[] = Array.from({ length: COIN_COUNT }, () => makeCoin(true));

    function drawCoin(coin: Coin) {
      x.save();
      x.translate(coin.x, coin.y);
      x.rotate(coin.angle);
      x.globalAlpha = coin.opacity;

      const glow = x.createRadialGradient(0, 0, coin.radius * 0.5, 0, 0, coin.radius * 2.5);
      glow.addColorStop(0, "rgba(255,200,44,0.35)");
      glow.addColorStop(1, "rgba(255,200,44,0)");
      x.beginPath();
      x.arc(0, 0, coin.radius * 2.5, 0, Math.PI * 2);
      x.fillStyle = glow;
      x.fill();

      const body = x.createRadialGradient(-coin.radius * 0.3, -coin.radius * 0.3, 0, 0, 0, coin.radius);
      body.addColorStop(0, `hsl(${44 + coin.gold}, 100%, 72%)`);
      body.addColorStop(0.6, `hsl(${38 + coin.gold}, 95%, 52%)`);
      body.addColorStop(1, `hsl(${30 + coin.gold}, 90%, 35%)`);
      x.beginPath();
      x.arc(0, 0, coin.radius, 0, Math.PI * 2);
      x.fillStyle = body;
      x.fill();

      x.strokeStyle = `hsl(${36 + coin.gold}, 80%, 30%)`;
      x.lineWidth = coin.radius * 0.08;
      x.stroke();

      x.beginPath();
      x.arc(0, 0, coin.radius * 0.75, 0, Math.PI * 2);
      x.strokeStyle = "rgba(255,255,255,0.2)";
      x.lineWidth = coin.radius * 0.06;
      x.stroke();

      x.fillStyle = `hsl(${30 + coin.gold}, 80%, 28%)`;
      x.font = `bold ${Math.round(coin.radius * 1.1)}px system-ui, sans-serif`;
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.fillText(coin.symbol, 0, 1);

      x.restore();
    }

    let animId: number;

    function animate() {
      x.clearRect(0, 0, c.width, c.height);

      for (const coin of coins) {
        coin.x += coin.vx;
        coin.y += coin.vy;
        coin.angle += coin.spin;

        if (coin.y < -coin.radius * 3) Object.assign(coin, makeCoin(false));
        if (coin.x < -coin.radius) coin.x = c.width + coin.radius;
        if (coin.x > c.width + coin.radius) coin.x = -coin.radius;

        drawCoin(coin);
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
