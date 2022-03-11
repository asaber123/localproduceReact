import React, { Component } from 'react';


//Creating a class with props, that will change depending if the user fill the form. 
 export class OrderForm extends Component<{},any> {
    constructor(props:any) {
        super(props)
        this.state = {
            CustomerName: String,
            PhoneNumber: Number,
            Date: new Date(),
            ProduceId: 15,
        }
        //If the user fill the form and press submit the value that was changed in the forms will be set. 
        this.changeName = this.changeName.bind(this)
        this.changePhoneNumber = this.changePhoneNumber.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //When the user is typing text on the input field, the onChange function will be triggered. 
    //The cuntion will then set the value on the input fieald to the new value that the user put in. 

    changePhoneNumber(event:any) {
        this.setState({
            PhoneNumber: event.target.value
        })
    }
    changeName(event:any) {
        this.setState({
            CustomerName: event.target.value
        })
    }

    //As a ´default, the whole page refresh when submit button is clicked. This function prevents it. We want the peron to be re-directed to the login page. 
    onSubmit = async (event:any) => {
        //Doing a prevent Default to prevent page refresh.
        event.preventDefault()
        //Evetything that the user has typed in into the input field and then sent into the onchange funciton is now stored in the 
        //varibale registered when submit button has been clicked. 
        const customer = {
            PhoneNumber: this.state.PhoneNumber,
            CustomerName: this.state.CustomerName,
            Date: this.state.Date,
            ProduceId: this.state.ProduceId
            
        }
        console.log(customer)
        postCustomer(customer);

        async function postCustomer(customer:any){
            const response = await fetch("https://localhost:7247/api/APIcustomer", {
                body: JSON.stringify(customer),
                method: "POST",
                headers:{'Content-Type': 'application/json'}
            })

            return response;
        }

    }

    //This is the structure of the form in html
    render() {
        return (
            <div className='formDiv'>
                {/* When submit button is clicked, then the onSubmit function will be activated. */}
                <form onSubmit={this.onSubmit}>
                    <label>Name:</label>
                    {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                    {/* The value will be set to the state */}
                    <input
                        type="text"
                        onChange={this.changeName}
                        value={this.state.CustomerName}
                        className='form-control form-group' />

                    <label>Phone Number:</label>
                    {/* On all inputs, the function that is on the onchange will be started when the user starts filling the form */}
                    {/* The value will be set to the state */}
                    <div>
                    <input
                        type="text"
                        onChange={this.changePhoneNumber}
                        value={this.state.PhoneNumber}
                        className='form-control form-group' />
                    </div>

                    <input type='submit' className='btn btn-success' value='submit' />
                </form>
            </div>
        )
    }
}

