import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import Router from "next/router";
import useForm from "../lib/useForm";

const UPDATE_STATUS_MUTATION = gql`
  mutation UPDATE_STATUS_MUTATION($id: ID!, $status: String) {
    updateClimb(id: $id, data: { status: $status }) {
      name
    }
  }
`;

export default function UpdateStatusForClimb({ climb }) {
  const { inputs, handleChange } = useForm({
    status: climb.status,
  });

  const [updateStatus, { loading, data, error }] = useMutation(
    UPDATE_STATUS_MUTATION
  );

  return (
    <div>
      <div>
        <strong>
          This is the update status for climb component for {climb.name}:
          {climb.id}.
        </strong>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await updateStatus({
            variables: {
              id: climb.id,
              status: inputs.status,
            },
          });
          Router.push({
            pathname: `../${climb.id}`,
          });
        }}
      >
        <select
          type="select"
          id="status"
          name="status"
          value={climb.status}
          onChange={handleChange}
        >
          <option value="idle">Done / Idle</option>
          <option value="assess">Assess Further</option>
          <option value="requiresWork">Requires Work</option>
          <option value="inProgress">Work in Progress</option>
        </select>
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
}
