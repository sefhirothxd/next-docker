import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
import DarkLayout from '../components/layouts/DarkLayout';
const about = () => {
	return (
		<>
			<h1>Pagina About </h1>
			<h1 className="title">
				Ir a{' '}
				<Link href="/">
					<a>Home</a>
				</Link>
			</h1>
		</>
	);
};
about.getLayout = (page: JSX.Element) => {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
export default about;
