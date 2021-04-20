export default function SearchInput({
  labelText,
  placeholderText,
  name,
  inputState,
  onChange,
  classesInput,
}) {
  return (
    <div className="w-100">
      <label htmlFor={name} className="form-label orange-light">
        {labelText}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={inputState}
        onChange={onChange}
        className={classesInput}
        placeholder={placeholderText}
      />
    </div>
  );
}
