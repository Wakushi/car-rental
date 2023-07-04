// STYLES
import "./Home.scss"
// ASSETS
import heroBackground from "../../assets/images/others/hero-bg.png"
import tripleCarImg from "../../assets/images/cars/three-cars.webp"
import driveImg from "../../assets/images/others/driving.webp"
import pricingImg from "../../assets/images/others/budget.webp"
import chargesImg from "../../assets/images/others/save-money.webp"
// COMPONENTS
import BookingForm from "../../shared/components/booking-form/BookingForm"
import Hero from "../../core/components/hero/Hero"
import RentalPlan from "../../shared/components/rental-plan/RentalPlan"
import VehiclePicker from "../../shared/components/vehicle-picker/VehiclePicker"

export default function HomePage() {
	return (
		<div className="home-container flex--column">
			<div className="home__bg-img-container">
				<img
					src={heroBackground}
					alt="A blue blob with a city drawing"
				/>
			</div>
			<Hero />
			<BookingForm />
			<RentalPlan />
			<VehiclePicker />
			<section className="home-banner flex--center flex--column">
				<h2>Save big with our cheap car rental!</h2>
				<p>
					Top Airports. Local Suppliers.{" "}
					<span className="brand--color">24/7</span> Support.
				</p>
			</section>
			<section className="rental-details flex--column">
				<div className="image-container">
					<img src={tripleCarImg} alt="Three cars" />
				</div>
				<div className="rental-details__content flex--around">
					<div className="rental-details__left flex--column">
						<h4>Why Choose Us</h4>
						<h2>Best valued deals you will ever find</h2>
						<p className="description-text">
							Discover the best deals you'll ever find with our
							unbeatable offers. We're dedicated to providing you
							with the best value for your money, so you can enjoy
							top-quality services and products without breaking
							the bank. Our deals are designed to give you the
							ultimate renting experience, so don't miss out on
							your chance to save big.
						</p>
						<button className="basic-btn">Find Details</button>
					</div>
					<div className="rental-details__right flex--column">
						<div className="flex">
							<div className="rental-details__right__logo">
								<img src={driveImg} />
							</div>
							<div className="rental-details__right__text">
								<h4>Cross Country Drive</h4>
								<p className="description-text">
									Take your driving experience to the next
									level with our top-notch vehicles for your
									cross-country adventures.
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="rental-details__right__logo">
								<img src={pricingImg} />
							</div>
							<div className="rental-details__right__text">
								<h4>All Inclusive Pricing</h4>
								<p className="description-text">
									Get everything you need in one convenient,
									transparent price with our all-inclusive
									pricing policy.
								</p>
							</div>
						</div>
						<div className="flex">
							<div className="rental-details__right__logo">
								<img src={chargesImg} />
							</div>
							<div className="rental-details__right__text">
								<h4>No Hidden Charges</h4>
								<p className="description-text">
									Enjoy peace of mind with our no hidden
									charges policy. We believe in transparent
									and honest pricing.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
