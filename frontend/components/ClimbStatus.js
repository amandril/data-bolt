import styled from "styled-components";

const StatusStyle = styled.div`
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  padding: 5px;
`;

export default function ClimbStatus({ climb }) {
  return (
    <StatusStyle className={"status-" + climb.status}>
      Status: {climb.status}
    </StatusStyle>
  );
}
