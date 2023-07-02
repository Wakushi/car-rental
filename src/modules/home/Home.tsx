// STYLES
import "./Home.scss"
// ASSETS
import heroBackground from "../../assets/images/others/blob.webp"
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
		</div>
	)
}
