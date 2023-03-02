import { updateUserImage } from '@/api/user';
import Button from '@/components/shared/Button';
import { useGlobalData } from '@context/GlobalContext';
import { useEffect, useState } from 'react';

interface profileImgState {
	file: any;
	name: string;
	url: string | undefined;
}

function EditUserImg() {
	const { userData, userImg, setUserImg } = useGlobalData();
	const [profileImg, setProfileImg] = useState<profileImgState>({
		file: null,
		name: '',
		url: userImg?.url,
	});

	useEffect(() => {
		setProfileImg({ ...profileImg, url: userImg?.url });
	}, [userImg]);

	const handleImgChange = (e: any) => {
		setProfileImg({
			file: e.target.files[0],
			name: e.target.files[0].name,
			url: URL.createObjectURL(e.target.files[0]),
		});
		updateProfilePhoto(e.target.files[0]);
	};

	async function updateProfilePhoto(img: any) {
		try {
			await updateUserImage({ img, id: userData?.id });
			setUserImg({ url: URL.createObjectURL(img), file: img });
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div className="w-1/2 text-center">
			<img
				src={
					Object.entries(profileImg).length > 0
						? profileImg.url
						: 'https://via.placeholder.com/150'
				}
				alt="user Img"
				className="mx-auto rounded-full w-60 h-60 object-cover mb-5"
			/>

			<label htmlFor="file-upload" className="custom-file-upload">
				<Button variant="outlined">Subir Imagen</Button>
			</label>
			<input
				id="file-upload"
				type="file"
				accept="image/png, image/jpeg"
				className="hidden"
				onChange={handleImgChange}
			/>
		</div>
	);
}

export default EditUserImg;
