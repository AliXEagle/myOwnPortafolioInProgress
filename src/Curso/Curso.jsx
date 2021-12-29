const Curso = ({ titulo }) => {
	return (
		<>
			<div className='bg-rose-500 rounded-lg h-auto p-4 text-justify'>
				<div className='text-2xl mb-4'>{titulo}</div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi minima necessitatibus
					repellat repudiandae nam quibusdam rerum dolorem consequuntur officia dignissimos.
				</p>
			</div>
		</>
	);
};

export { Curso };
