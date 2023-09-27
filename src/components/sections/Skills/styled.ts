import styled from "styled-components";

export const SkillsContainer = styled.div`  
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`

export const Icon = styled.div`
  padding: 3rem ;
  border-radius: .5rem;
  border: 2px solid ${props => props.theme.colors.text} ;
  transition: all .5s;
  opacity: .7;
  svg {
    font-size: 6rem;
    fill: ${props => props.theme.colors.primaryColor};

    @media (max-width: 998px) {
      font-size: 5rem;      
    }
  }

  &:hover {
    opacity: 1;
    border-color: ${props => props.theme.colors.primaryColor};
  }
`