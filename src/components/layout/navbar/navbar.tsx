'use client';

import github from '@/assets/icons/logos_github.svg';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
	const pathname = usePathname();
	const router = useRouter();
	const [visible, setVisible] = useState(false);

	const handleGoPage = (page: string) => {
		if (pathname === page) window.scrollTo({ top: 0, behavior: 'smooth' });
		if (pathname !== page) router.push(page);
	};

	const handleScroll = () => {
		if (window.scrollY > 180 && pathname === '/') setVisible(true);
		if (window.scrollY < 180 && pathname === '/') setVisible(false);
	};

	useEffect(() => {
		if (pathname !== '/') {
			setVisible(true);
			return;
		} else {
			setVisible(false);
		}
	}, [pathname]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		// Limpar o evento quando o componente é desmontado
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [pathname]);

	return (
		<>
			<nav
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.001)' }}
				className={`fixed bottom-2 left-1/2 z-infinity hidden -translate-x-1/2 gap-2 rounded-xl border border-slate-600 p-2 shadow-grand backdrop-blur-xl transition-all duration-200 md:flex ${visible ? 'opacity-100' : 'translate-y-24 opacity-0'}`}
			>
				<div className='flex min-w-24 items-center justify-center rounded-md bg-background-light px-8 hover:opacity-60 active:bg-background'>
					<Link href={'https://github.com/Dargouls'} target='_blank'>
						<Image src={github} alt='github' width={44} />
					</Link>
				</div>
				<div className='flex gap-8 rounded-md bg-background-light px-8 py-4'>
					<div
						onClick={() => handleGoPage('/')}
						className='cursor-pointer font-semibold text-slate-600 transition-all hover:text-default-text'
					>
						Início
					</div>
					<div className='h-6 w-px bg-slate-600' />
					<Link
						className='text-nowrap font-semibold text-slate-600 transition-all hover:text-default-text'
						href={'/contact-us'}
					>
						Contate-me
					</Link>
				</div>
			</nav>
		</>
	);
}
