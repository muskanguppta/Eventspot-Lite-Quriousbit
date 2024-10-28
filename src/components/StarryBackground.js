import React, { useEffect, useRef } from 'react';

const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

const StarryBackground = () => {
  const canvasRef = useRef(null);
  let scale = 1;
  let width, height;
  let stars = [];
  let pointerX = null, pointerY = null;
  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
  let touchInput = false;

  const generateStars = () => {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      });
    }
  };

  const placeStar = (star) => {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  };

  const recycleStar = (star) => {
    let direction = 'z';
    let vx = Math.abs(velocity.x);
    let vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
      let axis;
      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
      } else {
        axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
      }

      direction = axis === 'h' ? (velocity.x > 0 ? 'l' : 'r') : (velocity.y > 0 ? 't' : 'b');
    }

    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

    if (direction === 'z') {
      star.z = 0.1;
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    } else if (direction === 'l') {
      star.x = -OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === 'r') {
      star.x = width + OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === 't') {
      star.x = width * Math.random();
      star.y = -OVERFLOW_THRESHOLD;
    } else if (direction === 'b') {
      star.x = width * Math.random();
      star.y = height + OVERFLOW_THRESHOLD;
    }
  };

  const resize = () => {
    scale = window.devicePixelRatio || 1;
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    stars.forEach(placeStar);
  };

  const step = () => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, width, height);
    update();
    render(context);
    requestAnimationFrame(step);
  };

  const update = () => {
    velocity.tx *= 0.96;
    velocity.ty *= 0.96;

    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach((star) => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;

      star.x += (star.x - width / 2) * velocity.z * star.z;
      star.y += (star.y - height / 2) * velocity.z * star.z;
      star.z += velocity.z;

      if (
        star.x < -OVERFLOW_THRESHOLD ||
        star.x > width + OVERFLOW_THRESHOLD ||
        star.y < -OVERFLOW_THRESHOLD ||
        star.y > height + OVERFLOW_THRESHOLD
      ) {
        recycleStar(star);
      }
    });
  };

  const render = (context) => {
    stars.forEach((star) => {
      context.beginPath();
      context.lineCap = 'round';
      context.lineWidth = STAR_SIZE * star.z * scale;
      context.globalAlpha = 0.5 + 0.5 * Math.random();
      context.strokeStyle = STAR_COLOR;

      context.moveTo(star.x, star.y);
      let tailX = velocity.x * 2;
      let tailY = velocity.y * 2;

      if (Math.abs(tailX) < 0.1) tailX = 0.5;
      if (Math.abs(tailY) < 0.1) tailY = 0.5;

      context.lineTo(star.x + tailX, star.y + tailY);
      context.stroke();
    });
  };

  const movePointer = (x, y) => {
    if (pointerX !== null && pointerY !== null) {
      let ox = x - pointerX;
      let oy = y - pointerY;

      velocity.tx += (ox / (8 * scale)) * (touchInput ? 1 : -1);
      velocity.ty += (oy / (8 * scale)) * (touchInput ? 1 : -1);
    }

    pointerX = x;
    pointerY = y;
  };

  const onMouseMove = (event) => {
    touchInput = false;
    movePointer(event.clientX, event.clientY);
  };

  const onTouchMove = (event) => {
    touchInput = true;
    movePointer(event.touches[0].clientX, event.touches[0].clientY);
    event.preventDefault();
  };

  const onMouseLeave = () => {
    pointerX = null;
    pointerY = null;
  };

  useEffect(() => {
    generateStars();
    resize();
    step();

    window.addEventListener('resize', resize);
    canvasRef.current.addEventListener('mousemove', onMouseMove);
    canvasRef.current.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvasRef.current.removeEventListener('mousemove', onMouseMove);
      canvasRef.current.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0, // Set z-index to -1 to keep it behind other elements
      }}
    />
  );
};

export default StarryBackground;
