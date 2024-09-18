import type {FC} from "react"
import type {ICard} from "../../data"
import {Div, Avatar} from "../../components"
import {Icon} from "../../theme/daisyui"


export
type UserCardProps = {
    card: ICard;                // <--- *** : To implement UI
    onRemove?: () => void;      // <--- *** : To remove this card when triggered this event
}

// -----------------------

// Functional Component.
const Card: FC<UserCardProps> = ({card, onRemove}) => {
    // console.clear()
    console.group("●●● (src/pages/cards/Card) ●●●")
    console.groupEnd()

    const {image, writer} = card
    const {avatar, name, jobTitle} = writer

    // -----------------------

    return (
        <Div className="m-2 border shadow-lg round-xl" width="11rem">
            <Div src={image} className="relative h-20">
                <Icon
                    name="-"
                    className="absolute text-xl bg-red-500 border-0 right-1 top-1 btn btn-primary btn-xs"
                    onClick={onRemove} />
            </Div>

            <Div className="flex flex-col p-2">
                <Div minHeight="6rem" height="7rem" maxHeight="7rem">
                    <Div className="flex flex-row items-center">
                        <Avatar src={avatar} size="2rem" />

                        <Div className="ml-2">
                            <p className="text-xs font-bold">{name}</p>
                            <p className="text-xs text-grey-500">{jobTitle}</p>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
} // Card

export default Card;


