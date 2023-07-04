import "./VehiclePicker.scss"
import { useEffect, useState } from "react"
import { carData } from "../../../core/service/car.service"

export default function VehiclePicker() {
	const [displayedVehicle, setDisplayedVehicle] = useState(carData[0])

	useEffect(() => {
		document.getElementById(carData[0].id)?.classList.add("model-selected")
	}, [])

	function onSelectVehicle(vehicleId: string): void {
		applyButtonsStyles(vehicleId)
		const selectedVehicle = carData.find(
			(vehicle) => vehicle.id === vehicleId
		)
		if (selectedVehicle) {
			setDisplayedVehicle(selectedVehicle)
		} else {
			console.error("Vehicle not found")
		}
	}

	function applyButtonsStyles(targetedId: string): void {
		const vehicleBtns = document.querySelectorAll(
			".model-picker__list__item"
		)
		vehicleBtns.forEach((button) =>
			button.classList.remove("model-selected")
		)
		document.getElementById(targetedId)?.classList.add("model-selected")
	}

	return (
		<section className="vehicle-models container--padding">
			<div className="vehicle-models__head">
				<h3>Vehicle Models</h3>
				<h2>Our rental fleet</h2>
				<p className="description-text">
					Choose from a variety of our amazing vehicles to rent for
					your next adventure or business trip
				</p>
			</div>
			<div className="model-picker-container flex--center">
				<div className="model-picker__list flex--column">
					{carData.map((vehicle) => {
						return (
							<button
								id={vehicle.id}
								key={vehicle.id}
								className="model-picker__list__item"
								onClick={() => onSelectVehicle(vehicle.id)}
							>
								{vehicle.name}
							</button>
						)
					})}
				</div>

				<div className="model-picker__image-container">
					<img src={displayedVehicle.imageUrl} />
				</div>

				<div className="model-picker__details">
					<div className="model-picker__details__head">
						{" "}
						<span className="bold-text">$ {displayedVehicle.price} </span> / rent per day
					</div>
					<div className="model-picker__details_row flex--center">
						<span>Model</span>
						<span> {displayedVehicle.model} </span>
					</div>
					<div className="model-picker__details_row flex--center">
						<span>Mark</span>
						<span> {displayedVehicle.mark} </span>
					</div>
					<div className="model-picker__details_row flex--center">
						<span>Year</span>
						<span> {displayedVehicle.year} </span>
					</div>
					<div className="model-picker__details_row flex--center">
						<span>Doors</span>
						<span> {displayedVehicle.doors}/5</span>
					</div>
					<div className="model-picker__details_row flex--center">
						<span>AC</span>
						<span> {displayedVehicle.ac ? "Yes" : "No"} </span>
					</div>
					<div className="model-picker__details_row flex--center">
						<span>Transmission</span>
						<span> {displayedVehicle.transmission} </span>
					</div>
					<div className="model-picker__details_row flex--center">
						<span>Fuel</span>
						<span> {displayedVehicle.fuel} </span>
					</div>
					<button className="basic-btn">RESERVE NOW</button>
				</div>
			</div>
		</section>
	)
}
