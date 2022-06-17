import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';

const index = () => {
	return (
		<MainLayout>
			<h1>Pricing Page</h1>
			<h1 className="title">
				Ir a{' '}
				<Link href="/">
					<a>Home</a>
				</Link>
			</h1>

			<p className="description">
				Get started by editing <code className="code">pricing/index. js</code>
			</p>
		</MainLayout>
	);
};

export default index;
