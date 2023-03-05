import ServicesCarousel from '../Landing/Services/ServicesCarousel';
import MyOrders from './MyOrders';
import Services from './Services';

function HomePage() {
	return (
		<div className="mt-10">
			<Services />
			<MyOrders />
		</div>
	);
}

export default HomePage;
