import logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className='mt-64'>
				<svg className='' viewBox='0 0 1440 100' version='1.1' xmlns='http://www.w3.org/2000/svg'>
					<path
						fill='#20232D'
						d='M0,30L80,26.7C160,23,320,17,480,23.3C640,30,800,50,960,48.3C1120,47,1280,23,1440,11.7C1600,0,1760,0,1920,6.7C2080,13,2240,27,2400,41.7C2560,57,2720,73,2880,76.7C3040,80,3200,70,3360,56.7C3520,43,3680,27,3840,18.3C4000,10,4160,10,4320,13.3C4480,17,4640,23,4800,31.7C4960,40,5120,50,5280,60C5440,70,5600,80,5760,80C5920,80,6080,70,6240,60C6400,50,6560,40,6720,30C6880,20,7040,10,7200,13.3C7360,17,7520,33,7680,46.7C7840,60,8000,70,8160,66.7C8320,63,8480,47,8640,48.3C8800,50,8960,70,9120,71.7C9280,73,9440,57,9600,56.7C9760,57,9920,73,10080,71.7C10240,70,10400,50,10560,35C10720,20,10880,10,11040,10C11200,10,11360,20,11440,25L11520,30L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z'
					></path>
				</svg>

				<div id='footer-content' className='flex flex-col gap-10 bg-background-light'>
					<div className='flex flex-wrap gap-10 w-full justify-evenly items-center'>
						<Image src={logo} alt='logo' />

						<div className='flex flex-wrap gap-4 justify-center md:justify-start'>
							<section className='flex flex-col gap-4 p-8'>
								<h3>Serviços</h3>

								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Dashboards
								</Link>
								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Landing Pages
								</Link>
								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Sistemas
								</Link>
							</section>
							<section className='flex flex-col gap-4 p-8'>
								<h3>Services</h3>

								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Dashboards
								</Link>
								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Landing Pages
								</Link>
								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Sistemas
								</Link>
							</section>
							<section className='flex flex-col gap-4 p-8'>
								<h3>Services</h3>

								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Dashboards
								</Link>
								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Landing Pages
								</Link>
								<Link className='underline text-default-text-strong hover:text-default-text' href='/'>
									Sistemas
								</Link>
							</section>
						</div>
					</div>
					<hr className='border-slate-700' />
					Termos e condições
				</div>
			</footer>
		</>
	);
}
