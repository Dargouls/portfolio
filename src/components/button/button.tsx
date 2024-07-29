import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}
export default function Button({ children, ...props }: ButtonProps) {
	return (
		<>
			<button
				className={twMerge(
					`flex justify-center items-center bg-primary w-full font-bold tracking-wider gap-2 rounded-lg p-3 hover:opacity-80 active:opacity-100`,
					props.className
				)}
			>
				{children}
			</button>
		</>
	);
}
