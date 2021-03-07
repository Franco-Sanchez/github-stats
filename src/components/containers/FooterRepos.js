import styled from "@emotion/styled";
import { ContentSmall } from '../text/Content';
import Icon from '../UI/Icon';

const StyledFooterRepos = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 15px;
`

const Language = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.language ? props.language : "#E0E0E0"};
` 

const ContainerStats = styled(StyledFooterRepos)`
  gap: 5px;
  height: max-content;
`


function FooterRepos({ language, stars, forks }) {
  const languages = {
    JavaScript: '#F2C94C',
    Ruby: '#701516',
    CSS: '#563d7c',
    PHP: '#4f5d95',
    Java: '#b07219',
    Go: '#00add8',
    Python: '#3572a5',
    HTML: '#e86228'
  }

  return (
    <StyledFooterRepos>
      <ContainerStats>
        <Language language={languages[language]} />
        <ContentSmall>{!language ? 'none' : language}</ContentSmall>
      </ContainerStats>
      <ContainerStats>
        <Icon type="starLine" color="#03053D" size="12" />
        <ContentSmall>{stars}</ContentSmall>
      </ContainerStats>
      <ContainerStats>
        <Icon type="gitfork" color="#03053D" size="12" />
        <ContentSmall>{forks}</ContentSmall>
      </ContainerStats>
    </StyledFooterRepos>
  )
}

export default FooterRepos;