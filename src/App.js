import Header from "./components/Header"
import Blockchains from "./components/Blockchains"
import AddBlockchain from "./components/AddBlockchain"
import { useState, useEffect } from 'react'

function App() {
  const [showAddBlockchain, setShowAddBlockchain] = useState(false)
  const [blockchainList, setBlockchainList] = useState([])

  useEffect(() => {
    const getBlockchainList = async() => {
      const blockchainsFromServer = await fetchBlockchains()
      setBlockchainList(blockchainsFromServer)
    }

    getBlockchainList()
  }, [])

  //Fetch Data
  const fetchBlockchains = async() => {
    const res = await fetch('http://localhost:5000/blockchains')
    const data = await res.json()
    // console.log(data)
    return data
  }

  //Add Blockchain
  const addBlockchain = async(blockchain) => {
    const res = await fetch('http://localhost:5000/blockchains', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(blockchain)
    })  
    const data = await res.json()
    setBlockchainList([...blockchainList, data])        
  }

  //Delete Blockchain
  const deleteBlockchain = async(id) => {        
    await fetch(`http://localhost:5000/blockchains/${id}`, {method: 'DELETE'})
    setBlockchainList(blockchainList.filter((b) => b.id !== id))    
  }

  //Toggle enabled
  const toggleEnabled = (id) => {
    setBlockchainList(
        blockchainList.map((b) => 
        b.id === id ? {...b, enabled: !b.enabled} : b )
      )
  }

  return (
     <div className='container'>
        <Header onAdd = {() => setShowAddBlockchain(!showAddBlockchain)}
        showAdd={showAddBlockchain}
        />
        { showAddBlockchain && <AddBlockchain onAdd = {addBlockchain} /> }
        {blockchainList.length > 0 ? 
        <Blockchains 
        blockchains={blockchainList} 
        onDelete={deleteBlockchain}
        onToggle={toggleEnabled}/>
        : 'No blockchains to show'}
     </div>
  )
}

export default App