import { motion } from 'framer-motion';
import { Child } from '../helpers/interface';

const containerVariants = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'easeInOut',
		},
	}
};

export const Push = ({ children }: Child) => (
	<motion.div variants={containerVariants} initial="hidden" animate="visible" >
		{children}
	</motion.div>
);
