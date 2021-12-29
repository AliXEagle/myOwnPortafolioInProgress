import { Curso } from '../Curso/Curso';

const ContenedorCursos = () => {
	return (
		<main className='bg-rose-600 p-4'>
			<div className='grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 p-2'>
				<Curso titulo='Curso 1' />
				<Curso titulo='Curso 2' />
				<Curso titulo='Curso 3' />
				<Curso titulo='Curso 4' />
				<Curso titulo='Curso 5' />
				<Curso titulo='Curso 6' />
				<Curso titulo='Curso 7' />
				<Curso titulo='Curso 8' />
				<Curso titulo='Curso 9' />
				<Curso titulo='Curso 10' />
				<Curso titulo='Curso 11' />
				<Curso titulo='Curso 12' />
			</div>
		</main>
	);
};

export { ContenedorCursos };
