import { useState } from 'react';

import arrowDownIcon from '../../assets/svg/Icons/arrowDown.svg';
import arrowUpIcon from '../../assets/svg/Icons/arrowUp.svg';

import './Dropdown.css'

function Dropdown() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  }

  if (isOpened) {
    return (
      <div className='dropdown'>
        <span className='dropdownMenuTitle'>이름순</span>
        <img src={arrowUpIcon} onClick={handleClick} alt='접기'/>
        <div className='dropdownMenus'>
          <div className='dropdownMenu'>
            <span className='dropdownMenuTitle'>이름순</span>
          </div>
          <div>
            <span className='dropdownMenuTitle'>최신순</span> 
          </div>
        </div>
      </div>
    ) // 추후에 메뉴는 props, map의 조합으로 작성할 예정입니다.
  }

  return (
  <div className='dropdown'>
    <span className='dropdownMenuTitle'>이름순</span>
    <img src={arrowDownIcon} onClick={handleClick} alt='펼치기'/>
  </div>
  ) 
}

export default Dropdown