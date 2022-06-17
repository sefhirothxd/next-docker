import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';
const contact = () => {
	return (
		<MainLayout>
			<h1>Pricing Contact</h1>
			<h1 className="title">
				Ir a{' '}
				<Link href="/">
					<a>Home</a>
				</Link>
			</h1>
		</MainLayout>
	);
};

export default contact;
