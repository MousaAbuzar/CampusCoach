"use client";
import { useEffect, useRef } from "react";

const SYMBOLS = ["$", "$", "$", "¢", "%", "$"];

type Coin = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  angle: number;
  spin: number;
  opacity: number;
  symbol: string;
  gold: number; // hue shift for variety
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = () => window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COIN_COUNT = isMobile() ? 14 : 35;

    function makeCoin(randomY = true): Coin {
      const maxR = isMobile() ? 13 : 22;
      const minR = isMobile() ? 8 : 14;
      const radius = Math.random() * maxR + minR;
      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : canvas.height + radius + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.4),
        radius,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.025,
        opacity: Math.random() * 0.45 + 0.35,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        gold: Math.random() * 30 - 10, // slight hue variation
      };
    }

    const coins: Coin[] = Array.from({ length: COIN_COUNT }, () => makeCoin(true));

    let animId: number;

    function drawCoin(c: Coin) {
      ctx!.save();
      ctx!.translate(c.x, c.y);
      ctx!.rotate(c.angle);
      ctx!.globalAlpha = c.opacity;

      // Outer glow
      const glow = ctx!.createRadialGradient(0, 0, c.radius * 0.5, 0, 0, c.radius * 2.5);
      glow.addColorStop(0, `rgba(255,200,44,0.35)`);
      glow.addColorStop(1, `rgba(255,200,44,0)`);
      ctx!.beginPath();
      ctx!.arc(0, 0, c.radius * 2.5, 0, Math.PI * 2);
      ctx!.fillStyle = glow;
      ctx!.fill();

      // Coin body gradient (gives 3D feel)
      const body = ctx!.createRadialGradient(-c.radius * 0.3, -c.radius * 0.3, 0, 0, 0, c.radius);
      body.addColorStop(0, `hsl(${44 + c.gold}, 100%, 72%)`);
      body.addColorStop(0.6, `hsl(${38 + c.gold}, 95%, 52%)`);
      body.addColorStop(1, `hsl(${30 + c.gold}, 90%, 35%)`);
      ctx!.beginPath();
      ctx!.arc(0, 0, c.radius, 0, Math.PI * 2);
      ctx!.fillStyle = body;
      ctx!.fill();

      // Coin rim
      ctx!.strokeStyle = `hsl(${36 + c.gold}, 80%, 30%)`;
      ctx!.lineWidth = c.radius * 0.08;
      ctx!.stroke();

      // Inner circle detail
      ctx!.beginPath();
      ctx!.arc(0, 0, c.radius * 0.75, 0, Math.PI * 2);
      ctx!.strokeStyle = `rgba(255,255,255,0.2)`;
      ctx!.lineWidth = c.radius * 0.06;
      ctx!.stroke();

      // Symbol
      ctx!.fillStyle = `hsl(${30 + c.gold}, 80%, 28%)`;
      ctx!.font = `bold ${Math.round(c.radius * 1.1)}px system-ui, sans-serif`;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText(c.symbol, 0, 1);

      ctx!.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      for (const c of coins) {
        c.x += c.vx;
        c.y += c.vy;
        c.angle += c.spin;

        // Respawn at bottom when off top
        if (c.y < -c.radius * 3) {
          Object.assign(c, makeCoin(false));
        }
        // Bounce horizontal edges
        if (c.x < -c.radius) c.x = canvas.width + c.radius;
        if (c.x > canvas.width + c.radius) c.x = -c.radius;

        drawCoin(c);
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
