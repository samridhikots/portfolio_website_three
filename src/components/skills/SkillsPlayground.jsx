import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "JavaScript", color: "#F7DF1E", icon: "JS", textColor: "#000" },
  { name: "Next.js", color: "#E5E7EB", icon: "N", textColor: "#000" },
  { name: "React", color: "#61DAFB", icon: "⚛", textColor: "#000" },
  { name: "Three.js", color: "#49E07C", icon: "▶", textColor: "#000" },

  { name: "Node.js", color: "#68A063", icon: "node" },
  { name: "Express", color: "#FFFFFF", icon: "ex", textColor: "#000" },
  { name: "MongoDB", color: "#13AA52", icon: "🍃" },

  { name: "C++", color: "#00599C", icon: "</>" },
  { name: "Java", color: "#FFFFFF", icon: "♨", textColor: "#000" },
  { name: "SQL", color: "#336791", icon: "📊" },

  { name: "Tailwind", color: "#38BDF8", icon: "tw", textColor: "#000" },
  { name: "GSAP", color: "#88CE02", icon: "gsap", textColor: "#000" },

  { name: "Git", color: "#F05032", icon: "👩🏻‍💻" },
  { name: "Shadcn", color: "#E11D48", icon: "🪄" },
];


export default function SkillsPlayground({ height = 600 }) {
  const containerRef = useRef(null);
  const [matterLoaded, setMatterLoaded] = useState(false);

  useEffect(() => {
    if (window.Matter) {
      setMatterLoaded(true);
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
      script.onload = () => setMatterLoaded(true);
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!matterLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    const Matter = window.Matter;
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    const width = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const engine = Engine.create();
    engine.world.gravity.y = 0.8;

    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: width,
        height: containerHeight,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio
      }
    });

    const boxSize = 140;

    // Create skill bodies with square shapes - spawn in a tighter grid
    const skillBodies = skills.map((skill, i) => {
      const cols = 5; // 5 boxes per row
      const row = Math.floor(i / cols);
      const col = i % cols;
      
      const spacing = boxSize + 20;
      const startX = (width - (cols * spacing)) / 2 + spacing / 2;
      const startY = 150;
      
      const x = startX + col * spacing + (Math.random() - 0.5) * 30;
      const y = startY + row * spacing + (Math.random() - 0.5) * 30;

      return Bodies.rectangle(x, y, boxSize, boxSize, {
        restitution: 0.7,
        friction: 0.05,
        frictionAir: 0.02,
        chamfer: { radius: 20 },
        render: {
          fillStyle: skill.color,
          strokeStyle: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 2
        },
        skillData: skill
      });
    });

    World.add(engine.world, skillBodies);

    // Walls with higher restitution to bounce things back
    const wallOptions = { 
      isStatic: true, 
      restitution: 0.9,
      render: { fillStyle: 'transparent' } 
    };
    World.add(engine.world, [
      Bodies.rectangle(width / 2, containerHeight + 50, width + 200, 100, wallOptions), // Ground
      Bodies.rectangle(-50, containerHeight / 2, 100, containerHeight * 2, wallOptions), // Left wall
      Bodies.rectangle(width + 50, containerHeight / 2, 100, containerHeight * 2, wallOptions), // Right wall
      Bodies.rectangle(width / 2, -50, width + 200, 100, wallOptions) // Ceiling
    ]);

    // Mouse constraint
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(engine.world, mouseConstraint);

    // Allow scrolling when not dragging
    let isDragging = false;
    
    Matter.Events.on(mouseConstraint, 'startdrag', () => {
      isDragging = true;
      render.canvas.style.pointerEvents = 'auto';
    });

    Matter.Events.on(mouseConstraint, 'enddrag', () => {
      isDragging = false;
    });

    // Only prevent default if we're dragging something
    const preventScroll = (e) => {
      if (mouseConstraint.body) {
        e.preventDefault();
      }
    };

    render.canvas.addEventListener('touchmove', preventScroll, { passive: false });
    render.canvas.addEventListener('wheel', (e) => {
      // Allow scrolling unless actively dragging
      if (mouseConstraint.body) {
        e.preventDefault();
      }
    }, { passive: false });

    // Custom rendering for text/icons on bodies
    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      
      skillBodies.forEach((body) => {
        const skill = body.skillData;
        const pos = body.position;
        const angle = body.angle;
        
        context.save();
        context.translate(pos.x, pos.y);
        context.rotate(angle);
        
        // Draw icon
        context.fillStyle = skill.textColor || '#FFFFFF';
        context.font = 'bold 34px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(skill.icon, 0, -15);
        
        // Draw name
        context.font = 'bold 16px Arial';
        context.fillText(skill.name, 0, 25);
        
        context.restore();
      });
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      render.canvas.removeEventListener('touchmove', preventScroll);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [matterLoaded, height]);

  if (!matterLoaded) {
    return (
      <div style={{
        width: '100%',
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        color: 'white',
        fontSize: '24px',
        borderRadius: '12px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      height: `${height}px`,
      background: '#0a0a0a',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '12px'
    }}>
      <div style={{
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 1000,
        pointerEvents: 'none',
        color: 'white',
        width: '100%',
        padding: '0 20px',
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          margin: '0 0 10px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          Skills <span style={{ color: '#22D3EE' }}>Playground</span>
        </h1>
        <p style={{ 
          fontSize: '16px', 
          margin: 0,
          color: '#9CA3AF'
        }}>
          Drag, throw, and watch them bounce.
        </p>
      </div>

      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      />
    </div>
  );
}