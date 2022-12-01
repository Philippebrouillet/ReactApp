import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'


const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 310px 310px;
    grid-template-columns: repeat(2, 1fr);
    margin-left:330px;
    margin-right: 250px;
    align-items: center;
    justify-content: center;
`

const LoaderWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
`

const H1 = styled.h1`
text-align:center;
`
const P = styled.p`
text-align:center;
color:#8186a0;
`

function Freelances() {

  const [isDataLoading, setDataLoading] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])
    
  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/freelances`)
        .then((response) => response.json()
        .then(({ freelancersList}) => {
          setFreelancesList(freelancersList)
          setDataLoading(false)
        })
      )
    }, [])
    
  return (
      <div>
          <br/>
          <H1>Trouvez votre préstataire</H1>
          <P>Chez Shiny nous réunissons les meilleurs profils pour vous.</P>
          {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.id}-${index}`}
              label={profile.job}
              name={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}


export default Freelances