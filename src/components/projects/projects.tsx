import { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';
import ProjectCard from '../projectCard/projectCard';

import countplus from '@/assets/images/count-plus.png';
import projectImg from '@/assets/images/image 44.png';

export default function Projects(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<section className={twMerge(`px-5`, props.className)}>
				<h2 className='mb-4'>Projetos pessoais</h2>

				<div className='flex gap-4 flex-wrap m-auto'>
					<div className='m-auto flex gap-4 flex-wrap '>
						<ProjectCard
							name='Count plus'
							description='Contador de horas de atividades e mesclá-las em uma atividade maior.'
							url='https:/count-plus.vercel.app/'
							image={countplus.src}
						/>
						<ProjectCard
							name='bookler'
							description='Livraria com uma interface simples e de faça para que o usuário possa adicionar livros, edita-los e remover-os.'
							url='https://bookler.vercel.app/'
							image={projectImg.src}
						/>
						<ProjectCard
							name='bookler'
							description='Livraria com uma interface simples e de faça para que o usuário possa adicionar livros, edita-los e remover-os.'
							url='https://bookler.vercel.app/'
							image={projectImg.src}
						/>
						<ProjectCard
							name='bookler'
							description='Livraria com uma interface simples e de faça para que o usuário possa adicionar livros, edita-los e remover-os.'
							url='https://bookler.vercel.app/'
							image={projectImg.src}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
