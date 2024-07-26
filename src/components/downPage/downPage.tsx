'use client';

import { ChevronDown } from 'lucide-react';
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
				className={`absolute bottom-0 px-8 pb-2 transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
				onClick={handleDownPage}
			>
				<ChevronDown className='text-slate-500 cursor-pointer' size={32} />
			</div>
		</>
	);
}
