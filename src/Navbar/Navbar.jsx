/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const activateMenue = () => {
		if (!isActive) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	return (
		<nav className='bg-green-300'>
			<div className='max-w-5xl mx-auto xl:max-w-7xl'>
				<div className='flex justify-between '>
					<div className='flex space-x-4'>
						{/*logo*/}
						<div>
							<a href='#' className='flex items-center py-5 px-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 mr-3'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
									/>
								</svg>
								<span className='font-bold'>Ali Web</span>
							</a>
						</div>
						{/*Primary Navbar*/}
						<div className='hidden md:flex items-center space-x-1'>
							<a href='#' className='py-5 px-3 hover:text-gray-400'>
								About
							</a>
							<a href='#' className='py-5 px-3 hover:text-gray-400'>
								Projects
							</a>
						</div>
					</div>
					{/*Secondary Navbar*/}
					<div className='hidden md:flex items-center space-x-1 text-xl'>
						<input type='text' className='h-7 rounded-2xl px-3' />
						<a
							target='_blank'
							href='https://www.linkedin.com/in/francisco-javier-ali-cruz-aguila-00830319a/'
							className='py-5 px-3'
							rel='noreferrer'
						>
							<FaLinkedin />
						</a>
						<a
							target='_blank'
							href='https://github.com/AliXEagle'
							className='py-2 px-3 bg-green-400 hover:bg-green-200 text-green-900 hover:text-green-700  rounded-3xl transition duration-300'
							rel='noreferrer'
						>
							<FaGithub />
						</a>
					</div>
					{/*Burguer menue*/}
					<div className='md:hidden flex items-center'>
						<button onClick={activateMenue}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/*mobile menue*/}
			<div
				className={!isActive ? 'hidden items-center' : 'block text-center items-center md:hidden'}
			>
				<a href='#' className='block py-2 px-4 text-sm hover:bg-green-400 '>
					Features
				</a>
				<a href='#' className='block py-2 px-4 text-sm hover:bg-green-400'>
					Pricing
				</a>
			</div>
		</nav>
	);
};

export { Navbar };
