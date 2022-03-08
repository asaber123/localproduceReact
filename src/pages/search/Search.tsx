import * as React from "react";
import {useHistory} from "react-router-dom";

export function Search () {
    const getProduce = async () => {
        const response = await fetch(
          "https://localhost:7247/api/apiproduce",{
          method: "GET",
          headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
      };
      console.log(getProduce());

    return(
        <div>

            
        </div>
    );

}
