export const Tabledata = ({ title, price, deleteitem, id, day }) => {
  return (
    <tr>
      <td>{title} x1</td>
      <td>${price}</td>
      <td>
        <button class="btn btn-warning" onClick={() => deleteitem(id, day)}>
          delete
        </button>
      </td>
    </tr>
  );
};
