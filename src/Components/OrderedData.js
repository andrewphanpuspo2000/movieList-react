export const OrderedData = ({ name, email, total }) => {
  if (total <= 1)
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{total} ticket</td>
      </tr>
    );
  if (total > 1)
    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{total} tickets</td>
      </tr>
    );
};
