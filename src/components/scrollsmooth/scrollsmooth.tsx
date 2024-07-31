'use client';

import useWindowSize from '@/hooks/useWindowSize';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import './scrollsmooth.css';

interface SmoothScrollProps {
	children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
	const [isMobile, setIsMobile] = useState(false);
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
		verifyIsMobile();
		setBodyHeight();
	}, [windowSize.height, pathname]);

	// 5. Handler de rolagem suave
	useEffect(() => {
		verifyIsMobile();
		requestAnimationFrame(smoothScrollingHandler);
	}, []);

	const verifyIsMobile = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
			scrollingContainerRef.current = null;
		} else {
			setIsMobile(false);
		}
	};

	const setBodyHeight = () => {
		if (scrollingContainerRef.current)
			document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;
	};

	const smoothScrollingHandler = () => {
		data.current = window.scrollY;
		data.previous += (data.current - data.previous) * data.ease;
		data.rounded = Math.round(data.previous * 100) / 100;

		if (scrollingContainerRef.current)
			scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
		requestAnimationFrame(smoothScrollingHandler);
	};

	return (
		<div className={`max-w-[1950px] ${isMobile ? '' : 'parent'}`}>
			<div ref={isMobile ? null : scrollingContainerRef}>{children}</div>
		</div>
	);
}
