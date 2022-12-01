import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DarkLogo from '../../Assets/dark-logo.png'



const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    &:hover {
    color: #5843e4;
    }
    ${(props) =>
        props.$isFullLink &&
        `{color: white; 
            border-radius: 30px;
            &:hover {
                color: white;
                }
           
            background-color: ${colors.primary}};
            `}
`


const StyledPhoto = styled.div`
  display: flex;
  position: absolute;
  top: 20px; left: 20px;
  
  
`


function Header() {
    return (
        <nav>
        <StyledPhoto><img src={DarkLogo} alt="logo" /></StyledPhoto>
            <StyledLink to="/" >Accueil</StyledLink>
            
            <StyledLink to="/freelances" >Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </nav>
        
    )
};

export default Header;