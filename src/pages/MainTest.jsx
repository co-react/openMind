import "./MainTest.css";

import { Link } from "react-router-dom";
import KDH from "../components/kdh/KDH";
import NES from "../components/nes/NES";
import KYE from "../components/kye/KYE";
import PGB from "../components/pgb/PGB";

function MainTest() {
  return (
    <div className="mainTest">
      <Link to={`/kdh`} element={<KDH />}>
        동현
      </Link>
      <br />
      <Link to={`/nes`} element={<NES />}>
        은수
      </Link>
      <br />
      <Link to={`/kye`} element={<KYE />}>
        영은
      </Link>
      <br />
      <Link to={`/pgb`} element={<PGB />}>
        기범
      </Link>
    </div>
  );
}

export default MainTest;
