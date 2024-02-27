import Toast from "../toast/Toast"
import Dropdown from "../dropdown/Dropdown"
import Like from "../reactions/Like"
import Hate from "../reactions/Hate"
import FloatingButton from "../buttons/FloatingButton"

const NES = () => {

  const containerStyle = {
    display: 'flex',
    gap : '10px'
  }

  return (
    <div style={containerStyle}>
      <Toast />
      <Dropdown />
      <Like />
      <Hate />
      <FloatingButton />
    </div>
  )
}

export default NES