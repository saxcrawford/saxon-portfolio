import "./App.css";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import About from "./components/About.jsx";
import {useEffect, useRef} from "react";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	const lenis = useRef(null);
	useEffect(() => {
		lenis.current = new Lenis({
			duration: 0.6,
			easing: (t) => 1 - Math.pow(1 - t, 3),
			smooth: true,
			smoothTouch: true,
		});

		const animate = (time) => {
			lenis.current.raf(time);
			requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);

		return () => {
			lenis.current.destroy();
		};
	}, []);
	return (
		<div className="app">
			<Header/>
			<HomePage/>
			<About/>
			<Projects/>
			<Contact/>
			<Footer/>
		</div>
	);
};

export default App;
