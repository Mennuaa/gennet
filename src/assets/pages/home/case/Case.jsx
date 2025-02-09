import React from 'react'
import CaseItem from './CaseItem'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'
const Case = ({ cars, visibleProducts, showMore }) => {
	return (
		<div>
			<div className='home-project'>
				<motion.h2
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='home-project__title'
				>
					Наши кейсы
				</motion.h2>
				<motion.p
					variants={fadeIn('right', 0.2)}
					initial='hidden'
					whileInView={'show'}
					viewport={{ once: false, amount: 0.7 }}
					className='home-project__subtitle'
				>
					Готовы показать все то, что мы делали раньше
				</motion.p>
				<div className='home-case__flex'>
					{cars.slice(0, visibleProducts).map((car, index) => (
						<CaseItem
							key={car.id}
							name={car.name}
							caseType={car.caseType}
							url={car.image}
						/>
					))}
				</div>

				{visibleProducts < cars.length && (
					<motion.button
						variants={fadeIn('top', 0.3)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className='btn'
						onClick={showMore}
					>
						Еще
					</motion.button>
				)}
			</div>
		</div>
	)
}

export default Case
