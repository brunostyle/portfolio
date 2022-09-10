export interface Child {
   children: JSX.Element | JSX.Element[];
}

type TCategorySkill = 'frontend' | 'backend';
type TCategoryEducation = 'technique' | 'courses';

export interface ISkill {
	id: number;
	skill: string;
	color: string;
   icon: JSX.Element;
	category: TCategorySkill;
}

export interface IEducation {
	id: number;
	school: string;
	location: string;
	date: string;
	category: TCategoryEducation;
}

export interface IService {
	id: number;
	title: string;
	description: string;
   icon: JSX.Element;
}

export interface IPortfolio {
	id: number;
	image: string;
	title: string;
	description: string;
   link: string;
}
