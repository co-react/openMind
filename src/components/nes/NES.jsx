import { useCallback, useEffect } from 'react'

import axios from "../../apis/axios";
import requests from "../../apis/request";

//import Toast from "../toast/Toast";
//import Dropdown from "../dropdown/Dropdown";
//import EditDropdownMenu from "../dropdown/EditDropdownMenu";
//import Like from "../reactions/Like";
//import Hate from "../reactions/Hate";
//import FloatingButton from "../buttons/FloatingButton";
//import CreateQuestionCard from '../../domain/CreateQuestionCard';
import Logo from '../logo/Logo';

const NES = () => {
  const fetchData = useCallback(async () => {
    const response = await axios.get(requests.SUBJECTS);
    //console.log(response)
    return response;
  },[])

  useEffect(() => {
    fetchData();
  })


  return (
    <div>
      <Logo />
      {/* <Toast /> */}
      {/* <Dropdown /> */}
      {/* <Like /> */}
      {/* <Hate /> */}
      {/* <FloatingButton /> */}
      {/* <EditDropdownMenu /> */}
      {/* <CreateQuestionCard /> */}
    </div>
  );
};

export default NES;
