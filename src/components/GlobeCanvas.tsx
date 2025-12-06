import { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
  z: number;
}

interface Connection {
  p1: Point;
  p2: Point;
  alpha: number;
}

const GlobeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = Math.min(window.innerWidth * 0.8, 500);
    canvas.width = size;
    canvas.height = size;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;

    let rotation = 0;

    const points: Point[] = [];
    const connections: Connection[] = [];

    // Generate globe points
    for (let lat = -90; lat <= 90; lat += 12) {
      for (let lon = 0; lon < 360; lon += 12) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        points.push({
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi),
        });
      }
    }

    // Create connections
    for (let i = 0; i < 40; i++) {
      const p1 = points[Math.floor(Math.random() * points.length)];
      const p2 = points[Math.floor(Math.random() * points.length)];

      connections.push({
        p1,
        p2,
        alpha: Math.random() * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.004;

      // Draw connections - cyan color
      connections.forEach((conn) => {
        const { p1, p2 } = conn;

        const x1 = p1.x * Math.cos(rotation) - p1.z * Math.sin(rotation);
        const z1 = p1.z * Math.cos(rotation) + p1.x * Math.sin(rotation);

        const x2 = p2.x * Math.cos(rotation) - p2.z * Math.sin(rotation);
        const z2 = p2.z * Math.cos(rotation) + p2.x * Math.sin(rotation);

        if (z1 > 0 && z2 > 0) conn.alpha = Math.min(0.6, conn.alpha + 0.02);
        else conn.alpha = Math.max(0, conn.alpha - 0.03);

        ctx.beginPath();
        ctx.moveTo(centerX + x1, centerY + p1.y);
        ctx.lineTo(centerX + x2, centerY + p2.y);
        // Cyan color: #06b6d4
        ctx.strokeStyle = `rgba(6, 182, 212, ${conn.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw points - cyan color
      points.forEach((point) => {
        const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const z = point.z * Math.cos(rotation) + point.x * Math.sin(rotation);

        if (z > 0) {
          const scale = 200 / (200 + z);
          const alpha = (z + radius) / (2 * radius);
          
          const px = centerX + x * scale;
          const py = centerY + point.y * scale;

          // Main point - cyan color
          ctx.beginPath();
          ctx.arc(px, py, 2.5 * scale, 0, Math.PI * 2);
          // Cyan color: #22d3ee
          ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.9})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newSize = Math.min(window.innerWidth * 0.8, 500);
      if (canvas.width !== newSize) {
        canvas.width = newSize;
        canvas.height = newSize;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-auto max-w-md"
    />
  );
};

export default GlobeCanvas;