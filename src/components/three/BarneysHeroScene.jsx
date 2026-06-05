import { useEffect, useRef } from "react";
import * as THREE from "three";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

function BarneysHeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const roofGeometry = new THREE.ConeGeometry(2.25, 0.92, 4, 1, false);
    roofGeometry.rotateY(Math.PI / 4);
    roofGeometry.scale(1.45, 0.62, 0.55);
    const roof = new THREE.Mesh(
      roofGeometry,
      new THREE.MeshStandardMaterial({
        color: 0x9f1717,
        metalness: 0.28,
        roughness: 0.38,
        emissive: 0x250000,
        emissiveIntensity: 0.38,
      }),
    );
    roof.position.y = 0.74;
    group.add(roof);

    const house = new THREE.Mesh(
      new THREE.BoxGeometry(2.9, 1.3, 0.58),
      new THREE.MeshStandardMaterial({
        color: 0x151515,
        metalness: 0.2,
        roughness: 0.45,
        emissive: 0x100302,
        emissiveIntensity: 0.5,
      }),
    );
    house.position.y = -0.25;
    group.add(house);

    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(3.28, 0.08, 0.68),
      new THREE.MeshStandardMaterial({
        color: 0xf4b544,
        metalness: 0.55,
        roughness: 0.24,
        emissive: 0x5a2300,
        emissiveIntensity: 0.62,
      }),
    );
    trim.position.y = 0.4;
    group.add(trim);

    const gutter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.045, 3.52, 24),
      new THREE.MeshStandardMaterial({
        color: 0xf9c650,
        metalness: 0.72,
        roughness: 0.22,
        emissive: 0x5a2600,
        emissiveIntensity: 0.4,
      }),
    );
    gutter.rotation.z = Math.PI / 2;
    gutter.position.set(0, 0.53, 0.36);
    group.add(gutter);

    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0xf9d56a,
      metalness: 0.1,
      roughness: 0.18,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.95,
    });

    [-0.82, 0, 0.82].forEach((x) => {
      const pane = new THREE.Mesh(
        new THREE.BoxGeometry(0.34, 0.42, 0.035),
        windowMaterial,
      );
      pane.position.set(x, -0.18, 0.32);
      group.add(pane);
    });

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.58,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const rings = [];
    [2.35, 2.75, 3.15, 3.55].forEach((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.011 + index * 0.002, 112, 10),
        ringMaterial.clone(),
      );
      ring.rotation.x = 1.13 + index * 0.17;
      ring.rotation.y = 0.46 + index * 0.22;
      ring.rotation.z = index * 0.52;
      ring.material.opacity = 0.48 - index * 0.055;
      group.add(ring);
      rings.push(ring);
    });

    const particles = new THREE.BufferGeometry();
    const count = 150;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const spread = 7;
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.2;
    }
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const sparks = new THREE.Points(
      particles,
      new THREE.PointsMaterial({
        color: 0xffd166,
        size: 0.018,
        transparent: true,
        opacity: 0.52,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(sparks);

    scene.add(new THREE.AmbientLight(0xffffff, 0.72));
    const keyLight = new THREE.PointLight(0xffc35a, 3.8, 20);
    keyLight.position.set(2.5, 3, 5);
    scene.add(keyLight);

    const redLight = new THREE.PointLight(0xef4444, 2.4, 12);
    redLight.position.set(-3, -1.3, 3);
    scene.add(redLight);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
      const scale = clientWidth < 640 ? 0.72 : clientWidth < 1024 ? 0.86 : 1;
      group.scale.setScalar(scale);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frameId;
    let isVisible = true;
    let isPageVisible = !document.hidden;
    const timer = new THREE.Timer();
    timer.connect(document);
    const reduced = prefersReducedMotion();

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
      },
      { threshold: 0.02 },
    );
    visibilityObserver.observe(mount);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = (timestamp) => {
      if (!isVisible || !isPageVisible) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      timer.update(timestamp);
      const elapsed = timer.getElapsed();
      const delta = timer.getDelta();
      if (!reduced) {
        group.rotation.y = Math.sin(elapsed * 0.28) * 0.26;
        group.rotation.x = Math.sin(elapsed * 0.18) * 0.06;
        roof.rotation.z = Math.sin(elapsed * 0.7) * 0.012;
        sparks.rotation.y = elapsed * 0.025;

        rings.forEach((ring, index) => {
          ring.rotation.z += delta * (0.17 + index * 0.05);
          ring.rotation.x += delta * (0.04 + index * 0.015);
          ring.material.opacity = 0.35 + Math.sin(elapsed * 1.2 + index) * 0.08;
        });
      }

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material))
            object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      timer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-95 [mask-image:radial-gradient(circle_at_center,black_0%,black_62%,transparent_83%)]"
      aria-hidden="true"
    />
  );
}

export default BarneysHeroScene;
