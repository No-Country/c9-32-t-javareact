import { useGlobalData } from '@context/GlobalContext';

function Profile() {
	const { userData } = useGlobalData();
	console.log(userData);
	return (
		<div>
			Perfil
			{userData &&
				Object.entries(userData).map(([entry, key]) => (
					<p key={entry}>
						{entry} - {key}
					</p>
				))}
		</div>
	);
}

export default Profile;
