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

/////////////////////////////////////////////////////////////////////////
export const StyledCabecalho = styled.div`
  max-width: 1920px;
  width: 100%;

header {
  position: relative;
  top: 0;
  height: auto;
  width: 100%;
}

nav {
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #CCC;
}

.nav-container {
  max-width: 1200px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

.nav-container ul {
  float: right;
  height: 80px;
  line-height: 80px;
  margin: 0;
}
.nav-container li {
  list-style: none;
  float: left;
  margin: 0 15px;
}
.nav-container li a {
  text-decoration: none;
  color: #2247e4;
}
.nav-container li a:hover {
  color: rgba(34, 70, 228, 0.7176470588);
}
`
////////////////////////////////////////////////////////////////////
