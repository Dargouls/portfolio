import { twMerge } from 'tailwind-merge';
import ProjectCard from '../projectCard/projectCard';

import projectImg from '@/assets/images/image 44.png';
import { HTMLAttributes } from 'react';

export default function Projects(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<section className={twMerge(`px-5`, props.className)}>
				<h2 className='mb-4'>Projetos pessoais</h2>

				<div className='flex gap-4 flex-wrap m-auto'>
					<div className='m-auto flex gap-4 flex-wrap '>
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
