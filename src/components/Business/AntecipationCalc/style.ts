import styled from "styled-components";

export const Container = styled.div`
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #ffff;

    height: 389px;
    width: 608px;

    border-radius: 4px;
  }

  .inputs {
    margin: 0 10%;

    form {
      display: flex;
      flex-direction: column;
      width: fit-content;

      label {
        text-align: left;
      }

      input {
        width: 251px;
        height: 37px;

        border: 1px solid #dde6e9;
        border-radius: 4px;
        
        :focus {
          outline: none;
        }
      }
      
      span {
        font-size: 0.8rem;
        color: #ff0000;
      }
    }
  }

  .results {
    margin: 0 5%;
    font-style: italic;

    li {
      
    }

    span {
      display: block;
      color: blue;
    }
  }
`;
