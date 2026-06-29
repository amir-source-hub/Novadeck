// @ts-nocheck
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeKernel() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Create icosahedron wireframe
    const geo = new THREE.IcosahedronGeometry(1.5, 1);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x00F5FF, transparent: true, opacity: 0.25 });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    scene.add(wireframe);

    // Inner glow sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00F5FF,
      transparent: true,
      opacity: 0.03,
      wireframe: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Floating particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00F5FF,
      size: 0.015,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      wireframe.rotation.x += 0.002;
      wireframe.rotation.y += 0.003;
      wireframe.rotation.x += mx * 0.003;
      wireframe.rotation.y += my * 0.003;

      innerMesh.rotation.x = wireframe.rotation.x * 0.8;
      innerMesh.rotation.y = wireframe.rotation.y * 0.8;

      // Breathing
      const breathe = 1 + Math.sin(t * 0.5) * 0.05;
      wireframe.scale.setScalar(breathe);
      wireMat.opacity = 0.2 + Math.sin(t * 0.8) * 0.08;

      particles.rotation.y = t * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0"
      style={{ zIndex: 0 }}
    />
  );
}