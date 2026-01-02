
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CurveConfig } from '../../../../../types/types';

interface GalleryProps {
  images: string[];
  config: CurveConfig;
}

export const CurvedImage: React.FC<GalleryProps> = ({ images, config }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  
  const configRef = useRef<CurveConfig>(config);
  const offsetRef = useRef(0);

  useEffect(() => {
    configRef.current = config;
  }, [config]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Câmera com FOV solicitado, mas posicionada para capturar a largura maior
    const camera = new THREE.PerspectiveCamera(config.fov, 1, 0.1, 1000);
    camera.position.z = 10; 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    
    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const loader = new THREE.TextureLoader();
    const group = new THREE.Group();
    scene.add(group);
    groupRef.current = group;

    const vertexShader = `
      varying vec2 vUv;
      uniform float uCurve;
      void main() {
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        // Curvatura baseada no X global para efeito de "passagem" por uma lente côncava
        worldPos.z += (worldPos.x * worldPos.x) * uCurve;
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float uBrightness;
      uniform float uHasTexture;
      void main() {
        vec4 texColor = texture2D(uTexture, vUv);
        vec3 fallback = vec3(0.05, 0.07, 0.1);
        vec3 finalColor = mix(fallback, texColor.rgb, uHasTexture);
        gl_FragColor = vec4(finalColor * uBrightness, 1.0);
      }
    `;

    // IMAGEM MAIS LARGA: Aumentado de 4 para 8 de largura
    const geometry = new THREE.PlaneGeometry(8, 4.5, config.segments, config.segments);
    
    images.forEach((url, i) => {
      const uniforms = {
        uTexture: { value: new THREE.Texture() },
        uCurve: { value: config.curveIntensity },
        uBrightness: { value: config.brightness },
        uHasTexture: { value: 0.0 }
      };

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        side: THREE.DoubleSide,
        transparent: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = i * config.spacing;
      group.add(mesh);

      loader.load(url, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        uniforms.uTexture.value = tex;
        uniforms.uHasTexture.value = 1.0;
      });
    });

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const c = configRef.current;
      offsetRef.current += c.speed;

      if (groupRef.current) {
        groupRef.current.rotation.y = THREE.MathUtils.degToRad(c.rotationY);
        groupRef.current.rotation.x = THREE.MathUtils.degToRad(c.rotationX);
        groupRef.current.scale.setScalar(c.zoom);

        const totalWidth = images.length * c.spacing;
        
        groupRef.current.children.forEach((child, i) => {
          const mesh = child as THREE.Mesh;
          let x = (i * c.spacing - offsetRef.current) % totalWidth;
          
          if (x < -totalWidth / 2) x += totalWidth;
          if (x > totalWidth / 2) x -= totalWidth;
          
          mesh.position.x = x;

          const mat = mesh.material as THREE.ShaderMaterial;
          mat.uniforms.uCurve.value = c.curveIntensity;
          mat.uniforms.uBrightness.value = c.brightness;
          mat.wireframe = c.wireframe;
        });
      }

      if (cameraRef.current) {
        cameraRef.current.fov = c.fov;
        cameraRef.current.updateProjectionMatrix();
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      group.children.forEach(child => {
        const mesh = child as THREE.Mesh;
        (mesh.material as THREE.ShaderMaterial).dispose();
      });
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [images.length, config.segments, config.spacing]);

  return <div ref={mountRef} className="relative bg-black" />;
};