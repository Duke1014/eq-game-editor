import { Link } from "react-router-dom";
import NPCEditor from "./NPCEditor";

export default function Home() {
  return (
    <div>
        Hello welcome Home
        <div className="list-of-editors">
            Editors:
            <ul>
                <li>
                    <Link to="/npcs" element={<NPCEditor />}>NPC</Link>
                </li>
                <li>
                    Item 
                </li>
                <li>
                    Spell 
                </li>
                <li>
                    Tradeskills 
                </li>
                <li>
                    thing
                </li>
            </ul>
        </div>
    </div>
  )
}
