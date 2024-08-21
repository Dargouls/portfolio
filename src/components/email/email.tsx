interface EmailProps {
	name: string;
	phone: string;
	email: string;
	message: string;
}

export default function Email({ name, phone, email, message }: EmailProps) {
	return (
		<>
			<main
				style={{
					display: 'flex',
					height: '100vh',
					width: '100vw',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#60a5fa',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						backgroundColor: '#fff',
						color: '#000',
						padding: '16px',
						maxWidth: '400px',
						borderRadius: '8px',
					}}
				>
					<img src={'https://i.imgur.com/Peh5RdB.png'} alt='logo' width={64} height={64} />
					<p>Novo contato pelo site</p>
					<h2>{name}</h2>
					<div className='mt-4'>
						<div>
							<span style={{ fontWeight: 'bold' }}>Telefone: </span>
							<span>{phone}</span>
						</div>
						<div>
							<span style={{ fontWeight: 'bold' }}>E-mail: </span>
							<span>{email}</span>
						</div>
					</div>

					<div className='mt-4 rounded-md border border-slate-400 p-2'>
						<span style={{ fontWeight: 'bold' }}>Mensagem: </span>
						<span>{message}</span>
					</div>
				</div>
			</main>
		</>
	);
}
