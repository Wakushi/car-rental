// STYLES
import "./Home.scss"
// ASSETS
import heroBackground from "../../assets/images/others/blob.webp"
import mercedes from "../../assets/images/cars/mercedes.webp"
// COMPONENTS
import BookingForm from "../../shared/components/booking-form/BookingForm"
import Hero from "../../core/components/hero/Hero"
import RentalPlan from "../../shared/components/rental-plan/RentalPlan"

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
			<section className="vehicle-models container--padding">
				<h3>Vehicle Models</h3>
				<h2>Our rental fleet</h2>
				<p className="description-text">
					Choose from a variety of our amazing vehicles to rent for
					your next adventure or business trip
				</p>
				<div className="model-picker-container flex--between">
					<div className="model-picker__list flex--column">
						<button className="model-picker__list__item model-selected">
							Audi A1 S-Line
						</button>
						<button className="model-picker__list__item">
							VW Golf 6
						</button>
						<button className="model-picker__list__item">
							VW Golf 6
						</button>
						<button className="model-picker__list__item">
							VW Golf 6
						</button>
						<button className="model-picker__list__item">
							VW Golf 6
						</button>
						<button className="model-picker__list__item">
							VW Golf 6
						</button>
					</div>
					<div className="model-picker__image-container">
						<img src={mercedes} />
					</div>
					<div className="model-picker__details">
						<div className="model-picker__details__head">
							{" "}
							<span className="bold-text">$45</span> / rent per day
						</div>
						<div className="model-picker__details_row">
							<span>Model</span>
							<span></span>
						</div>
						<div className="model-picker__details_row">
							<span>Mark</span>
							<span></span>
						</div>
						<div className="model-picker__details_row">
							<span>Year</span>
							<span></span>
						</div>
						<div className="model-picker__details_row">
							<span>Doors</span>
							<span></span>
						</div>
						<div className="model-picker__details_row">
							<span>AC</span>
							<span></span>
						</div>
						<div className="model-picker__details_row">
							<span>Transmission</span>
							<span></span>
						</div>
						<div className="model-picker__details_row">
							<span>Fuel</span>
							<span></span>
						</div>
						<button className="basic-btn">RESERVE NOW</button>
					</div>
				</div>
			</section>
		</div>
	)
}
