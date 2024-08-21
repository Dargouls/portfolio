import { ChevronDown, Star } from 'lucide-react';
import { rgba } from 'polished';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from '../badge/badge';

export const Timeline = () => {
	const traineeColor = '#2196f3';
	const companyColor = '#4caf50';
	const iconProgress = <ChevronDown />;
	const iconActual = <Star />;

	return (
		<div className='timeline' id='experience'>
			<VerticalTimeline>
				<VerticalTimelineElement
					visible
					className='vertical-timeline-element--work'
					contentStyle={{ background: traineeColor, color: '#fff' }}
					contentArrowStyle={{ borderRight: `7px solid ${traineeColor}` }}
					date='08/2021 - 12/2021'
					iconStyle={{ background: traineeColor, color: '#fff' }}
					icon={<ChevronDown />}
				>
					<Badge className='bg-zinc-300 shadow-minor' style={{ color: traineeColor }}>
						Zenix tech
					</Badge>
					<h3 className='vertical-timeline-element-title'>UI/UX Designer</h3>
					<h4 className='vertical-timeline-element-subtitle opacity-60'>Estágio remoto</h4>
					<p>
						Exerci principalmente a função de prototipar os projetos da equipe utilizando Figma, eventualmente
						também colocando a mão no projeto. Foi nesse momento que tive contato com as principais
						ferramentas do mercado para o front-end, o Figma e o próprio ReactJs
					</p>
					<div className='mt-2 flex gap-2'>
						<Technology>Figma</Technology>
						<Technology>ReactJs</Technology>
						<Technology>Typescript</Technology>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					visible
					className='vertical-timeline-element--work'
					contentStyle={{ background: traineeColor, color: '#fff' }}
					contentArrowStyle={{ borderRight: `7px solid ${traineeColor}` }}
					date='08/2022 - 07/2023'
					iconStyle={{ background: traineeColor, color: '#fff' }}
					icon={<ChevronDown />}
				>
					<Badge className='bg-zinc-300 shadow-minor' style={{ color: traineeColor }}>
						Prefeitura de Maceió
					</Badge>
					<h3 className='vertical-timeline-element-title'>Desenvolvedor fullstack</h3>
					<h4 className='vertical-timeline-element-subtitle opacity-60'>Estágio remoto</h4>
					<p>
						Aqui foi onde houve minha maior evolução individual. Além de masterizar o que já tinha aprendido,
						encontrei diversas situações que me desafiaram bastante. Tive uma equipe extremamente reduzida,
						mas absolutamente eficaz. Foi entregue sistemas para a população com dashboards para departamentos
						da prefeitura.
					</p>
					<div className='mt-2 flex flex-wrap gap-2'>
						<Technology>Figma</Technology>
						<Technology>ReactJs</Technology>
						<Technology>Bootstrap</Technology>
						<Technology>SASS</Technology>
						<Technology>Javascript</Technology>
						<Technology>NodeJs</Technology>
						<Technology>Postgres</Technology>
						<Technology>AWS S3</Technology>
						<Technology>Azure</Technology>
						<Technology>Google maps API</Technology>
						<Technology>Geocode</Technology>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					visible
					className='vertical-timeline-element--work'
					contentStyle={{ background: companyColor, color: '#fff' }}
					contentArrowStyle={{ borderRight: `7px solid ${companyColor}` }}
					date='08/2022 - 07/2023'
					iconStyle={{ background: companyColor, color: '#fff' }}
					icon={<ChevronDown />}
				>
					<Badge className='bg-zinc-300 shadow-minor' style={{ color: companyColor }}>
						SAS.SGP
					</Badge>
					<h3 className='vertical-timeline-element-title'>Desenvolvedor fullstack</h3>
					<h4 className='vertical-timeline-element-subtitle opacity-60'>Efetivo híbrido</h4>
					<p>
						Pela primeira vez tive a experiência de me envolver em uma equipe maior com foco total no
						desenvolvimento ágil, onde tive um salto no crescimento social e capacidade de resolução de
						problemas. Desenvolvi e participei de diversos projetos internos, B.I, e projetos para clientes,
						com foco total na entrega de valor com qualidade.
					</p>
					<div className='mt-2 flex flex-wrap gap-2'>
						<Technology>Figma</Technology>
						<Technology>ReactJs</Technology>
						<Technology>Typescript</Technology>
						<Technology>Tailwindcss</Technology>
						<Technology>MUI</Technology>
						<Technology>Recharts</Technology>
						<Technology>ApexCharts</Technology>
						<Technology>NodeJs</Technology>
						<Technology>Postgres</Technology>
					</div>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					visible
					iconStyle={{ background: '#5b2fa1', color: '#fff' }}
					icon={<Star fill='#fff' color='#fff' />}
				/>
			</VerticalTimeline>
		</div>
	);
};

const Technology = ({ children }: { children: React.ReactNode }) => {
	return (
		<Badge className='px-2 py-0 shadow-minor' style={{ color: '#fff', backgroundColor: rgba('#fff', 0.3) }}>
			{children}
		</Badge>
	);
};
