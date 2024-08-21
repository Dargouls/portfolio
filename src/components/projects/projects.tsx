import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';
import ProjectCard from '../projectCard/projectCard';

import countplus from '@/assets/images/count-plus.png';
import projectImg from '@/assets/images/developing.png';

export default function Projects(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<section className={twMerge(`px-5`, props.className)}>
				<h2 className='mb-4'>Projetos pessoais</h2>

				<div className='m-auto flex flex-wrap gap-4'>
					<div className='m-auto flex flex-wrap gap-4'>
						<ProjectCard
							name='Count plus'
							description='Contador de horas de atividades e mesclá-las em uma atividade maior.'
							url='https:/count-plus.vercel.app/'
							image={countplus.src}
						/>
						<ProjectCard
							name='Em desenvolvimento...'
							description='Detenha a contagem, tenho que fazer uns ajustes!'
							image={projectImg.src}
						/>
						<ProjectCard
							name='Em desenvolvimento...'
							description='Detenha a contagem, tenho que fazer uns ajustes!'
							image={projectImg.src}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
