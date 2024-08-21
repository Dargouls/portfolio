'use client';

import { useEffect, useRef } from 'react';
import * as three from 'three';

export default function Compo() {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window !== 'undefined' && mountRef.current) {
			const currentMount = mountRef.current;

			const scene = new three.Scene();
			scene.background = new three.Color('#20232D');
			const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			const renderer = new three.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			currentMount.appendChild(renderer.domElement);

			const geometry = new three.SphereGeometry();
			const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
			const cube = new three.Mesh(geometry, material);
			scene.add(cube);

			camera.position.z = 5;

			const animate = () => {
				requestAnimationFrame(animate);
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
				renderer.render(scene, camera);
			};
			animate();

			// Cleanup function to remove the renderer from the DOM
			return () => {
				if (currentMount) {
					currentMount.removeChild(renderer.domElement);
				}
				renderer.dispose();
			};
		}
	}, []);

	return <div ref={mountRef} className='h-screen flex justify-center items-center'></div>;
}
