import { useState } from 'react'

const AddBlockchain = ({ onAdd }) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [enabled, setEnabled] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() //not to auto submit page

        if(!id){
            alert('Please add ID')
            return
        }
        if(!name){
            alert('Please add Name')
            return
        }

        onAdd({id, name, enabled})

        setId('')
        setName('')
        setEnabled('')
    }

  return (
   <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>            
            <label>Blockchain ID</label>
            <input type='text' 
            placeholder='Add ID' 
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
        </div>
        <div className='form-control'>            
            <label>Blockchain Name</label>
            <input type='text' placeholder='Add Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        {/* <div className='form-control form-control-check'>            
            <label>Enabled</label>
            <input 
            type='checkbox' 
            checked={enabled}
            value={enabled}
            onChange={(e) => setEnabled(e.currentTarget.checked)}
            />
        </div> */}
        <input type='submit' value='Save Blockchain' className='btn btn-block'>
        </input>
   </form>
  )
}

export default AddBlockchain