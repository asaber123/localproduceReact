///import {useHistory} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { PerModuleNameCache } from 'typescript';
import{AiOutlineArrowLeft} from 'react-icons/ai';



export function Search() {
    const [data, setData] = React.useState<any[]>([])
    const [producer, setProducer] = React.useState<any[]>([])
    const [openForm, setOpenForm] = useState(false);
    const [isSearch, setSearch] = useState("");
    const [isSearchProducer, setSearchProducer] = useState("");
    const [isSearchTheme, setSearchTheme] = useState("");
    const [customerName, setCustomerName] = useState<String>();
    const [phoneNumber, setPhoneNumber] = useState<Number>();
    const [produceId, setProduceId] = useState<Number>();
    const [produceName, setProduceName] = useState<String>();
    const [price, setPrice] = useState<Number>();



    async function orderProduce() {
        const customer = ({
            customerName: customerName,
            phoneNumber: phoneNumber,
            produceId: produceId,
        });
        console.log(customer);


        const response = await fetch("https://localhost:7247/api/APIcustomer", {
            body: JSON.stringify(customer),
            method: "POST",
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            
        
        return response;
       
    };

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



    const arr = data.reverse().filter((q) => {
        if (isSearch === "") {
            return q;
        } else if (q.produceName.toLowerCase().includes(isSearch.toLowerCase()) || q.pickupPlace.toLowerCase().includes(isSearch.toLowerCase()) || q.description.toLowerCase().includes(isSearch.toLowerCase())) {
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
            <div className="produce-div" id={produce.theme.replace(/ /g, '')} >
                {console.log(produce.theme.replace(/ /g, ''))}
                <div className="products">

                    <div className="centered-div">
                        <h3>{produce.produceName}</h3>
                        <img src={"https://localhost:7247/img/" + produce.imgName} alt="" />
                    </div>
                    <p><b>Producer:</b> {item}</p>
                    <p><b>Price:</b> {produce.price}</p>
                    <p><b>Pickup Place: </b>{produce.pickupPlace}</p>
                    <p><b>Theme: </b>{produce.theme}</p>
                    <p><b>Description:</b> {produce.description}</p>
                </div>
                <button onClick={() => { setOpenForm(!openForm); setProduceId(produce.produceId); setProduceName(produce.produceName); setPrice(produce.price) }}>Order product</button>
            </div>
        );
    }));


    return (
        <div className="search">
            <div className="search-alternative" >
                <input className="search-field" placeholder="Search.." type="search" onChange={(e) => { setSearch(e.target.value) }} /> <br />
                <select className="search-field" onChange={(e) => { setSearchProducer(e.target.value) }}> <option value="">Choose producer</option>{producer.map(e => {
                    return (
                        // TODO: filter so that it works
                        <option value={e.producerId}> {e.producerName} </option>)
                })
                }
                </select>
                <select className="search-field" onChange={(e) => { setSearchTheme(e.target.value) }}>
                    <option value="">Choose theme</option>
                    <option>Fruit and vegetables</option>
                    <option>Eggs and dairy</option>
                    <option>Meat</option>
                    <option>Plants and seed</option>
                    <option>Bread and bakery</option>
                </select>
            </div>



            {arr}




            <div className={openForm ? "form-div-open" : "form-div-closed"}>
                <div className="order">
                    <div className="info">
                        <h3>{produceName}</h3>
                        <h4>{price}:-</h4>
                    </div>
                    {/* When submit button is clicked, then the onSubmit function will be activated. */}
                    <form>

                        <label>Name: <br />
                            {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                            {/* The value will be set to the state */}
                            <input
                                type="text"
                                onChange={(e) => setCustomerName(e.target.value)} />
                        </label>
                        <br />

                        <label>Phone: <br />
                            {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                            {/* The value will be set to the state */}
                            <input
                                type="number"
                                onChange={(e) => { setPhoneNumber(e.target.valueAsNumber); setProduceId(produceId) }} />
                        </label>


                        <button onClick={() => orderProduce()}> Order</button>
                    </form>
                    <p className="go-back" onClick={() => setOpenForm(!openForm)}><AiOutlineArrowLeft/>  Go back</p>
                </div>

            </div>


        </div>
    );

}

