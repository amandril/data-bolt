import AddHardwareToClimb from "../../../components/AddHardwareToClimb";
import styled from "styled-components";

const AddToStyle = styled.div`
  position: relative;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr;
  padding: 100px;
  .above {
    font-size: 1.5rem;
  }
`;

const ClimbName = styled.h1`
  font-family: "Roboto Condensed";
  font-size: 2.5rem;
  margin: 0;
  line-height: 3rem;
`;

const FormSectionStyle = styled.div`
  margin: 0;
  padding: 3rem 0 10rem;
  background-color: #eeeeee;
  /* margin-bottom: 10rem; */
`;

export default function addHardwarePage({ query }) {
  console.log(query);
  return (
    <div>
      <AddToStyle>
        <div className="above">Add hardware to</div>
        <ClimbName>{query.name}</ClimbName>
      </AddToStyle>
      <FormSectionStyle>
        <AddHardwareToClimb id={query.id} />
      </FormSectionStyle>
    </div>
  );
}
