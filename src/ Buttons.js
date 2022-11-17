import './App.css';

function Buttons({filteredProducts}) {
    return(
        <div className='buttons-container'>
            <button className="findItem" onClick={ () => filteredProducts("advent")}>advent calendars</button>
            <button className="findItem" onClick={ () => filteredProducts("tree")}>christmas tree decor</button>
            <button className="findItem" onClick={ () => filteredProducts("home")}>home decoration</button>
            <button className="findItem" onClick={ () => filteredProducts("candle")}>candles</button>
        </div>
    )
}

export default Buttons;