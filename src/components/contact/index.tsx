import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";

export default function Contact() {
	return (
		<div id="contact" className=" flex gap-3 m-2">
			<Image
				src="/image.jpg"
				className="rounded-full"
				height={100}
				width={60}
				alt="profile picture"
			/>
			<div className=" grow">
				<p className="text-lg font-bold">Alexander Philip</p>
				<p className="text-lg">09033889933</p>
			</div>
			<div className=" flex items-center">
				<FaPhone className="text-5xl p-3 bg-slate-200 rounded-s-2xl" />
				<TbMessageCircle className="text-5xl p-3 bg-slate-200 rounded-e-2xl" />
			</div>
		</div>
	);
}
