import { useState } from 'react';
import images from '../utils/data';

export default function Captcha({ onChange }) {
	const [clicked, setClicked] = useState(false);
	const [imageData, setImageData] = useState(() => {
		return images.map((image) => ({
			...image,
			selected: false,
		}));
	});
	const [checked, setChecked] = useState(false);

	const handleCheckBoxClick = (e) => {
		e.preventDefault();
		setClicked(true);
	};

	const handleClose = (e) => {
		setClicked(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let valid = true;
		imageData.forEach((image) => {
			if (image.selected && image.value !== 'boat') {
				valid = false;
			}
		});
		if (valid) {
      onChange(true);
			setChecked(true);
			setClicked(false);
		}
	};

	const handleSelect = (index) => {
		const newImageData = imageData.map((image, i) => {
			if (i === index) {
				return {
					...image,
					selected: !image.selected,
				};
			}
			return image;
		});
		setImageData(newImageData);
	};

	return (
		<div className='relative'>
			<div className='text-xl'>
				<input
					type='checkbox'
					checked={checked}
					onClick={handleCheckBoxClick}
				/>
				I am a human
			</div>
			{clicked && (
				<form
					onSubmit={handleSubmit}
					className='absolute h-[460px] w-96 border-2 p-4'
				>
					<div className='w-full flex justify-end items-center'>
						<button onClick={handleClose} className='cursor-pointers'>
							X
						</button>
					</div>
					<div>Select images with boat on it.</div>
					<div className=' mt-4 w-full flex flex-wrap justify-around items-center gap-2'>
						{imageData.map((image, index) => (
							<img
								key={index + 'captcha-image'}
								onClick={() => handleSelect(index)}
								className={`w-[110px] h-24 border-4 transition-all ease-in-out ${
									image?.selected ? 'border-red-500' : 'border-white'
								}`}
								src={image.src}
								alt={image.value}
							/>
						))}
					</div>
					<div className='flex justify-end itmes-center'>
						<button
							type='submit'
							className='py-2 my-4 mx-1 px-6 rounded-full bg-red-500 text-white'
						>
							Submit
						</button>
					</div>
				</form>
			)}
		</div>
	);
}
