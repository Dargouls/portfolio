import google from '@/assets/icons/logos_google-gmail.svg';
import linkedin from '@/assets/icons/logos_linkedin-icon.svg';
import whatsapp from '@/assets/icons/logos_whatsapp-icon.svg';
import me from '@/assets/images/me-professional.png';

import Image from 'next/image';
import Link from 'next/link';

import 'aos/dist/aos.css';
import DownPage from '../downPage/downPage';
export default function Presentation() {
	return (
		<>
			<section
				className={`relative flex h-[calc(100vh-136px)] max-h-[1000px] w-full flex-col items-center justify-center px-4 text-center md:h-screen`}
			>
				<div id='image-container' className='h-32 w-32'>
					<Image
						data-aos='fade-up'
						data-aos-duration='900'
						data-aos-delay='300'
						className='rounded-full shadow-grand'
						src={me}
						alt='Me'
						height={720}
						width={720}
					/>
				</div>

				<h1 data-aos='fade-up' data-aos-duration='1400' data-aos-delay='400'>
					Olá! Me chamo Gabriel
				</h1>
				<span
					data-aos='fade-up'
					data-aos-delay='300'
					className='max-w-[900px] text-center text-default-text-strong'
				>
					Na área da programação há 3 anos atuando como desenvolvedor fullstack, mas focado no front-end.
				</span>

				<div
					className='absolute bottom-16 flex h-20 w-full justify-center'
					data-aos='fade-up'
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
			<div className='absolute bottom-0 flex items-center justify-center gap-4 rounded-full bg-contrast px-6 py-1 transition-all duration-300 ease-bounce hover:gap-6 hover:px-10'>
				<Link href={'https://www.linkedin.com/in/gabriel-azevedo-b72b27191/'} target='_blank'>
					<Image src={linkedin} alt='Linkedin' height={24} width={24} />
				</Link>
				<Link
					href={'https://wa.me/5582991437150?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais'}
					target='_blank'
				>
					<Image src={whatsapp} alt='Whatsapp' height={24} width={24} />
				</Link>
				<Link
					target='_blank'
					href={'mailto:gabriel.azevedo_dev@hotmail.com?subject=Olá%2C%20vim%20pelo%20seu%20portfólio!'}
				>
					<Image src={google} alt='Google' height={24} width={24} />
				</Link>
			</div>
		</>
	);
}
