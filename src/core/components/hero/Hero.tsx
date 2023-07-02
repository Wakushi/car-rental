import "./Hero.scss"
import blueCar from "../../../assets/images/cars/blue-car.webp"

export default function Hero() {
	return (
		<div className="hero flex--center container--padding">
			<div className="hero__content flex">
				<div className="hero__content__text flex--column fade-in-left">
					<h4>Plan your trip now</h4>
					<h1>
						Save <span className="brand--color">big</span> with our
						car rental
					</h1>
					<p className="description-text">
						Rent the car of your dreams. Unbeatable prices,
						unlimited miles, flexible pick-up options and much more.
					</p>
					<div className="btn-group">
						<button className="basic-btn flex--center">
							Book Ride{" "}
							<i className="fa-solid fa-circle-check"></i>
						</button>
						<button className="basic-btn basic-btn--dark flex--center">
							Learn more{" "}
							<i className="fa-solid fa-angle-right"></i>
						</button>
					</div>
				</div>
				<div className="hero__content__img-container fade-in-top">
					<img src={blueCar} alt="A blue car" />
				</div>
			</div>
		</div>
	)
}
