import Image from 'next/image';
import Link from 'next/link';

import github from '@/assets/icons/logos_github.svg';
import { Home, MessageSquareMore, Trophy } from 'lucide-react';

export default function AppBar() {
	return (
		<>
			<nav
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
				className={`fixed flex justify-around left-0 right-0 backdrop-blur-xl bottom-0 gap-2 border-t px-2 py-4 border-t-slate-600 transition-all duration-200 md:hidden`}
			>
				<Link
					className='flex flex-col items-center active:text-default-text text-slate-400 font-semibold transition-all'
					href={'/'}
				>
					<Home size={20} />
					<span className='hidden xs:block'>Início</span>
				</Link>
				<div className='w-px h-6 bg-slate-600' />
				<Link
					className='flex flex-col items-center active:text-default-text text-slate-400 font-semibold transition-all'
					href={'/'}
				>
					<MessageSquareMore size={20} />
					<span className='hidden xs:block'>Contate-me</span>
				</Link>
				<div className='w-px h-6 bg-slate-600' />
				<Link
					className='flex flex-col items-center active:text-default-text text-slate-400 font-semibold transition-all'
					href={'/'}
				>
					<Trophy size={20} />
					<span className='hidden xs:block'>Experiência</span>
				</Link>
				<div className='w-px h-6 bg-slate-600' />
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
