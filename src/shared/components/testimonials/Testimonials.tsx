import "./Testimonials.scss"
// ASSETS
import clientA from "../../../assets/images/clients/michael.webp"
import clientB from "../../../assets/images/clients/pam.webp"

export default function Testimonials() {
	return (
		<section className="testimonials flex--column">
			<div className="testimonials__text flex--column">
				<h4>Reviewed by People</h4>
				<h2>Client's Testimonials</h2>
				<p className="description-text">
					Discover the positive impact we've made on the our clients
					by reading through their testimonials. Our clients have
					experienced our service and results, and they're eager to
					share their positive experiences with you.
				</p>
			</div>
			<div className="testimonials__list flex">
				<div className="testimonals__list__card flex--column">
					<p className="bigger-text">
						"We rented a car from this website and had an amazing
						experience! The booking was easy and the rental rates
						were very affordable."
					</p>
					<div className="testimonials__client flex">
						<div className="client-image-container">
							<img src={clientA} alt="Client's picture" />
						</div>
						<div className="client-infos">
							<h4>Michael S.</h4>
							<p>Scranton, USA</p>
						</div>
					</div>
					<i className="fa-solid fa-quote-right"></i>
				</div>
				<div className="testimonals__list__card flex--column">
					<p className="bigger-text">
						"The car was in great condition and made our trip even
						better. Highly recommend for this car rental website!"
					</p>
					<div className="testimonials__client flex">
						<div className="client-image-container">
							<img src={clientB} alt="Client's picture" />
						</div>
						<div className="client-infos">
							<h4>Pam H.</h4>
							<p>Scranton, USA</p>
						</div>
					</div>
					<i className="fa-solid fa-quote-right"></i>
				</div>
			</div>
		</section>
	)
}
