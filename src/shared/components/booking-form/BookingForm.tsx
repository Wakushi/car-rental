import "./BookingForm.scss"

export default function BookingForm() {
	return (
		<div className="booking-container container--padding">
			<section className="booking">
				<h2>Book a car</h2>
				<form className="booking__form flex">
					<div className="booking__form__bloc flex--column">
						<label htmlFor="carType">
							Select your car type{" "}
							<span className="brand--color">*</span>
						</label>
						<select id="carType">
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
						</select>
					</div>
					<div className="booking__form__bloc flex--column">
						<label htmlFor="pickUpLocation">
							Pick-up location{" "}
							<span className="brand--color">*</span>
						</label>
						<select id="pickUpLocation">
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
						</select>
					</div>
					<div className="booking__form__bloc flex--column">
						<label htmlFor="dropOffLocation">
							Drop-off location{" "}
							<span className="brand--color">*</span>
						</label>
						<select id="dropOffLocation">
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
							<option value="Twingo RS">Twingo RS</option>
						</select>
					</div>
					<div className="booking__form__bloc flex--column">
						<label htmlFor="pickUpDate">
							Pick-up date <span className="brand--color">*</span>
						</label>
						<input id="pickUpDate" type="date" />
					</div>
					<div className="booking__form__bloc flex--column">
						<label htmlFor="dropOffDate">
							Drop-off date{" "}
							<span className="brand--color">*</span>
						</label>
						<input id="dropOffDate" type="date" />
					</div>
					<button
						type="button"
						className="basic-btn booking__form__bloc"
					>
						Search
					</button>
				</form>
			</section>
		</div>
	)
}
