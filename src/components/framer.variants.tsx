import { motion } from 'framer-motion';
import { Child } from '../helpers/interface';

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			type: 'ease',
			delayChildren: 0,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

export const VariantsContainer = ({ children }: Child) => (
	<motion.div variants={container} initial="hidden" animate="visible">
		{children}
	</motion.div>
);

export const VariantsItem = ({ children }: Child) => <motion.div variants={item}>{children}</motion.div>;
