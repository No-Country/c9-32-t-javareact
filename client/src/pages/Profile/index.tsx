import EditUserData from './EditUserData';
import EditUserImg from './EditUserImg';

function Profile() {
	return (
		<section className="my-12">
			<h3 className="heading3">Perfil</h3>
			<div className="flex  justify-between gap-5 mt-24">
				<EditUserData />
				<EditUserImg />
			</div>
		</section>
	);
}

export default Profile;
