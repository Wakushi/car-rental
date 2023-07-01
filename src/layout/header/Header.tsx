import { useState } from "react"
import logo from "../../assets/images/car-rental-logo.png"
import "./Header.scss"

export default function Header() {
	const [showSideNav, setShowSideNav] = useState(false)

	function toggleSideNav(): void {
		setShowSideNav((prevSideNav) => (prevSideNav = !prevSideNav))
	}

	const navStyle = {
		transform: showSideNav ? "translateX(100%)" : "translateX(0)"
	}

	return (
		<header className="flex--between">
			<div className="header__logo">
				<div className="logo-container">
					<img src={logo} alt="A blue car logo" />
				</div>
			</div>
			<i className="fa-solid fa-bars" onClick={toggleSideNav}></i>
			<nav className="header__mobile-nav flex--center" style={navStyle}>
				<i className="fa-solid fa-xmark" onClick={toggleSideNav}></i>
				<ul className="flex--column">
					<li>
						<a href="#" className="header__nav__link">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							About
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Vehicle Models
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Testimonials
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Our Team
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Contact
						</a>
					</li>
					<div className="btn-group">
						<li>
							<a href="#" className="basic-btn basic-btn--dark">
								Sign In
							</a>
						</li>
						<li>
							<a href="#" className="basic-btn">
								Register
							</a>
						</li>
					</div>
				</ul>
			</nav>
			<nav className="header__nav">
				<ul className="flex--between">
					<li>
						<a href="#" className="header__nav__link">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							About
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Vehicle Models
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Testimonials
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Our Team
						</a>
					</li>
					<li>
						<a href="#" className="header__nav__link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<nav className="header__nav">
				<ul className="flex--between">
					<li>
						<a href="#" className="hover-to-white">
							Sign In
						</a>
					</li>
					<li>
						<a href="#" className="basic-btn">
							Register
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
