import { ISkill } from '../../helpers/interface';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3Full, DiMongodb } from 'react-icons/di'
import { SiJavascript, SiNextdotjs, SiPostgresql, SiTypescript, SiSocketdotio  } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'

export const skills: ISkill[] = [
	{
		id: 1,
		icon: <AiFillHtml5 />,
		color: 'red',
		skill: 'HTML',
		category: 'frontend',
	},
	{
		id: 2,
		icon: <DiCss3Full />,
		color: 'darkorchid',
		skill: 'CSS',
		category: 'frontend',
	},
	{
		id: 3,
		icon: <SiJavascript />,
		color: 'yellow',
		skill: 'JavaScript',
		category: 'frontend',
	},
	{
		id: 4,
		icon: <SiTypescript />,
		color: '#003674',
		skill: 'TypeScript',
		category: 'frontend',
	},
	{
		id: 5,
		icon: <FaReact />,
		color: '#003674',
		skill: 'React',
		category: 'frontend',
	},
	{
		id: 6,
		icon: <SiNextdotjs />,
		color: '',
		skill: 'Next',
		category: 'frontend',
	},
	{
		id: 7,
		icon: <FaNodeJs />,
		color: 'green',
		skill: 'Node JS',
		category: 'backend',
	},
	{
		id: 8,
		icon: <FaNodeJs />,
		color: 'green',
		skill: 'Express JS',
		category: 'backend',
	},
	{
		id: 9,
		icon: <SiSocketdotio />,
		color: 'white',
		skill: 'Socket io',
		category: 'backend',
	},
	{
		id: 10,
		icon: <SiPostgresql />,
		color: 'darkorchid',
		skill: 'PostgresSQL',
		category: 'backend',
	},
	{
		id: 11,
		icon: <DiMongodb />,
		color: 'green',
		skill: 'MongoDB',
		category: 'backend',
	},
	{
		id: 12,
		icon: <AiFillGithub />,
		color: 'white',
		skill: 'Git',
		category: 'backend',
	},
];
