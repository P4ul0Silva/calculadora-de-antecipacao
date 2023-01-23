import styled from "styled-components";

export const Container = styled.div`
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--container-background-color);
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--wrapper-primary-color);

    height: 389px;
    width: 608px;

    border: 1px solid var(--wrapper-border-color);
    border-radius: 4px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 8%;

    height: inherit;

    h2 {
    font-size: 24px;
    line-height: 48px;
    font-weight: 700;
    color: var(--title-color);
  };
    form {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    
    label {
      font-size: 14px;
      line-height: 16px;
      color: #656565;
      text-align: left;
    }
      
      input {
        width: 251px;
        height: 37px;
        padding: 5px;

        border: 1px solid #dde6e9;
        border-radius: 4px;

        :focus {
          outline: none;
        }
      }
      
      span {
        font-size: 11px;
        line-height: 13px;

        color: #CECECE;
      }
    }
  }

  .results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 42px;
    color: var(--text-secondary-color);

    padding: 0 5%;

    height: inherit;

    font-style: italic;

    background-color: var(--wrapper-secondary-color);

    h3 {
      color: var(--title-secondary-color);
      border-bottom: 1px solid rgba(93, 156, 236, .3);
      font-style: italic;
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      
    }

    li {
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      line-height: 50px;
    }
  }
`;
