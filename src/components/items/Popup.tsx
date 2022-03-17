import React from 'react';
// TODO, (not done with this yet)
export function Popup(props:any){
    return (props.trigger)?(
        <div> <p>This is a popup</p>
        {props.children}

        </div>
    ):null;
}