import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaNpm,
	FaGithub,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';

const About = () => {
	return (
		<section className='flex h-[100%] bg-yellow-300 font-mono'>
			<div>
				<h3 className='flex mt-8 ml-4 font-bold text-2xl md:text-6xl md:mt-24 md:ml-24'>
					Mi background:
				</h3>

				<p className=' px-6 text-[1em] md:mx-28 mt-14 md:text-2xl text-justify'>
					Hi, welcome to my page! as you can see, my name is Ali. I am a Web Developer from Mexico
					City. I lived in different places and worked in different languages with people from all
					around the world, giving me a wider range of perspective. I try to incorporate in my work
					a not only functional experience but also a whole experience of use.
				</p>
				<div className='flex justify-around mt-12 text-4xl lg:text-6xl'>
					<SiMongodb className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<SiExpress className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<FaReact className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<FaNodeJs className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
				</div>
				<div className='flex justify-around my-12 text-2xl lg:text-4xl'>
					<FaHtml5 className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<FaCss3Alt className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<SiTailwindcss className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<FaBootstrap className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<FaNpm className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
					<FaGithub className='hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200' />
				</div>
			</div>
		</section>
	);
};

export { About };
