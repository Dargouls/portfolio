import AppBar from '@/components/layout/appbar/appbar';
import Header from '@/components/layout/header/header';
import NavBar from '@/components/layout/navbar/navbar';
import SmoothScroll from '@/components/scrollsmooth/scrollsmooth';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';
import { Sen } from 'next/font/google';

import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Sen({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Portfólio - Gabriel Azevedo | Desenvolvedor web',
	description: 'Desenvolvedor web front-end. Trabalho principalmente com o ecosistema react.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body
				className={`relative m-auto min-h-screen max-w-[1950px] bg-background text-default-text ${inter.className}`}
			>
				<Header />
				<Toaster
					position='bottom-right'
					toastOptions={{
						style: {
							borderRadius: '999px',
						},
					}}
				/>
				<main className='h-full overflow-hidden'>
					<SmoothScroll>{children}</SmoothScroll>
				</main>
				<NavBar />
				<AppBar />

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
