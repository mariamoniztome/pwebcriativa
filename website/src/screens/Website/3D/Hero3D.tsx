import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const MetaballShader = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uPoints: { value: [] as THREE.Vector3[] },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    uniform vec3 uPoints[10];
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      uv.x *= aspect;
      
      float total = 0.0;
      
      for (int i = 0; i < 10; i++) {
        vec2 p = uPoints[i].xy;
        p.x *= aspect;
        float r = uPoints[i].z;
        float d = distance(uv, p);
        total += (r * r) / (d * d);
      }

      vec2 m = uMouse;
      m.x *= aspect;
      float mouseRadius = 0.12;
      total += (mouseRadius * mouseRadius) / pow(distance(uv, m), 2.0);

      float threshold = 1.0;
      float softEdge = 0.05;
      
      float alpha = smoothstep(threshold - softEdge, threshold + softEdge, total);

      vec3 blobColor = vec3(1.0);
      
      gl_FragColor = vec4(blobColor, alpha);
    }
  `,
};

const LavaLampPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, mouse, viewport } = useThree();
  
  const blobs = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      pos: new THREE.Vector2(Math.random(), Math.random()),
      vel: new THREE.Vector2((Math.random() - 0.5) * 0.001, (Math.random() - 0.5) * 0.001),
      radius: 0.10 + Math.random() * 0.10
    }));
  }, []);

  const uniforms = useMemo(() => {
    const u = THREE.UniformsUtils.clone(MetaballShader.uniforms);
    u.uResolution.value.set(size.width, size.height);
    u.uPoints.value = blobs.map(b => new THREE.Vector3(b.pos.x, b.pos.y, b.radius));
    return u;
  }, [size, blobs]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    const time = state.clock.getElapsedTime();
    
    material.uniforms.uTime.value = time;
    
    material.uniforms.uMouse.value.set(
      (mouse.x + 1) / 2,
      (mouse.y + 1) / 2
    );

    blobs.forEach((blob, i) => {
      blob.pos.x += blob.vel.x + Math.sin(time * 0.2 + i) * 0.0005;
      blob.pos.y += blob.vel.y + Math.cos(time * 0.2 + i) * 0.0005;

      const margin = 0.1;
      if (blob.pos.x < -margin) {
        blob.vel.x = Math.abs(blob.vel.x);
        blob.pos.x = -margin;
      }
      if (blob.pos.x > 1 + margin) {
        blob.vel.x = -Math.abs(blob.vel.x);
        blob.pos.x = 1 + margin;
      }
      if (blob.pos.y < -margin) {
        blob.vel.y = Math.abs(blob.vel.y);
        blob.pos.y = -margin;
      }
      if (blob.pos.y > 1 + margin) {
        blob.vel.y = -Math.abs(blob.vel.y);
        blob.pos.y = 1 + margin;
      }

      material.uniforms.uPoints.value[i].set(blob.pos.x, blob.pos.y, blob.radius);
    });
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        transparent={true}
        uniforms={uniforms}
        vertexShader={MetaballShader.vertexShader}
        fragmentShader={MetaballShader.fragmentShader}
      />
    </mesh>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black" style={{ zIndex: 0, pointerEvents: 'none' }}>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'auto' }}
        eventSource={document.documentElement}
        eventPrefix="client"
      >
        <LavaLampPlane />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;