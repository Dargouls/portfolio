import notFound from '@/assets/illustrations/not-found.svg';
import Image from 'next/image';

export default function NotFound() {
	return (
		<>
			<div className='h-screen flex gap-12 justify-center items-center'>
				<div>
					<h1 className='text-9xl text-secondary text-center font-extralight'>404</h1>
					<h3 className='text-center mb-2'>Página não encontrada</h3>
					<p className='text-default-text-strong mb-8'>Desculpe, não foi possível encontrar essa página</p>
				</div>
				<div className='w-px h-64 bg-slate-600' />
				<Image src={notFound} alt='Not Found' width={400} />
			</div>
		</>
	);
}
