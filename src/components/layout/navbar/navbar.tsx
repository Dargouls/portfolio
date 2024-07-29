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

	const handleGoPage = () => {
		if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
		if (pathname !== '/') router.push('/');
	};

	const handleScroll = () => {
		if (window.scrollY > 180 && pathname === '/') setVisible(true);
		if (window.scrollY < 180 && pathname === '/') setVisible(false);
	};

	useEffect(() => {
		console.log(pathname);
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
				className={`fixed left-1/2 backdrop-blur-xl -translate-x-1/2 bottom-2 gap-2 rounded-xl border p-2 border-slate-600 z-infinity transition-all duration-200 hidden md:flex ${visible ? 'opacity-100' : 'opacity-0 translate-y-24'}`}
			>
				<div className='flex items-center justify-center px-8 min-w-24 bg-background-light rounded-md hover:opacity-60 active:bg-background'>
					<Link href={'https://github.com/Dargouls'} target='_blank'>
						<Image src={github} alt='github' width={44} />
					</Link>
				</div>
				<div className='flex gap-8 px-8 py-4 bg-background-light rounded-md'>
					<div
						onClick={handleGoPage}
						className='hover:text-default-text text-slate-600 font-semibold cursor-pointer transition-all'
					>
						Início
					</div>
					<div className='w-px h-6 bg-slate-600' />
					<Link
						className='hover:text-default-text text-nowrap text-slate-600 font-semibold transition-all'
						href={'/contact-us'}
					>
						Contate-me
					</Link>
					<div className='w-px h-6 bg-slate-600' />
					<Link className='hover:text-default-text text-slate-600 font-semibold transition-all' href={'/'}>
						Experiência
					</Link>
				</div>
			</nav>
		</>
	);
}
