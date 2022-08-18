import Blockchain from './Blockchain'

const Blockchains = ({ blockchains, onDelete, onToggle }) => {  
  return (
    <>
      {blockchains.map((blockchain) => (       
        <Blockchain key={blockchain.id} 
        blockchain={blockchain} 
        onDelete={onDelete} 
        onToggle={onToggle}/>
      ))}  
    </>
  )
}

export default Blockchains