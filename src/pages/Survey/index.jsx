import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { Loader } from '../../utils/style/Atoms'




const StyledLink = styled(Link)`
padding: 15px;
color: grey;
text-decoration: none;
font-size: 18px;
    text-decoration: none;
    margin-top: 10px;
    
   
`

const DivS = styled.div`
margin-top: 180px;
display:flex;
text-align:center;
align-items:center;
flex-direction: column;

`
const H1 = styled.h1` 
text-decoration:underline #5843e4


`
const Div1 = styled.div`
margin-top: 50px;
font-size:1em;



`
const Div2 = styled.div`
display:flex;
text-align:center;
align-items:center;
gap: 20px;

`
function Survey() {
  const { questionNumber } = useParams()
  const [surveyData, setsurveyData] = useState({})
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/survey
    `)
        .then((response) => response.json()
        .then(({ surveyData}) => {
          setsurveyData(surveyData)
          setDataLoading(false)
        })
      )
    }, [])
    
  return (
    <DivS>
      <H1>Question {questionNumber}</H1>
      {isDataLoading ? (
        <Loader />
      ) : (
        <Div1>{surveyData[questionNumber]}   </Div1>
      )}
      
      <Div2>
      <button type="button">OUI</button>
      <button type="button">NON</button>
      </Div2>
      <div className='linkQ'>
      <StyledLink to={`/survey/${prevQuestionNumber}`}>Précédent</StyledLink>
      {surveyData[questionNumberInt + 1] ? (
        <StyledLink to={`/survey/${nextQuestionNumber}`}>Suivant</StyledLink>
      ) : (
        <StyledLink to="/results">Résultats</StyledLink>
      )}
      </div>
    </DivS>
  )
}

export default Survey