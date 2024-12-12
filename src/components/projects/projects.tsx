import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';
import ProjectCard from '../projectCard/projectCard';

import chatLlama from '@/assets/images/chat-llama.png';
import countplus from '@/assets/images/count-plus.png';

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
							url='https://count-plus.vercel.app/'
							image={countplus.src}
						/>
						<ProjectCard
							name='Chat Llama'
							description='Chat bot com inteligência artificial usando a nova Llama 3'
							url='https://chatbot-llama-plum.vercel.app'
							image={chatLlama.src}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
