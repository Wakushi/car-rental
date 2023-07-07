// STYLES
import "./Home.scss"
// ASSETS
import heroBackground from "../../assets/images/others/hero-bg.png"
import googleApp from "../../assets/images/logo/googleapp.svg"
import appleApp from "../../assets/images/logo/appstore.svg"
// COMPONENTS
import BookingForm from "../../shared/components/booking-form/BookingForm"
import Hero from "../../core/components/hero/Hero"
import RentalPlan from "../../shared/components/rental-plan/RentalPlan"
import VehiclePicker from "../../shared/components/vehicle-picker/VehiclePicker"
import RentalDetails from "../../shared/components/rental-details/RentalDetails"
import Testimonials from "../../shared/components/testimonials/Testimonials"
import FaqCardList from "../../shared/components/faq-card-list/FaqCardList"

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
			<RentalDetails />
			<Testimonials />
			<FaqCardList />
			<section className="download flex--center">
				<div className="download__container">

				<div className="download__content flex--column">
					<h2>Download our app to get most out of it</h2>
					<p>
						Rent the car of your dreams. Unbeatable prices,
						unlimited miles, flexible pick-up options and much more.
						Save big with our cheap car rental.
					</p>
					<div className="flex">
						<img src={googleApp} alt="" />
						<img src={appleApp} alt="" />
					</div>
				</div>
				</div>
			</section>
		</div>
	)
}
