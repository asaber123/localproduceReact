//This is the about section

export function About() {
    return (
        <section className="about" id="about">
            <div className="info-text">
                <h2>How does it work?</h2>
                <p><b>Its all just about to keep it simple!</b></p> <br/>
            </div>
            <div className="steps">
            <div className="step">
                <h3>Step 1</h3>
                <div className="step-img"></div>
                <p>Find the produce you want to order online and look for a good pickup place</p>
            </div>
            <div className="step">
                <h3>Step 2</h3>
                <div className="step-img"></div>
                <p>Fill in your name and phonenumber to the product you want to order</p>
            </div>
            <div className="step">
                <h3>Step 3</h3>
                <div className="step-img"></div>
                <p>You will get a text message from the producer when and how the product can be picked up!</p>
            </div>
            </div>
        </section>
    );

}