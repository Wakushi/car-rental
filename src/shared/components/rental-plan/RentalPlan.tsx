// STYLES
import "./RentalPlan.scss"
// ASSETS
import selectCarBlob from "../../../assets/images/others/plan-blob1.webp"
import operatorBlob from "../../../assets/images/others/plan-blob2.webp"
import movingCarBlob from "../../../assets/images/others/plan-blob3.webp"

export default function RentalPlan() {
	return (
		<section className="plan-section container--padding flex--column">
			<h3>Plan your trip now</h3>
			<h2>Quick & easy car rental</h2>
			<div className="plan flex--center container--padding">
				<div className="plan__item flex--column">
					<div className="plan__item__image-container">
						<img
							src={selectCarBlob}
							alt="Logo of a hand holding a car and keys"
						/>
					</div>
					<h3 className="bold-text">Select Car</h3>
					<p className="description-text">
						We offers a big range of vehicles for all your driving
						needs. We have the perfect car to meet your needs
					</p>
				</div>
				<div className="plan__item flex--column">
					<div className="plan__item__image-container">
						<img src={operatorBlob} alt="Contact operator" />
					</div>
					<h3 className="bold-text">Contact Operator</h3>
					<p className="description-text">
						Our knowledgeable and friendly operators are always
						ready to help with any questions or concerns
					</p>
				</div>
				<div className="plan__item flex--column">
					<div className="plan__item__image-container">
						<img src={movingCarBlob} alt="Moving car" />
					</div>
					<h3 className="bold-text">Let's Drive</h3>
					<p className="description-text">
						Whether you're hitting the open road, we've got you
						covered with our wide range of cars
					</p>
				</div>
			</div>
		</section>
	)
}
