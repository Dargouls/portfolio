import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import NextLink, { LinkProps as LinkPropsBase } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface ProjectCardProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkPropsBase>, LinkPropsBase {
	name: string;
	description: string;
	url?: string;
	image: string;
}

export default function ProjectCard({ name, description, url, image, ...props }: ProjectCardProps) {
	return (
		<>
			<NextLink
				{...props}
				className='group flex w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-xl border border-contrast bg-background-light md:max-w-[300px]'
			>
				<div id='image-container' className='w-full overflow-hidden'>
					<Image
						className='h-40 w-full blur-[2px] brightness-50 transition-all duration-700 group-hover:scale-110 group-hover:blur-0 group-hover:brightness-100 group-active:scale-100'
						src={image}
						alt={name}
						height={200}
						width={200}
					/>
				</div>
				<div className='flex w-full flex-col justify-between px-2 pb-4'>
					<h3 className='flex w-full justify-between'>
						{name}
						{props.target && <SquareArrowOutUpRight size={20} />}
					</h3>
					<p className='text-slate-400'>{description}</p>
				</div>
			</NextLink>
		</>
	);
}
