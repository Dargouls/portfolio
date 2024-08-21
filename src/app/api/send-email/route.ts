import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
	const { from, to, subject, phone, name, email, template, message } = await request.json();

	console.log(name, phone, email, message);
	if (!from || !to || !subject || !template || !phone || !name || !message || !email) {
		return NextResponse.json(
			{ error: 'Missing required fields', message: 'Missing required fields' },
			{ status: 400 }
		);
	}
	// Configuração do transporte do nodemailer
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: false, // Use SSL/TLS para o Gmail
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
		tls: { rejectUnauthorized: false },
	});

	// Configuração do e-mail
	const mailOptions = {
		from,
		to,
		subject,
		html: template,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: 'Send e-mail successful' }, { status: 200 });
	} catch (error: any) {
		console.error('Erro ao enviar e-mail:', error);
		return NextResponse.json({ error: 'Failed to send e-mail' }, { status: 400 });
	}
}
