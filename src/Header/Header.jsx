import Typical from 'react-typical';

const Header = () => {
	return (
		<header className='flex justify-center font-mono p-16 items-center  bg-green-600 h-[60vh] md:h-[45vh] '>
			<div>
				<div>
					<h1 className='text-center text-4xl md:text-4xl xl:text-7xl'>Ali Aguila:</h1>
				</div>
				<div>
					<h2 className='text-center max-h-8 text-xl  md:text-2xl xl:text-5xl'>
						<Typical
							loop={Infinity}
							wrapper='b'
							steps={['Developer', 2000, 'Designer', 2000, 'Husband', 2000, 'Musician', 2000]}
						/>
					</h2>
				</div>
			</div>
		</header>
	);
};

export { Header };
