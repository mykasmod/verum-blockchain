import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const onEdit = () => { 
    console.log(`onEdit from Header`);
  }
  
  return (
    <header className='header'>              
        <h2>{title}</h2>   
        <Button bgcolor={showAdd ? 'Black': 'Brown'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        {/* <Button text='Edit' onClick={onEdit}/> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Blockchain limit orders',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header