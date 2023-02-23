
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <label></label>
      <div>
        <Link to="/input" target="_blank" rel="noopener noreferrer">add new reciept</Link>
      </div>
      <div>
        <Link to="/print" target="_blank" rel="noopener noreferrer">proceed to print</Link>
      </div>
    </div>
  )
}

export default Home
