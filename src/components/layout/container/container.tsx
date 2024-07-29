export default function Container({ children }: { children: React.ReactNode }) {
	return <div className='max-w-[1950px] min-h-screen m-auto'>{children}</div>;
}
