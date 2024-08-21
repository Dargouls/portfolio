import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}
export default function Badge({ children, ...props }: BadgeProps) {
	return (
		<>
			<div
				{...props}
				className={twMerge(
					`flex w-max flex-col items-center justify-center gap-2 rounded-full bg-primary-400 px-4 py-2 text-sm tracking-tight`,
					props.className
				)}
			>
				{children}
			</div>
		</>
	);
}
