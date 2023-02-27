import React, {useState} from 'react';

export const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=${process.env.REACT_APP_GOOGLEBOOKS_KEY}&langRestrict=en`
    )
      .then(res => res.json())
      .then((data) => {
        console.log(data)
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text"
              placeholder="Search for a book"
              value ={query}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
