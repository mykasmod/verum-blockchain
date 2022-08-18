import { FaTimes } from 'react-icons/fa'
const Blockchain = ({ blockchain, onDelete, onToggle }) => {
  return (
    <div className={`blockchain ${blockchain.enabled ? 'enabled' : ''}`} 
        onDoubleClick={() => onToggle(blockchain.id)}>

        <h3>{blockchain.name} <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
        onClick={() => onDelete(blockchain.id)}/></h3>

        <h3>{blockchain.id}</h3>

    </div>
  )
}

export default Blockchain