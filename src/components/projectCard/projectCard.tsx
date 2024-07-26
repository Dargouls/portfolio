import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
	name: string;
	description: string;
	url: string;
	image: string;
}

export default function ProjectCard({ name, description, url, image }: ProjectCardProps) {
	return (
		<>
			<div className='group flex flex-col gap-2 md:max-w-[300px] bg-background-light rounded-xl p-2 cursor-pointer'>
				<div id='image-container' className='w-full overflow-hidden rounded-lg'>
					<Image
						className='group-hover:scale-110 w-full brightness-50 blur-[2px] transition-all duration-700'
						src={image}
						alt={name}
						height={200}
						width={200}
					/>
				</div>
				<div className='flex justify-between'>
					<div>
						<h3 className='flex justify-between'>
							{name}
							<SquareArrowOutUpRight size={20} />
						</h3>
						<p className='text-slate-400'>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
}
