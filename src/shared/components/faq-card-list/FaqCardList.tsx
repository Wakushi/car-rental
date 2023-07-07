import { FaqData } from "../../../core/service/faq.service"
import FaqCard from "../../../shared/components/faq-card/FaqCard"
import redCar from "../../../assets/images/cars/car-back.webp"
import "./FaqCardList.scss"

export default function FaqCardList() {
	return (
		<section className="faq flex--column">
			<h5>FAQ</h5>
			<h2>Frequently Asked Questions</h2>
			<p className="description-test">
				Frequently Asked Questions About the Car Rental Booking Process
				on Our Website: Answers to Common Concerns and Inquiries.
			</p>
			<div className="faq-list">
				<div className="faq__img-container">
					<img src={redCar} alt="A red car" />
				</div>
				{FaqData.map((faq) => {
					return <FaqCard faq={faq} />
				})}
			</div>
		</section>
	)
}
