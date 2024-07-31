import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	name: string;
	description: string;
	url: string;
	image: string;
}

export default function ProjectCard({ name, description, url, image }: ProjectCardProps) {
	return (
		<>
			<Link
				href={url}
				target='_blank'
				className='group flex flex-col gap-4 md:max-w-[300px] w-full bg-background-light border border-contrast rounded-xl overflow-hidden cursor-pointer'
			>
				<div id='image-container' className='w-full overflow-hidden'>
					<Image
						className='group-hover:scale-110 group-active:scale-100 w-full h-40 brightness-50 blur-[2px] group-hover:blur-0 group-hover:brightness-100 transition-all duration-700'
						src={image}
						alt={name}
						height={200}
						width={200}
					/>
				</div>
				<div className='flex justify-between px-2 pb-2'>
					<div>
						<h3 className='flex justify-between'>
							{name}
							<SquareArrowOutUpRight size={20} />
						</h3>
						<p className='text-slate-400'>{description}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
