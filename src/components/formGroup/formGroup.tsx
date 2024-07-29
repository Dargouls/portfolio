import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {}
export default function FormGroup({ children, ...props }: FormGroupProps) {
	return (
		<>
			<div className={twMerge(`flex flex-col w-full gap-2`, props.className)}>{children}</div>
		</>
	);
}
