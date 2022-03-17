import React from 'react';

export function Popup(props:any){
    return (props.trigger)?(
        <div> <p>This is a popup</p>
        {props.children}

        </div>
    ):null;
}