import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import PokeModal from "./PokeModal";
import axios from "axios";

const MainPage = () =>{
    const [data,setdata]=useState([]);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [next,setNext]=useState();
    const [prev,setPrev]=useState();
    const [pokeDex,setPokeDex]=useState();

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
                    setNext(res.data.next);
                    setPrev(res.data.previous);
                    setdata([])
                    res.data.results.map(item=>{
                        axios.get(item.url)
                        .then(res=>{
                            setdata(state=>{
                                state=[...state,res.data]
                                return state;
                            })
                        })
                    })
                    window.scrollTo(0, 0)
                 })
    },[url])
    return(
        <>
            <div>
                <div>
                    <PokeCard pokemon={data}  infoPokemon={poke=>setPokeDex(poke)}/>  
                    <div>
                        {  prev && <button  className="btn btn-primary"   onClick={()=>{
                            setdata([])
                           setUrl(prev) 
                        }}>Previous</button>}

                        { next && <button  className="btn btn-primary" style={{margin:'2rem'}}  onClick={()=>{
                            setdata([])
                            setUrl(next)
                        }}>Next</button>}

                    </div>
                </div>
                <div>
                   <PokeModal data={pokeDex}/>
                </div>
            </div>
        </>
    )
}

export default MainPage