import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';
import ProjectCard from '../projectCard/projectCard';

import artiux from '@/assets/images/artiux.png';
import chatLlama from '@/assets/images/chat-llama.png';
import countplus from '@/assets/images/count-plus.png';
import guerreiros from '@/assets/images/guerreiros.png';
import iris from '@/assets/images/iris-analyzer.jpeg';

export default function Projects(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<section className={twMerge(`px-5`, props.className)}>
				<h2 className='mb-4'>Projetos pessoais</h2>

				<div className='m-auto flex flex-wrap gap-4'>
					<div className='m-auto flex flex-wrap gap-4'>
						<ProjectCard
							name='Timer de tarefas'
							description='Gerenciador rápido de tempo em tarefas'
							href='https://count-plus.vercel.app/'
							target='_blank'
							image={countplus.src}
						/>
						<ProjectCard
							name='Superminichat'
							description='Chat bot com inteligência artificial baseado em Gemini'
							href='/superminichat' // Conectado ao microfrontend na infra
							image={chatLlama.src}
						/>
						<ProjectCard
							name='Analizador ocular'
							description='Analizador e gerador de laudos oculares com inteligência artificial'
							href='https://iris-next-ten.vercel.app'
							target='_blank'
							image={iris.src}
						/>
						<ProjectCard
							name='Guerreiros Naventura'
							description='Institucional para a organização Guerreiros Naventura / Corrida e Trekking'
							href='https://www.orientextreme.com.br/'
							target='_blank'
							image={guerreiros.src}
						/>
						<ProjectCard
							name='artIux Lab'
							description='Biblioteca código aberto de componentes focada em animações e efeitos visuais'
							href='https://artiux.vercel.app/'
							target='_blank'
							image={artiux.src}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
