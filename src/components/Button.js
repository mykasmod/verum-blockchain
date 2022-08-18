import PropTypes from 'prop-types'

const Button = ({bgcolor, text, onClick}) => {
 

  return (
    <button onClick={onClick} style={{ backgroundColor: bgcolor }} 
    className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    bgcolor: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    bgcolor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button