import Toast from "../toast/Toast";
import Dropdown from "../dropdown/Dropdown";
import EditDropdownMenu from "../dropdown/EditDropdownMenu";
import Like from "../reactions/Like";
import Hate from "../reactions/Hate";
import FloatingButton from "../buttons/FloatingButton";

import "../../style/global.css";
import "../../style/reset.css";

const NES = () => {
  // const containerStyle = {
  //   display: 'flex',
  //   gap : '10px'
  // }

  return (
    <div>
      {/* <Toast /> */}
      <Dropdown />
      {/* <Like /> */}
      {/* <Hate /> */}
      <FloatingButton />
      <EditDropdownMenu />
    </div>
  );
};

export default NES;
