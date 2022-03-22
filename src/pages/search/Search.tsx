///import {useHistory} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
//import { Popup } from '../../components/items/Popup';



export function Search() {

    //Using react hooks UseState to store data in variables 
    const [data, setData] = React.useState<any[]>([])
    const [producer, setProducer] = React.useState<any[]>([])
    const [openForm, setOpenForm] = useState(false);
    //const [popup, setPopUp] = useState(false);
    const [isSearch, setSearch] = useState("");
    const [isSearchProducer, setSearchProducer] = useState("");
    const [isSearchTheme, setSearchTheme] = useState("");
    const [customerName, setCustomerName] = useState<String>();
    const [phoneNumber, setPhoneNumber] = useState<Number>();
    const [produceId, setProduceId] = useState<Number>();
    const [produceName, setProduceName] = useState<String>();
    const [price, setPrice] = useState<Number>();

    //Changing the url for fetch requests depending on local or published server. 
    const publicURL = "https://localproduce.azurewebsites.net";
    const localURL = "https://localhost:7247";


    //This is a function that starts when user have filled in the form to order a product. The data is then fetched as a post request to the server. 
    async function orderProduce() {
        const customer = ({
            customerName: customerName,
            phoneNumber: phoneNumber,
            produceId: produceId,
        });
        console.log(customer)
        const response = await fetch(`${publicURL}/api/APIcustomer`, {
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

    //Fetch request to get all the produce form the server
   useEffect(() => {
        const getProduce = async () => {
            await fetch(`${publicURL}/api/apiproduce`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log(data)
                })
        };
        getProduce();
    }, []);
    //fetching the data from producer to be able to compare producer id and producer id that is in the produce to show which user belongs wo wich produce. 
    useEffect(() => {
        const getProducer = async () => {
            await fetch(`${publicURL}/api/apiproducer`)
                .then((res) => res.json())
                .then((producer) => {
                    setProducer(producer);
                    console.log(producer)
                })
        };
        getProducer();
    }, []);


//Here I'm mappiong an array with all information of the produce that has been published. 
//I also do filter functions that takes the input string in the search form or selection option to filter the data. 
    const arr = data.reverse().filter((q) => {
        if (isSearch === "") {
            return q;
        } else if (q.produceName.toLowerCase().includes(isSearch.toLowerCase()) ||
         q.pickupPlace.toLowerCase().includes(isSearch.toLowerCase()) || 
        q.description.toLowerCase().includes(isSearch.toLowerCase())) {
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
    })
    //Here I compare the id of the producer in the produce table and in the producer table. Then I map out the items.  
    .map((produce => {
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
                            <img src={publicURL + "/img/" + produce.imgName} />
                        </div>
                        <p><b>Producer:</b> {item}</p>
                        <p><b>Price:</b> {produce.price}</p>
                        <p><b>Pickup Place: </b>{produce.pickupPlace}</p>
                        <p><b>Theme: </b>{produce.theme}</p>
                        <p><b>Description:</b> {produce.description}</p>
                    </div>
                    {/* If the user clicks on the button "order product" a form will display where user can order from. Some data is stored an used for set state  */}
                    <button onClick={() => { setOpenForm(!openForm); setProduceId(produce.produceId); setProduceName(produce.produceName); setPrice(produce.price)}}>Order product</button>
                </div>
            );
        }));



return (
    <section className="search" id="search">
        {/* <Popup trigger={popup}></Popup> */}
        {/* Here is teh search forms and select boxes */}
        <div className="search-alternative" >
            <h2>Search product</h2>
            <p>(Product name, pickup-area or description)</p>
            <input className="search-field" placeholder="Search.." type="search" onChange={(e) => { setSearch(e.target.value) }} /> <br />
            <p>Select by..</p>
            {/* In the select box I'm mapping the producers name from the producer table to fill the select box so that it will automatically will be updated from the backend system */}
            <select className="search-field" onChange={(e) => { setSearchProducer(e.target.value) }}> 
            <option value="">Choose producer</option>{producer.map(e => {
                return (
                    
                    <option value={e.producerId}> {e.producerName} </option>)
            })
            }
            </select>
            {/* In this select box I just selected to display the options that the product can have as a theme */}
            <select className="search-field" onChange={(e) => { setSearchTheme(e.target.value) }}>
                <option value="">Choose theme</option>
                <option>Fruit and vegetables</option>
                <option>Eggs and dairy</option>
                <option>Meat</option>
                <option>Plants and seed</option>
                <option>Bread and bakery</option>
            </select>
        </div>

            {/* Priting out the array of produce.  */}
        {arr}



            {/* This is the form that will be displayed when the user clicks "order product" */}
        <div className={openForm ? "form-div-open" : "form-div-closed"}>
            <div className="order">
                <div className="info">
                    {/* These values has been stored in state */}
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

                    {/* If user then clicks "order", the order form will be set to false and it will close, as well as starting the funciton orderProduce that will fetch the data with post request */}
                    <button onClick={() => {orderProduce();setOpenForm(!openForm)}}> Order</button>
                </form>
                {/* Button to close the form */}
                <p className="go-back" onClick={() => setOpenForm(!openForm)}><AiOutlineArrowLeft />  Go back</p>
            </div>

        </div>


    </section>
);

}

