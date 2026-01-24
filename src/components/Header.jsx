const Header = () => {
	return (
		<div className="navbar">
			<nav className="navbar-content">
				<p className="nav-header">Saxon</p>
				<ul className="nav-items">
					<li className="nav-item"><a href="#home">Home</a></li>
					<li className="nav-item"><a href="#about">About</a></li>
					<li className="nav-item"><a href="#projects">Projects</a></li>
					<li className="nav-item"><a href="#contact">Contact</a></li>
					<button className="nav-item-contact">
						Let's Talk
					</button>
				</ul>
			</nav>
		</div>
	);
};

export default Header;