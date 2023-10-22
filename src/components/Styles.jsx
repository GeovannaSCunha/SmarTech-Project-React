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
export const StyledLogin = styled.main`
.form {
    width: 520px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 28%;
    margin-top:10%;
    background: #F8F8FF;
    padding: 20px;
    color:  #1a1a1a;
    text-align: center;
    font-size: 20px;
    border-radius: 15px;
    margin-bottom:15%;

  }
  
  .form input {
    width: 500px;
    display: inline-block;
    position: relative;
    outline: none;
    border: 2px solid #191970;
    background: transparent;
    padding: 20px 10px;
    border-radius: 5px;
    transition: .3s;
    color: white;
    font-size: 20px;
  }
  
  .form input:focus {
    background: #191970;
  }
  
  button {
    padding: 12.5px 30px;
    border: 0;
    border-radius: 100px;
    background-color: #191970;
    color: #ffffff;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;

  }
  
  button:hover {
    background-color: #4169E1;
    box-shadow: 0 0 20px #6fc5ff50;
    transform: scale(1.1);
  }
  
  button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }
  
  @media screen and (max-width: 768px) {
    .form {
      width: 90%; 
      margin-left: 5%; 
      font-size: 16px; 
    }
    
    .form input {
      width: 100%; 
      font-size: 16px; 
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .form {
      width: 70%; 
      margin-left: 15%; 
      font-size: 18px; 
    
    .form input {
      width: 100%; 
      font-size: 18px; 
    }
  }
  @media screen and (min-width: 1025px) {
    .form {
      width: 520px; 
      margin-left: 28%; 
      font-size: 20px; 
    }
    
    .form input {
      width: 500px; 
      font-size: 20px; 
    }
  }

}


`

////////////////////////////////////////////
export const StyledFeed = styled.main`
  
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10%;
  margin-bottom:10%;
  box-shadow: 2px 0px 2px 2px;
}

h4 {
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  text-align:center;
}

h5 {
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align:center;
}

.input {
  width: 100%;
  padding: 25px;
  margin-bottom: 10px;
  border-radius: 15px;
  box-shadow: 7px 6px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

#v{
  margin-left:50%;
}





`

