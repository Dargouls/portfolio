import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
	register?: any;
	placeholder?: string;
	type: string;
}
export default function TextField({ placeholder, register, id, ...props }: TextFieldProps) {
	return (
		<>
			<input
				className={twMerge(
					`w-full bg-placeholder outline-none rounded-lg px-3 py-3 text-white focus-visible:ring-2 ring-offset-background focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all`,
					props.className
				)}
				type={props.type}
				id={id}
				placeholder={placeholder}
				{...register}
			/>
		</>
	);
}
