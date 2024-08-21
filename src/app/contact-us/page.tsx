'use client';

import TextField from '@/components/textField/textField';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';

import logo from '@/assets/brand/logo.svg';
import Button from '@/components/button/button';
import Email from '@/components/email/email';
import FormGroup from '@/components/formGroup/formGroup';
import Textarea from '@/components/textarea/textarea';
import { useState } from 'react';
import { renderToString } from 'react-dom/server';
import toast from 'react-hot-toast';

export default function ContactUs() {
	const { watch, register, handleSubmit } = useForm();
	const [sending, setSending] = useState(false);

	const handleDebug = () => {
		console.log('name', watch('message'));
	};
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setSending(true);
		fetch('/api/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				to: 'gabriel.azevedo_dev@hotmail.com',
				from: 'gabriel.azevedo_dev@hotmail.com',
				subject: 'Contato pelo site',
				name: watch('name'),
				phone: watch('phone'),
				email: watch('email'),
				message: watch('message'),
				template: renderToString(
					<Email
						name={watch('name')}
						phone={watch('phone')}
						email={watch('email')}
						message={watch('message')}
					/>
				),
			}),
		})
			.then((e) => {
				console.log(e);
				toast.success('E-mail enviado com sucesso!');
				setSending(false);
			})
			.catch(() => {
				toast.error('Erro ao enviar e-mail');
				setSending(false);
			});
	};

	return (
		<>
			<div className='flex min-h-screen items-center justify-center bg-background-light p-4'>
				<form
					className='z-10 flex flex-col items-center gap-8 rounded-2xl bg-background p-4 shadow-grand'
					onSubmit={handleSubmit(onSubmit)}
					autoComplete='off'
				>
					<Image src={logo} alt='logo' width={64} />
					<div className='flex w-full flex-col gap-4'>
						<div className='flex gap-4'>
							<FormGroup>
								<label htmlFor='name'>Name</label>
								<TextField type='text' register={register('name')} id='name' placeholder='Seu nome' />
							</FormGroup>
							<FormGroup className='w-[230px]'>
								<label htmlFor='number'>Número</label>
								<TextField
									type='tel'
									register={register('phone')}
									placeholder='(12) 91122 9099'
									id='number'
									mask='(99) 99999-9999'
								/>
							</FormGroup>
						</div>

						<FormGroup>
							<label htmlFor='email'>E-mail</label>
							<TextField
								type='email'
								register={register('email')}
								id='email'
								placeholder='Seu melhor e-mail'
							/>
						</FormGroup>
						<FormGroup>
							<label htmlFor='message'>Mensagem</label>
							<Textarea register={register('message')} id='message' placeholder='Escreva sua mensagem' />
						</FormGroup>

						<Button className='bg-contrast text-background' loading={sending}>
							Contate-me
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
