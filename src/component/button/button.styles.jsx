import styled from "styled-components";

export const BaseButton=styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

export const GoogleSignIn=styled(BaseButton)`  
    background-color: #4285f4;
    color: white;
  
    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;
/*How this works:
styled component comes with this feature where one new style component can be created which all extends all the
css which its parents have and have some more which are require in the above example this is below senerio
.button-container {
    
  
    &.google-sign-in {
      
    }
  }

  kind of nesting is followed here.
 */
export const Inverted=styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;