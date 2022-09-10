import { IService } from '../../helpers/interface';
import { GoDeviceMobile } from 'react-icons/go'
import { MdDesignServices } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { CgPerformance } from 'react-icons/cg'
import { RiCodeSSlashLine } from 'react-icons/ri'

export const services: IService[] = [
	{
		id: 1,
		icon: <GoDeviceMobile />,
		title: 'Responsive design',
		description: 'Your site will display correctly on any device, including desktop computers, tablets, and mobile phones.',
	},
	{
		id: 2,
		icon: <MdDesignServices />,
		title: 'Creative design',
		description: 'Good, attractive web design helps you keep your potential customers on your site, which is the digital face of your business.',
	},
	{
		id: 3,
		icon: <AiFillLike />,
		title: 'Social media integration',
		description: 'There are many social platforms, and you should promote your presence on them on your website.',
	},
	{
		id: 4,
		icon: <FaSearch />,
		title: 'SEO',
		description: 'I will optimize your site with a smart search engine optimization strategy to generate leads.',
	},
	{
		id: 5,
		icon: <CgPerformance />,
		title: 'Good performance',
		description: 'Retaining users is essential to improve conversions. High-performing sites attract and retain users',
	},
	{
		id: 6,
		icon: <RiCodeSSlashLine />,
		title: 'Development',
		description: 'I know the importance of web design and I can help you create a website that you like.',
	},
];
