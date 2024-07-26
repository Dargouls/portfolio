'use client';

import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DownPage() {
	const [visible, setVisible] = useState(true);
	const handleDownPage = () => {
		const page = document.getElementById('convencing');

		window.scrollTo({ top: page?.offsetTop, behavior: 'smooth' });
	};

	const handleScroll = () => {
		if (window.scrollY > 180) {
			setVisible(false);
			return;
		}
		setVisible(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// Limpar o evento quando o componente é desmontado
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`fixed right-4 bottom-4 bg-primary-1000 rounded-full p-5 transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
				onClick={handleDownPage}
			>
				<ArrowDown size={24} />
			</div>
		</>
	);
}
