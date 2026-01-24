const Header = () => {
	return (
		<div className="header">
			<nav className="navbar">
				<p className="nav-header">Saxon</p>
				<ul className="nav-items">
					<li className="nav-item">Home</li>
					<li className="nav-item">About</li>
					<li className="nav-item">Projects</li>
					<li className="nav-item">Contact</li>
					<li className="nav-item">
						<button className="nav-item-contact">
							Let's Talk
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;