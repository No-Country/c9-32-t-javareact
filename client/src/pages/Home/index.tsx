import ServicesCarousel from '../Landing/Services/ServicesCarousel';
import MyReviews from './MyReviews';

function HomePage() {
	return (
		<div className='mt-20'>
		<ServicesCarousel/>
			<MyReviews />
		</div>
	);
}

export default HomePage;
