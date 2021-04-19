import { Link } from 'react-router-dom';

export default function FilterBtns({ links, handleSetHideOnClick }) {
  const buttons = [];

  for (const [text, link] of Object.entries(links)) {
    const button = (
      <Link key={text} to={link} onClick={handleSetHideOnClick}>
        <button className="btn btn-orange mx-auto mt-3 mb-3">{text}</button>
      </Link>
    );
    buttons.push(button);
  }

  return (
    <div className="w-100 d-flex flex-wrap justify-content-between">
      {buttons}
    </div>
  );
}
