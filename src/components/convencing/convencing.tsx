'use client';
import Lottie from 'react-lottie-player';

import develop from '@/assets/animations/development.json';
import { Database, Figma, Hexagon } from 'lucide-react';

import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Convencing() {
	useEffect(() => {
		aos.init({ duration: 2000 });
	});

	return (
		<>
			<svg width='0' height='0'>
				<defs>
					<linearGradient id='icons' x1='0%' y1='0%' x2='100%' y2='100%'>
						<stop offset='0%' style={{ stopColor: 'var(--color-primary)', stopOpacity: 1 }} />
						<stop offset='100%' style={{ stopColor: 'var(--color-primary-300)', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
			</svg>

			<section
				id='convencing'
				className='flex w-full flex-wrap items-center justify-around bg-section-background p-4 md:px-32 md:py-14'
			>
				<div className='mb-8'>
					<Lottie
						data-aos='fade-up'
						loop={true}
						play={true}
						className='max-w-[375px]'
						animationData={develop}
					/>
					<div data-aos='fade-up' data-aos-duration='1400'>
						<h2 className='text-2xl'>Front-end</h2>
						<p className='max-w-[480px] text-default-text-strong'>
							Meu foco central é o desenvolvimento de interfaces de usuário responsivas e interativas. O
							front-end é o contato que o usuário tem com a aplicação, então ele deve estar em total
							acessibilidade, responsivo e livre de qualquer bug ou empecilho.
						</p>
					</div>
				</div>

				<div className='flex max-w-96 flex-col gap-8'>
					<section
						className='flex flex-col items-center justify-center md:block'
						data-aos='fade-up'
						data-aos-duration='1400'
					>
						<Figma
							style={{
								stroke: 'url(#icons)',
							}}
							size={32}
							className='mb-2'
						/>
						<p className='font-semibold'>UI/UX Design</p>
						<p className='text-default-text-strong'>
							Com um forte compromisso com a experiência do usuário, priorizo sempre o desenvolvimento de
							interfaces simples, intuitivas e elegantes. Em todas as minhas experiências profissionais,
							assumi um papel de destaque na prototipagem e estilização dos projetos.
						</p>
					</section>
					<section
						className='flex flex-col items-center justify-center md:block'
						data-aos='fade-up'
						data-aos-duration='1600'
					>
						<Hexagon
							style={{
								stroke: 'url(#icons)',
							}}
							size={32}
							className='mb-2'
						/>
						<p className='font-semibold'>Back-end</p>
						<p className='text-default-text-strong'>
							Possuo uma sólida experiência com desenvolvimento de APIs Rest com Node.js em diferentes tipos
							de cenários.
						</p>
					</section>
					<section
						className='flex flex-col items-center justify-center md:block'
						data-aos='fade-up'
						data-aos-duration='1800'
					>
						<Database
							size={32}
							style={{
								stroke: 'url(#icons)',
							}}
							className='mb-2'
						/>
						<p className='font-semibold'>Banco de dados</p>
						<p className='text-default-text-strong'>
							Para gerenciamento de dados, considero muito importante uma lógica estruturada e documentada.
							Utilizo sempre alguma ferramenta para desenhar o banco de dados para otimizar pontos importantes
							e documentar. Após isso, a execução é com Postgres.
						</p>
					</section>
				</div>
			</section>
		</>
	);
}
