import { useState, useEffect } from "react";
import Clist from './components/Clist';
import axios from 'axios'

const App = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response)=>{
        setCountry(response.data)
      })
  },[])

  const filterList = country.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()) )

  const onSearch = (event) =>{
    setSearch(event.target.value)
    setSelectedCountry(null)
  }

  return(
    <div>
      <form>
          find countries <input value={search} onChange={onSearch}/>
      </form>
      <Clist country={filterList} selected={selectedCountry} onSelect={(c)=> setSelectedCountry(c)} />
    </div>
  );
}

export default App