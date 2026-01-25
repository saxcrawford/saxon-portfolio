import corbin from "../assets/corbin-old.jpg";
import expense from "../assets/expense.jpg";
import weather from "../assets/weather.jpg";

const projectData = [
	{
		id: 0,
		image: corbin,
		title: "Corbin Activity Hub",
		description: "This project shows a website that allows users to view activities in Corbin, KY. " +
			"It utilizes Next.js, TypeScript, and Tailwind CSS for the frontend and Spring Boot for the " +
			"backend with OpenWeather API for weather data.",
		techStack: ["Next.js", "TypeScript", "SpringBoot"],
		attribution: "Photo by Derek1252",
		attributionLink: "https://commons.wikimedia.org/w/index.php?curid=25097468",
		linkToProject: "https://www.corbinactivityhub.com"
	},
	{
		id: 1,
		image: weather,
		title: "Weather Website",
		description: "This project demonstrates a weather website made using OpenWeather API. " +
			"It uses HTML, CSS, and JavaScript where a user enters a city and it pulls information from " +
			"the API to display weather conditions, humidity, temperature, etc.",
		techStack: ["HTML/CSS", "JavaScript", "OpenWeather API"],
		attribution: "Photo by Daoudi Aissa",
		attributionLink: "https://unsplash.com/@dannyeve?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
		linkToProject: "https://github.com/saxcrawford/just-the-weather/"
	},
	{
		id: 2,
		image: expense,
		title: "Expense Tracker",
		description: "This project showcases an expense tracking website built with Flask and uses MySQL " +
			"that allows users to manage their finances by adding, viewing, and deleting transactions. " +
			"Users can register, log in, and categorize their transactions as income or expenses.",
		techStack: ["Flask", "MySQL"],
		attribution: "Photo by Kenny Eliason",
		attributionLink: "https://unsplash.com/@neonbrand?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
		linkToProject: "https://github.com/saxcrawford/expense-tracker"
	}
];

export default projectData;