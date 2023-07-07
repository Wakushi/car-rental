import { useState } from "react"
import { Faq } from "../../../core/models/faq.model"
import "./FaqCard.scss"

interface FaqCardProps {
	faq: Faq
}

export default function FaqCard({ faq }: FaqCardProps) {
	const [isAnswerDisplayed, setIsAnswerDisplayed] = useState(false)

	function toggleAnswerDisplay() {
		setIsAnswerDisplayed(
			(prevAnswerDisplayed) =>
				(prevAnswerDisplayed = !prevAnswerDisplayed)
		)
	}

	const containerStyles = {
		gridTemplateRows: isAnswerDisplayed ? "1fr" : "0fr"
	}

	const cardArrowStyles = {
		transform: isAnswerDisplayed ? "rotate(180deg)" : ""
	}

	const questionCardStyle = {
		backgroundColor: isAnswerDisplayed ? "#07c8ee" : "#fff",
		color: isAnswerDisplayed ? "#fff" : ""
	}

	return (
		<div className="faq-card" onClick={toggleAnswerDisplay}>
			<div
				className="faq-card__question flex--between"
				style={questionCardStyle}
			>
				<p className="big-text">
					{" "}
					{faq.id}. {faq.question}{" "}
				</p>
				<i
					className="fa-solid fa-angle-down"
					style={cardArrowStyles}
				></i>
			</div>
			<div className="faq-card__answer" style={containerStyles}>
				<div>
					{" "}
					<p>{faq.answer}</p>{" "}
				</div>
			</div>
		</div>
	)
}
