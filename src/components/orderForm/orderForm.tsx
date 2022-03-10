import React, { useState } from 'react';

// const defaultFormData ={
//     customerName:"",
//     phoneNumber:"",

// };


// export default function orderForm(){
//     const[formData, setFormData] = useState(defaultFormData);
//     const {customerName, phoneNumber} = formData;

    

//     const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
//         setFormData({prevState} =>({
//             ...prevState,
//             [e.target.id]:e.target.value,
//         }));
//     };
//     const onSubmit =(e:React.FormEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         console.log(formData);
//         setFormData(defaultFormData);
//     }
//     return(
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type="text" placeholder="customerName" value={customerName} id="customerName" onChange={onChange}/>
//                 <input type="text" placeholder="phoneNumber" value={phoneNumber} id="phoneNumber" onChange={onChange}/>
//                 <button type="submit">order</button>
//             </form>
//         </div>
//     )

// }