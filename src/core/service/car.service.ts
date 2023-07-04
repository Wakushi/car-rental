import { Car } from "../models/car.model"

import mercedesGLC from "../../assets/images/cars/mercedes.webp"
import audi from "../../assets/images/cars/audi.webp"
import jaguar from "../../assets/images/cars/jaguar.webp"
import audiTT from "../../assets/images/cars/audi-2.webp"
import volkswagen from "../../assets/images/cars/volkswagen.webp"
import rangerRover from "../../assets/images/cars/range-rover.webp"

export const carData: Car[] = [
	{
		id: "1",
		name: "Mercedes-benz GLC",
		model: "GLC",
		mark: "Mercedes",
		year: 2013,
		doors: 4,
		ac: true,
		transmission: "Automatic",
		fuel: "Diesel",
		imageUrl: mercedesGLC,
		price:70
	},
	{
		id: "2",
		name: "Audi S7",
		model: "S7",
		mark: "Audi",
		year: 2018,
		doors: 4,
		ac: true,
		transmission: "Manual",
		fuel: "Hybrid",
		imageUrl: audi,
		price:65
	},
	{
		id: "3",
		name: "Jaguar F-Pace",
		model: "F-Pace",
		mark: "Jaguar",
		year: 2017,
		doors: 4,
		ac: true,
		transmission: "Automatic",
		fuel: "Gasoline",
		imageUrl: jaguar,
		price:43
	},
	{
		id: "4",
		name: "Audi TT",
		model: "TT",
		mark: "Audi",
		year: 2011,
		doors: 4,
		ac: false,
		transmission: "Manual",
		fuel: "Diesel",
		imageUrl: audiTT,
		price:39
	},
	{
		id: "5",
		name: "Range Rover Evoque",
		model: "Evoque",
		mark: "Range Rover",
		year: 2020,
		doors: 4,
		ac: true,
		transmission: "Manual",
		fuel: "Gasoline",
		imageUrl: rangerRover,
		price:82
	},
	{
		id: "6",
		name: "Volkswagen Golf",
		model: "Golf",
		mark: "Volkswagen",
		year: 2014,
		doors: 5,
		ac: true,
		transmission: "Automatic",
		fuel: "Hybrid",
		imageUrl: volkswagen,
		price:60
	}
]
