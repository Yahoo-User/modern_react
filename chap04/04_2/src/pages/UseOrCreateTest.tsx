import { Title, Avatar } from "../components"
import { useOrCreateCache } from "./useOrCreateCache"
import * as D from "../data"


export default
function UseOrCreateTest() {
    // console.clear()
    // console.group("●●● (src/pages/UseOrCreateTest) ●●●")
    // console.groupEnd()
    
    const headTexts = useOrCreateCache<string[]>("headTexts", () => ["No", "Name", "Job Title", "Email Address"]);
    // console.log("1. headTexts:", headTexts)

    // ----------------------------
    
    const users = useOrCreateCache<D.IUser[]>("users", () => D.makeArray<number>(100, 0).map(D.makeRandomUser));
    // console.log("2. users:", users)

    // ----------------------------
    
    const head = useOrCreateCache("head", () => headTexts.map(text => <th key={text}>{text}</th>));

    // ----------------------------
    
    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    
    const body = useOrCreateCache("body", () => users.map( (user, index) => (
        <tr key={user.uuid}>
            <td>{index + 1}</td>
            <td className="flex items-center">
                <Avatar src={user.avatar} size="1.5rem" />
                <p className="ml-2">{user.name}</p>
            </td>
            <td>{user.jobTitle}</td>
            <td>{user.email}</td>
        </tr>
    )));

    // ----------------------------

    // ts(2657)  - JSX expressions must have "one parent element".
    // ts(17000) - JSX attributes must only be assigned a non-empty 'expression'.
    return (
        <div className="mt-4">
            <Title>UseOrCreateTest</Title>

            <div className="p-4 mt-4 oveflow-x-auto">
                <table className="table w-full table-zebra table-compact">
                    <thead><tr>{head}</tr></thead>
                    <tbody>{body}</tbody>
                </table>
            </div>
        </div>
    )
} // UseOrCreateTest

