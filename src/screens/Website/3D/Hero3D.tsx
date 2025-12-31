import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * CONFIGURATION GUIDE:
 * 1. BLOB COLOR: Change 'vec3(1.0)' in fragmentShader to change the color (e.g., vec3(1.0, 0.2, 0.0) for orange).
 * 2. SHARPNESS: Adjust 'softEdge' in fragmentShader. Smaller values = sharper edges.
 * 3. BLOB SIZE: Adjust 'threshold' in fragmentShader (lower = fatter) or 'radius' in blobs memo.
 * 4. MOVEMENT: Adjust 'vel' (velocity) and noise math in the useFrame loop.
 */

const MetaballShader = {
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uPoints: { value: [] }, // Array of Vector3 (x, y, radius)
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
    uniform vec3 uPoints[6];
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      uv.x *= aspect;
      
      float total = 0.0;
      
      // Calculate metaball influence for each point
      for (int i = 0; i < 6; i++) {
        vec2 p = uPoints[i].xy;
        p.x *= aspect;
        float r = uPoints[i].z;
        float d = distance(uv, p);
        total += (r * r) / (d * d);
      }

      // Mouse interaction influence
      vec2 m = uMouse;
      m.x *= aspect;
      float mouseRadius = 0.15; // --- CHANGE MOUSE SIZE HERE ---
      total += (mouseRadius * mouseRadius) / pow(distance(uv, m), 2.0);

      // --- LOOK & FEEL SETTINGS ---
      float threshold = 1.0;   // Lower = Blobs expand and merge more easily
      float softEdge = 0.05;   // Increase this for more "blur" around the edges
      
      float alpha = smoothstep(threshold - softEdge, threshold + softEdge, total);

      // --- COLOR SETTING ---
      // vec3(1.0, 1.0, 1.0) is pure white. 
      // Replace with your hex RGB equivalents (0.0 to 1.0)
      vec3 blobColor = vec3(1.0); 
      
      gl_FragColor = vec4(blobColor, alpha);
    }
  `,
};

const LavaLampPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, mouse } = useThree();
  
  // Initialize blobs with random positions and velocities
  const blobs = useMemo(() => {
    return Array.from({ length: 6 }).map(() => ({
      pos: new THREE.Vector2(Math.random(), Math.random()),
      // --- CHANGE BASE SPEED HERE ---
      vel: new THREE.Vector2((Math.random() - 0.5) * 0.001, (Math.random() - 0.5) * 0.001),
      // --- CHANGE BASE RADIUS HERE ---
      radius: 0.15 + Math.random() * 0.25
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
    
    // Update mouse position (normalized 0-1)
    material.uniforms.uMouse.value.set(
      (mouse.x + 1) / 2,
      (mouse.y + 1) / 2
    );

    // Update blob positions with bouncing logic
    blobs.forEach((blob, i) => {
      // --- CHANGE MOVEMENT COMPLEXITY ---
      // Adding sine/cosine creates more organic, wobbly paths
      blob.pos.x += blob.vel.x + Math.sin(time * 0.2 + i) * 0.0005;
      blob.pos.y += blob.vel.y + Math.cos(time * 0.2 + i) * 0.0005;

      // Bounce off edges with a margin to keep blobs mostly on screen
      const margin = 0.1;
      if (blob.pos.x < -margin || blob.pos.x > 1 + margin) blob.vel.x *= -1;
      if (blob.pos.y < -margin || blob.pos.y > 1 + margin) blob.vel.y *= -1;

      // Update uniform array
      material.uniforms.uPoints.value[i].set(blob.pos.x, blob.pos.y, blob.radius);
    });
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        transparent={true}
        uniforms={uniforms}
        vertexShader={MetaballShader.vertexShader}
        fragmentShader={MetaballShader.fragmentShader}
      />
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <LavaLampPlane />
      </Canvas>
    </div>
  );
};

export default Hero3D;