import Image from 'next/image';
import Link from 'next/link';

import github from '@/assets/icons/logos_github.svg';
import { Home, MessageSquareMore } from 'lucide-react';

export default function AppBar() {
	return (
		<>
			<nav
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
				className={`fixed bottom-0 left-0 right-0 z-infinity flex justify-around gap-2 border-t border-t-slate-600 px-2 py-4 backdrop-blur-xl transition-all duration-200 md:hidden`}
			>
				<Link
					className='flex flex-col items-center font-semibold text-slate-400 transition-all active:text-default-text'
					href={'/'}
				>
					<Home size={20} />
					<span className='hidden xs:block'>Início</span>
				</Link>
				<div className='h-6 w-px bg-slate-600' />
				<Link
					className='flex flex-col items-center font-semibold text-slate-400 transition-all active:text-default-text'
					href={'/contact-us'}
				>
					<MessageSquareMore size={20} />
					<span className='hidden xs:block'>Contate-me</span>
				</Link>
				<div className='h-6 w-px bg-slate-600' />

				<Link
					href={'https://github.com/Dargouls'}
					target='_blank'
					className='flex flex-col items-center justify-center rounded-md text-slate-400 active:text-default-text'
				>
					<Image src={github} alt='github' width={20} />
					<span className='hidden xs:block'>GitHub</span>
				</Link>
			</nav>
		</>
	);
}
