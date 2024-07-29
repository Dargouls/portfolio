import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	register?: any;
}
export default function Textarea({ register, children, ...props }: TextareaProps) {
	return (
		<textarea
			className={twMerge(
				'w-full bg-placeholder rounded-lg px-3 py-2 text-white outline-none focus-visible:ring-2 ring-offset-background focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
				props.className
			)}
			{...register}
			{...props}
		/>
	);
}
