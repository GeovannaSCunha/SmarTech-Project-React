import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: rgb(226, 226, 226);
  color: rgb(61, 61, 61);
  padding: 80px;
  text-align: center;
`;

/////////////////////////////////////////////////////////////////////////
export const StyledMain = styled.main`
  margin-top: 4%;
  margin-bottom: 7%;
  padding: 5%;
  color: rgb(61, 61, 61);
  
  section h1 {
  text-align: center;
  font-size: 2.18em;
  margin-bottom: 4%;
}
  section p {
  text-indent: 4%;
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 2%;
}

`;

/////////////////////////////////////////////////////////////////////////
export const StyledNC = styled.main`
  margin-top: 8%;
  font-size: 1em;
  text-align: center;

  section {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 10%;
    margin-top: 5%;
  }

  #ibm img {
    width: 25%;
    margin-left: 70%;
  }

  #content {
    margin-top: 10%;
  }
  #content p {
    text-align: left;
  }
`;

////////////////////////////////////////////////////////////////////
