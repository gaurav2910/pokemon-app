import React from "react";
import '../css/style.css'



const PokeCard = ({ pokemon, infoPokemon }) => {
    const onClick = item =>{
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
        infoPokemon(item)
    }
    return (
        <div class='pokecard'>
            {
                pokemon.map((item) => {
                    return (
                        <>

                            <div class="card" key={item.id} style={{ width: '18rem' }}>
                                <img className="card-img-top" src={item.sprites.front_default} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <h5 className="card-title">{item.id}</h5>
                                    <h5 className="card-title">{item.types[0].type.name}</h5>
                                    <button  className="btn btn-primary" onClick={()=>onClick(item)}>Click To See Detail</button>
                                </div>
                            </div>
                            
                        </>
                    )
                })
            }

        </div>
    )
}
export default PokeCard