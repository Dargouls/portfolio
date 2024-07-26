import google from '@/assets/icons/logos_google-gmail.svg';
import linkedin from '@/assets/icons/logos_linkedin-icon.svg';
import whatsapp from '@/assets/icons/logos_whatsapp-icon.svg';
import me from '@/assets/images/me.png';

import Image from 'next/image';
import Link from 'next/link';

import 'aos/dist/aos.css';
import DownPage from '../downPage/downPage';
export default function Presentation() {
	return (
		<>
			<section
				className={`flex flex-col w-full md:h-screen max-h-[1000px] px-4 text-center relative justify-center items-center h-[calc(100vh-64px)]`}
			>
				<Image
					data-aos='fade-up'
					data-aos-duration='900'
					className='shadow-grand rounded-full'
					src={me}
					alt='Me'
					height={128}
					width={128}
				/>

				<h1 data-aos='fade-up' data-aos-duration='1400' data-aos-delay='100'>
					Olá! Me chamo Gabriel
				</h1>
				<span
					data-aos='fade-up'
					data-aos-delay='200'
					className='max-w-[900px] text-center text-default-text-strong'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua minim veniam, quis nostrud.
				</span>

				<div
					className='flex justify-center absolute bottom-16 w-full h-20'
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-delay='1000'
				>
					<Pin />
				</div>
				<DownPage />
			</section>
		</>
	);
}

function Pin() {
	return (
		<>
			<div className='flex absolute bottom-0 gap-4 items-center justify-center bg-contrast py-1 px-6 rounded-full hover:px-10 hover:gap-6 transition-all duration-300 ease-bounce'>
				<Link href={'/'}>
					<Image src={linkedin} alt='Google' height={24} width={24} />
				</Link>
				<Link href={'/'}>
					<Image src={whatsapp} alt='Google' height={24} width={24} />
				</Link>
				<Link href={'/'}>
					<Image src={google} alt='Google' height={24} width={24} />
				</Link>
			</div>
		</>
	);
}
