import './Popup.css'

const Popup = ({ isCorrect, isOpen, description, onClose }) => {
  if (!isOpen) return;

  return (
    <div>
      <div className={`popup popup-${isCorrect ? 'correct' : 'wrong'}`}>
        <h3>{isCorrect ? "Correct" : "Wrong"}</h3>
        <div className="description">{description}</div>
        <button className="done-button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  )
}

export default Popup