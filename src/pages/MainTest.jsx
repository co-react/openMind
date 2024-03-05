import "./MainTest.css";

import { Link } from "react-router-dom";

function MainTest() {
  return (
    <div className="mainTest">
      <Link to={`/kdh`}>동현</Link>
      <br />
      <Link to={`/nes`}>은수</Link>
      <br />
      <Link to={`/kye`}>영은</Link>
      <br />
      <Link to={`/pgb`}>기범</Link>
    </div>
  );
}

export default MainTest;
