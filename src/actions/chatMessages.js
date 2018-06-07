import fetch from "cross-fetch";

export const onRequest = (request) =>{
    return dispatch => {
        fetch("http://54.213.230.201:5010/conversations/verizon/parse?q=" + request)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return res.json();
            })
            .then(response => {
                dispatch(receivedData(response));
            })
            .catch(err => {
                console.error(err);
            });

    };
};

const receivedData =(response)=>{
    let type="";
    switch(response.tracker.latest_message.intent.name){
        case "Greeting":
            type="Greeting";
            break;
        case "Bye":
            type="Bye";
            break;
        case "Main Menu":
            type="start";
            break;


        case "Buy a Home":
            type="Buy a Home";
            break;
        case "Refinance":
            type="Refinance";
            break;
        case "Home Loans":
            type="Home Loans";
            break;


        case "First Time Home Buyers":
            type = "First Time Home Buyers";
            break;
        case "How Much Home I Can Afford":
            type = "How Much Home I Can Afford";
            break;
        case "Steps To Buy A Home":
            type = "Steps To Buy A Home";
            break;


        case "When To Refinance":
            type = "When To Refinance";
            break;
        case "Mortgage Refinance Options":
            type = "Mortgage Refinance Options";
            break;
        case "Loan Town, USA":
            type = "Loan Town, USA";
            break;


        case "FHA Home Loans":
            type = "FHA Home Loans";
            break;
        case "VA Home Loans":
            type = "VA Home Loans";
            break;
        case "30 Years Fixed Mortgage":
            type = "30 Years Fixed Mortgage";
            break;
        case "15 Years Fixed Mortgage":
            type = "15 Years Fixed Mortgage";
            break;
        case "Jumbo Loans":
            type = "Jumbo Loans";
            break;

        case "Phone Number":
            fetch("http://54.213.230.201:3232/otml/twilio/?phone=" + response.tracker.latest_message.entities[0].value)
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return res.json();
                })
                .then(response => {
                    dispatch(receivedData(response));
                })
                .catch(err => {
                    console.error(err);
                });
            type = "Phone Number";
            break;

        case "Not Helpful":
            type="Not Helpful";
            break;
        case "Helpful":
            type="Helpful";
            break;
    }
    return{
        type:type,
        payload:response
    };
};

export const onOpen = () =>{
    return{
        type:"start",
        payload:null
    };
};