import Toast from "../toast/Toast"
import Dropdown from "../dropdown/Dropdown"
import Like from "../reactions/Like"
import Hate from "../reactions/Hate"

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
    </div>
  )
}

export default NES