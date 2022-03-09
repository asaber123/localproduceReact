///import {useHistory} from "react-router-dom";
import React, { useEffect, useState } from 'react';


export function Search() {
    const [data, setData] = React.useState<any[]>([])
    const [producer, setProducer] = React.useState<any[]>([])
    React.useEffect(() => {
        const getProduce = async () => {
            await fetch("https://localhost:7247/api/apiproduce")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log(data)
                })
        };
        getProduce();
    }, []);
    React.useEffect(() => {
        const getProducer = async () => {
            await fetch("https://localhost:7247/api/apiproducer")
                .then((res) => res.json())
                .then((producer) => {
                    setProducer(producer);
                    console.log(producer)
                })
        };
        getProducer();
    }, []);

    const [isSearch, setSearch] = useState("");
    const [isSearchPickup, setPickupSeatch] = useState("");
    const [isSearchProducer, setSearchProducer] = useState("");
    const [isSearchTheme, setSearchTheme] = useState("");

    const arr = data.reverse().filter((q) => {
        if (isSearch === "") {
            return q;
        } else if (q.produceName.toLowerCase().includes(isSearch.toLowerCase())) {
            return q;
        } else {
            return "";
        }
    }).filter((q) => {
        if (isSearchPickup === "") {
            return q;
        } else if (q.pickupPlace.toLowerCase().includes(isSearchPickup.toLowerCase())) {
            return q;
        } else {
            return "";
        }
    }).filter((q) => {
        if (isSearchProducer === "") {
            return q;
        } else if (q.producerId.toString().includes(isSearchProducer)) {
            return q;
        } else {
            return "";
        }
    }).filter((q) => {
        if (isSearchTheme === "") {
            return q;
        } else if (q.theme.toString().includes(isSearchTheme)) {
            return q;
        } else {
            return "";
        }
    }).map((produce => {
        let item = "";
        for (let i = 0; i < producer.length; i++) {
            if (produce.producerId == producer[i].producerId) {

                item = producer[i].producerName;
            }
        }

        return (

            <div className="produce-div" id={produce.theme}>
                <div className="products">
                    <h3>{produce.produceName}</h3>
                    <p><b>Producer:</b> {item}</p>
                    <p><b>Price:</b> {produce.price}</p>
                    <p><b>Pickup Place: </b>{produce.pickupPlace}</p>
                    <p><b>Theme: </b>{produce.theme}</p>
                    <p><b>Description:</b> {produce.description}</p>
                </div>
                <button>Order product</button>
            </div>
        );
    }));

    return (
        <div className="search">
            <div className="search-alternative" >
                <input className="search-field" placeholder="Search.." type="search" onChange={(e) => { setSearch(e.target.value) }} /> <br />
                <select className="search-field" onChange={(e) => { setSearchProducer(e.target.value) }}> <option> Producer</option>{producer.map(e => {
                    return (

                        <option value={e.producerId}> {e.producerName} </option>)
                })
                }
                </select>
                <select className="search-field" onChange={(e) => { setSearchTheme(e.target.value) }}> <option> Theme</option>{data.map(e => {

                    return (

                        <option value={e.theme}> {e.theme} </option>)
                }
                )
                } </select>
            </div>
            {arr}
        </div>
    );

}

