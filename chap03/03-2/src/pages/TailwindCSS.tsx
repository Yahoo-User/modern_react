import * as D from "../data"


// Functional Component.
export default function TailwindCSS() {

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="bg-black/70">
            <h3>src/pages/TailwindCSS.tsx</h3>
            <hr />

            <p className="w-full p-0 text-3xl text-white">Tailwind CSS</p>
            <p className="italic text-grey-50 line-clamp-3">{ D.randomParagraphs(10) }</p>

            <button className="btn btn-primary" style={{ textTransform: 'none' } }>Button</button>
        </div>
    )
} // TailwindCSS

