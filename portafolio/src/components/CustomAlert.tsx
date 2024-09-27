import styled from "styled-components";

interface CustomAlertProps {
  message: string[];
  type: "error" | "success";
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type }) => {
  return (
    <>
      {type === "error" ? (
        <ErrorMessageStyled>
          {message.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </ErrorMessageStyled>
      ) : (
        <SuccesMessageStyled>
          {message.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </SuccesMessageStyled>
      )}
    </>
  );
};

export default CustomAlert;

const ErrorMessageStyled = styled.p`
  background-color: red;
`;
const SuccesMessageStyled = styled.p`
  background-color: green;
`;
