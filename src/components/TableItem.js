const TableItem = ({
  name,
  type,
  description,
  price,
  quantityOfStock,
  currency,
}) => {
  return (
    <>
      <td>{name}</td>
      <td>{type}</td>
      <td>{description}</td>
      <td className={`${currency}`}>{price}</td>
      <td>{quantityOfStock}</td>
    </>
  );
};

export default TableItem;
