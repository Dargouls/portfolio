import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import CircularProgress from '../CircularProgress/circularProgress';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
}

export default function Button({ children, loading, ...props }: ButtonProps) {
	return (
		<>
			<button
				className={twMerge(
					`flex w-full items-center justify-center gap-2 rounded-lg bg-primary p-3 font-bold tracking-wider ${!loading && 'hover:opacity-80 active:opacity-100'}`,
					loading && 'cursor-not-allowed opacity-50',
					props.className
				)}
				disabled={loading}
			>
				{children}
				{loading && <CircularProgress />}
			</button>
		</>
	);
}
