
 
import PropTypes from 'prop-types'

import DefaultPicture from '../../Assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


const CardLabel = styled.span`color: #5843e4;
font-size: 22px;
font-weight: bold;

`
const CardImage = styled.img`
    height: 200px;
    width: 140px;
    border-radius: 50%;
    margin: 15% 25% 22px;
    
    



`
const CardWrapper = styled.div`
   margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 280px;
    height: 280px;
    transition: 200ms;
    font-weight: bold;
    
    
    
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
const Span = styled.span`
text-align: center;
`


function Card({ label, name, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <Span>{name}</Span>
        </CardWrapper>
    )
}

 
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture,

}
 
export default Card
