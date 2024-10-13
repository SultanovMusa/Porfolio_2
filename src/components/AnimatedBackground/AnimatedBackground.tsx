"use client"; // Ensure this component runs on the client side
import { useEffect, useRef } from "react";
import *  as THREE from 'three'

const ParticleCursor: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;

    const init = () => {
      // Create scene
      scene = new THREE.Scene();

      // Create camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 400;

      // Create renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (canvasRef.current) {
        canvasRef.current.appendChild(renderer.domElement);
      }

      // Create particles
      const particleCount = 5000;
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x00ffff, // Change color
        size: 2,
      });

      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() * 2 - 1) * 500;
        positions[i * 3 + 1] = (Math.random() * 2 - 1) * 500;
        positions[i * 3 + 2] = (Math.random() * 2 - 1) * 500;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Add cursor interaction
      window.addEventListener("mousemove", onDocumentMouseMove, false);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update particle rotation based on mouse movement
      particles.rotation.x = mouseY * Math.PI; // Adjust sensitivity if needed
      particles.rotation.y = mouseX * Math.PI; // Adjust sensitivity if needed
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      // Cleanup on unmount
      window.removeEventListener("mousemove", onDocumentMouseMove);
      if (renderer && canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />;
};

export default ParticleCursor;
