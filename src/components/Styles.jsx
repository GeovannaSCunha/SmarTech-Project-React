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

@media(min-width: 961px) and (max-width:1074px){
  nav{
    height: 4em;
  }
  .nav-container li {
    margin: 0 0.5em;
    margin-top: -1%;
}
  .nav-container li a {
    font-size: 1em;
  }
}
@media(min-width: 919px) and (max-width:960px){
  nav{
    height: 3em;
  }
  .nav-container li {
    margin: 0 0.5em;
    margin-top: -2%;
}
  .nav-container li a {
    font-size: 1em;
  }
}
@media(min-width: 902px) and (max-width:918px){
  nav{
    height: 3em;
  }
  .nav-container li {
    margin: 0 0.5em;
    margin-top: -10%;
}
  .nav-container li a {
    font-size: 1em;
  }
}
@media(min-width: 842px) and (max-width:901px){
  nav{
    height: 3.2em;
  }
  .nav-container li {
    margin: 0 0.5em;
    margin-top: -9.5%;
}
  .nav-container li a {
    font-size: 1em;
  }
}
@media(min-width: 774px) and (max-width:841px){
  nav{
    height: 3em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -2.4%;
}
  .nav-container li a {
    font-size: 0.9em;
  }
}
@media(min-width: 719px) and (max-width:773px){
  nav{
    height: 2.8em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -11%;
}
  .nav-container li a {
    font-size: 0.9em;
  }
}
@media(min-width: 632px) and (max-width:718px){
  nav{
    height: 2.5em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -4.4%;
}
  .nav-container li a {
    font-size: 0.7em;
  }
}
@media(min-width: 576px) and (max-width:631px){
  nav{
    height: 2.3em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -12.5%;
}
  .nav-container li a {
    font-size: 0.7em;
  }
}
@media(min-width: 506px) and (max-width:575px){
  nav{
    height: 2em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -14.5%;
}
  .nav-container li a {
    font-size: 0.6em;
  }
}
@media(min-width: 490px) and (max-width:505px){
  nav{
    height: 1.8em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -8%;
}
  .nav-container li a {
    font-size: 0.5em;
  }
}
@media(min-width: 439px) and (max-width:489px){
  nav{
    height: 1.8em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -16.5%;
}
  .nav-container li a {
    font-size: 0.5em;
  }
}
@media(min-width: 433px) and (max-width:438px){
  nav{
    height: 1.6em;
  }
  .nav-container li {
    margin: 0 0.2em;
    margin-top: -9.5%;
}
  .nav-container li a {
    font-size: 0.46em;
  }
}
@media(min-width: 384px) and (max-width:432px){
  nav{
    height: 1.6em;
  }
  .nav-container li {
    margin: 0 0.2em;
    margin-top: -18.5%;
}
  .nav-container li a {
    font-size: 0.46em;
  }
}
@media(min-width: 338px) and (max-width:383px){
  nav{
    height: 1.4em;
  }
  .nav-container li {
    margin: 0 0.2em;
    margin-top: -20.5%;
}
  .nav-container li a {
    font-size: 0.4em;
  }
}
@media(min-width: 307px) and (max-width:337px){
  nav{
    height: 1.2em;
  }
  .nav-container li {
    margin: 0 0.15em;
    margin-top: -22.5%;
}
  .nav-container li a {
    font-size: 0.3em;
  }
}
@media(min-width: 292px) and (max-width:306px){
  nav{
    height: 1.2em;
  }
  .nav-container li {
    margin: 0 0.1em;
    margin-top: -23%;
}
  .nav-container li a {
    font-size: 0.2em;
  }
}
@media(min-width: 285px) and (max-width:291px){
  nav{
    height: 1.1em;
  }
  .nav-container li {
    margin: 0 0.06em;
    margin-top: -24.2%;
}
  .nav-container li a {
    font-size: 0.1em;
  }
}
@media(min-width: 561px) and (max-width:575px){
  nav{
    height: 2em;
  }
  .nav-container li {
    margin: 0 0.2em;
    margin-top: -13.5%;
}
  .nav-container li a {
    font-size: 0.7em;
  }
}
@media(max-width:287px){
  nav{
    height: 1.1em;
  }
  .nav-container li {
    margin: 0 0.06em;
    margin-top: -24.2%;
}
  .nav-container li a {
    font-size: 0.08em;
  }
}
@media(min-width: 774px) and (max-width:790px){
  nav{
    height: 3em;
  }
  .nav-container li {
    margin: 0 0.5em;
    margin-top: -3%;
}
  .nav-container li a {
    font-size: 0.8em;
  }
}
@media(min-width: 774px) and (max-width:775px){
  nav{
    height: 3em;
  }
  .nav-container li {
    margin: 0 0.5em;
    margin-top: -11%;
}
  .nav-container li a {
    font-size: 0.8em;
  }
}
@media(min-width: 632px) and (max-width:648px){
  nav{
    height: 2.2em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -13%;
}
  .nav-container li a {
    font-size: 0.7em;
  }
}
@media(min-width: 490px) and (max-width:505px){
  nav{
    height: 1.7em;
  }
  .nav-container li {
    margin: 0 0.3em;
    margin-top: -16%;
}
  .nav-container li a {
    font-size: 0.5em;
  }
}
@media(min-width: 433px) and (max-width:438px){
  nav{
    height: 1.7em;
  }
  .nav-container li {
    margin: 0 0.2em;
    margin-top: -18%;
}
  .nav-container li a {
    font-size: 0.45em;
  }
}
`
////////////////////////////////////////////////////////////////////
