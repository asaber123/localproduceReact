///import {useHistory} from "react-router-dom";
import React, { useEffect, useState } from 'react';


export function Search() {
    const [data, setData] = React.useState<any[]>([])
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



    // const getProduce = async () => {
    //     const response = await fetch(
    //       "https://localhost:7247/api/apiproduce",{
    //       method: "GET",
    //       headers: {'Content-Type': 'application/json'}
    //     });
    //     const data = await response.json();
    //   };
    //   console.log(getProduce());

    const arr = data.reverse().map((produce => {
        return (
            <div>

                <p>name: {produce.produceName}</p>
            </div>
        );
    }));

    return (
        <div>
        {arr}
        </div>
    );

}

