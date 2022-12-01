
import styled from 'styled-components'
import logo from '../../Assets/home-illustration.svg'
import { Link } from 'react-router-dom'

import colors from '../../utils/style/colors'

const HomeContainer = styled.div`

height: 710px;
display:flex;
align-items: center;
justify-content: space-between;
background-color: #F9F9FC;
margin-top: 110px;
padding: 2em;
margin-left: 30px;
margin-right: 30px;

`
const Hstyled = styled.h1`

font-size: 3em;
text-align: start;
width: 700px;
margin-left: 80px;

`
const Imgs  = styled.img`
 
  width: 600px;
  margin-right: 100px;

`

const StyledLink = styled(Link)`
    padding: 15px 15px 15px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    position: absolute;
  top: 780px; left: 350px;
    ${(props) =>
        props.$isFullLink &&
        `{color: white; 
            border-radius: 30px;
           
            background-color: ${colors.primary}};
            `}
`

//const Balloon = styled.div`
//height: 100px;
//width: 100px;
//border-radius: 50px;
//background-color: #e20202;
//transform: scale(${({size}) => size});
//`

function Home() {
  
  return (
    <HomeContainer >
      <Hstyled> Repérez vos besoins,<br/> on s'occupe du reste,<br/>avec les meilleurs talents. </Hstyled>
      <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      <Imgs src={logo} alt="logoHome" /> 

      
      
    
    </HomeContainer>
    
  )
}

export default Home;
