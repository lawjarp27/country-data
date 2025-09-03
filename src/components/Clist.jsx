const Clist = (props) =>{
    let dispText = '';
    
    if(props.selected){
        return(
            <div>
                <h1>{props.selected.name.common}</h1>
                <p>Capital {props.selected.capital}</p>
                <p>Area {props.selected.area}</p>
                <h2>Languages</h2>
                <ul>
                    {Object.keys(props.selected.languages).map((lang) => <li key={lang}>{props.selected.languages[lang]} </li>)}
                </ul>
                <img src={props.selected.flags.png} />
            </div>
        );
    }

    if(props.country.length>10){
        dispText = 'too many matches specify another filter'
        return  <p>{dispText}</p>
    }else if(props.country.length>1){
        return(
            <div>
                <p>{dispText}</p>
                {props.country.map((nation)=>(<p key={nation.name.common}>{nation.name.common}
                    <button onClick={() => props.onSelect(nation)}>show</button>
                </p>))}
            </div>
        );
    }else if(props.country.length==1){
        return(
            <div>
                <h1>{props.country[0].name.common}</h1>
                <p>Capital {props.country[0].capital}</p>
                <p>Area {props.country[0].area}</p>
                <h2>Languages</h2>
                <ul>
                    {Object.keys(props.country[0].languages).map((lang) => <li key={lang}>{props.country[0].languages[lang]} </li>)}
                </ul>
                <img src={props.country[0].flags.png} />
            </div>
        );
    }
    
}

export default Clist 