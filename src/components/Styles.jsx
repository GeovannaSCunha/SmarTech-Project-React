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
export const StyledLogin = styled.main`
.form {
    width: 520px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 28%;
    margin-top:5%;
    background: #F8F8FF;
    padding: 20px;
    color:  #1a1a1a;
    text-align: center;
    position: absolute;
    font-size: 20px;
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
    margin-bottom:10%;
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

////////////////////////////////////

export const StyledFeed = styled.main`
  
  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-top: 10px;
  }

  input[type="radio"],
  input[type="checkbox"],
  input[type="text"],
  textarea {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }




`

