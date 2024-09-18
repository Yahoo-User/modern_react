import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import {Icon} from "../../theme/daisyui"
import * as D from "../../data"
import type {AppState} from "../../store"
import * as C from "../../store/cards"
import {Title} from "../../components"
import Card from "./Card"


// const makeCard: () => D.ICard = 								
// 	() => D.makeCard(
// 			D.randomUUID(),
// 			D.makeRandomUser(),
// 			D.randomImage(200, 100), 
// 			'', '', '', ''
// 	)																// 1st. method

const makeCard: () => D.ICard = () => D.makeRandomCard()			// 2nd. method

// -----------------------

export default
function CardsTest() {
	// console.clear()
	console.group("●●● (src/pages/cards/CardsTest) ●●●")

	const dispatch = useDispatch()

	// -----------------------
	const cards = useSelector<AppState, C.State>(({ cards }) => cards)
	
	console.log("1.cards:", cards)

	// -----------------------
	const addCard = useCallback(() => {
		console.group("§§§ useCallback for addCard §§§"); console.groupEnd()
		dispatch<C.AddCardAction>(C.addCard(makeCard()))
	}, [dispatch])

	// -----------------------
	const removeCard = useCallback((uuid: string) => {
		console.group("§§§ useCallback for removeCard §§§"); console.groupEnd()
		return () => dispatch<C.RemoveCardAction>(C.removeCard(uuid))
	}, [dispatch])

	// -----------------------
	const children = useMemo(() => cards.map(card => 
		<Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
	), [cards, removeCard])
	
	console.log("2. children:", children)

	// -----------------------
	console.groupEnd()
	// -----------------------

	// ts(2657)  - JSX expressions must have "one parent element".
	// ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
	return (
		<section className="mt-1">
			<Title className="text-3xl font-bold text-left">4. CardsTest</Title>

			<div className="flex justify-center mt-3">
				<Icon name="+" className="text-4xl text-white bg-blue-700 btn-primary" onClick={addCard} />
			</div>

			<div className="flex flex-wrap mt-4">{children}</div>
		</section>
	)
} // CardsTest

