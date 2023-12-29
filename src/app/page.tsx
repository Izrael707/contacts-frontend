import Contact from "@/components/contact";
import Link from "next/link";
import { BsPlusCircleFill } from "react-icons/bs";

export default function Home() {
	return (
		<main className="m-2 transition-all duration-300 ease-in-out h-dvh relative">
			<nav className="my-4">
				<Link
					href="/"
					className="text-5xl font-bold antialiased hover:opacity-50"
				>
					Contacts
				</Link>
			</nav>
			<div id="contacts-list">
				<div id="contacts-list-header" className="my-2">
					<h2 className="text-2xl font-bold">A</h2>
				</div>
				<Contact />
			</div>
      <div className=" absolute bottom-2 right-0">
        <button className="text-4xl p-4 bg-blue-600 text-white rounded-full">
          <BsPlusCircleFill /> 
        </button>
      </div>
		</main>
	);
}
