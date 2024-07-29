import AppBar from '@/components/layout/appbar/appbar';
import Header from '@/components/layout/header/header';
import NavBar from '@/components/layout/navbar/navbar';
import SmoothScroll from '@/components/scrollsmooth/scrollsmooth';

import type { Metadata } from 'next';
import { Sen } from 'next/font/google';

import './globals.css';

const inter = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gabriel Azevedo',
	description: 'Portfólio :D',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body
				className={`relative bg-background text-default-text max-w-[1950px] min-h-screen m-auto ${inter.className}`}
			>
				<Header />
				<main className='h-full overflow-hidden'>
					<SmoothScroll>{children}</SmoothScroll>
				</main>
				<NavBar />
				<AppBar />
			</body>
		</html>
	);
}
