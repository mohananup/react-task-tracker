import PropTypes from 'prop-types';
import Button from './Button';


const Header  = ({title}) => {
   

  const onClick = () => {
    console.log('Click')
  }

  return(
    <header>
        <h1>{title}</h1>
        <Button 
        onClick={onClick}
        color ='green' text = 'Add'/>
    </header>

  ) 
};
Header.defaultProps = {
    title: 'Trace tracker',
}
Header.propTypes = {
    title: PropTypes.string,
}



export default Header ;

