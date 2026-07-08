function SearchBar({ company, setCompany }) {

  return (

    <input
      type="text"

      placeholder="Enter company name..."

      value={company}

      onChange={(event) => setCompany(event.target.value)}

    />

  );

}

export default SearchBar;