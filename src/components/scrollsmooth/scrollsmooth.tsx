'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import './scrollsmooth.css';

interface SmoothScrollProps {
	children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
	const pathname = usePathname();
	// 1. Hook para pegar o tamanho da janela
	const windowSize = useWindowSize();

	// 2. Ref para o container de rolagem
	const scrollingContainerRef = useRef<HTMLDivElement | null>(null);

	// 3. Dados de rolagem suave
	const data = {
		ease: 0.1,
		current: 0,
		previous: 0,
		rounded: 0,
	};

	// 4. Atualizar altura do corpo no resize
	useEffect(() => {
		setBodyHeight();
	}, [windowSize.height, pathname]);

	const setBodyHeight = () => {
		if (scrollingContainerRef.current) {
			document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
		}
	};

	// 5. Handler de rolagem suave
	useEffect(() => {
		requestAnimationFrame(smoothScrollingHandler);
	}, []);

	const smoothScrollingHandler = () => {
		data.current = window.scrollY;
		data.previous += (data.current - data.previous) * data.ease;
		data.rounded = Math.round(data.previous * 100) / 100;

		if (scrollingContainerRef.current) {
			scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
		}
		requestAnimationFrame(smoothScrollingHandler);
	};

	return (
		<div className='parent max-w-[1950px]'>
			<div ref={scrollingContainerRef}>{children}</div>
		</div>
	);
}
