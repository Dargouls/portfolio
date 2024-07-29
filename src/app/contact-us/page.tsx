'use client';

import TextField from '@/components/textField/textField';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';

import logo from '@/assets/brand/logo.svg';
import Button from '@/components/button/button';
import FormGroup from '@/components/formGroup/formGroup';
import Textarea from '@/components/textarea/textarea';

export default function ContactUs() {
	const { watch, register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log('submitted', watch());
	};

	return (
		<>
			<div className='min-h-screen flex justify-center items-center bg-background-light'>
				<form
					className=' bg-background flex flex-col items-center rounded-2xl shadow-grand gap-8 p-4 z-10'
					onSubmit={handleSubmit(onSubmit)}
					autoComplete='off'
				>
					<Image src={logo} alt='logo' width={64} />

					<div className='flex flex-col w-full gap-4'>
						<div className='flex gap-4'>
							<FormGroup>
								<label htmlFor='name'>Name</label>
								<TextField type='text' register={register('name')} id='name' placeholder='Seu nome' />
							</FormGroup>
							<FormGroup className='w-[230px]'>
								<label htmlFor='number'>Número</label>
								<TextField
									type='tel'
									register={register('number')}
									placeholder='(12) 91122 9099'
									id='number'
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

						<Button className='bg-contrast text-background'>Contate-me</Button>
					</div>
				</form>
			</div>
		</>
	);
}
