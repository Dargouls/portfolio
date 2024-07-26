import logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
	return (
		<>
			<header
				className='w-full fixed px-4 pt-4 z-infinity backdrop-blur-sm h-0 md:h-auto'
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.001)' }}
			>
				<Link href={'/'} className='block w-max'>
					<Image src={logo} alt='Logo' height={64} width={64} />
				</Link>
			</header>
		</>
	);
}
