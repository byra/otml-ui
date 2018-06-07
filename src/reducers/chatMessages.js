import {v4} from "uuid";

export const chatMessages = (state = [], action) => {
    let userResponse = null;
    let customRequest = null;
    switch (action.type) {

        case "start":
            userResponse = null;
            customRequest = null;
            let time = new Date();
            if (action.payload !== null) {
                time = action.payload.tracker.latest_event_time;
                if (action.payload.tracker.latest_message.text === "Main Menu") {
                    userResponse = action.payload.tracker.latest_message.text;
                } else {
                    customRequest = action.payload.tracker.latest_message.text;
                }
            }
            return [
                ...state,
                {
                    time: time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Welcome to  One Trust Home Loans! My name is Tina."],
                    response: "I can help you with the following",
                    buttons: ["Buy a Home", "Home Loans", "Refinance"]
                }
            ];
        case "Greeting":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Hello there"],
                    response: "I am Tina, I can help you with the following",
                    url: null,
                    buttons: ["Buy a Home", "Refinance", "Home Loans"]
                }
            ];
        case "Bye":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Its my pleasure assisting today"],
                    response: "For other queries click on Main Menu.",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];


        case "Buy a Home":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Buy a Home") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with buying a home"],
                    response: "Please choose a category which suits you",
                    buttons: ["First Time Home Buyers", "How Much Home I Can Afford", "Steps To Buy A Home", "Main Menu"]
                }
            ];
        case "Refinance":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Refinance") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here is what I can help you out in refinance"],
                    response: "Please click on the one of the following for more information",
                    buttons: ["When To Refinance", "Mortgage Refinance Options", "Loan Town, USA", "Main Menu"]
                }
            ];
        case "Home Loans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Home Loans") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our home loans options"],
                    response: "Please select one of the following for more information",
                    buttons: ["FHA Home Loans", "VA Home Loans", "30 Years Fixed Mortgage", "15 Years Fixed Mortgage", "Jumbo Loans", "Main Menu"]
                }
            ];


        case "First Time Home Buyers":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "First Time Home Buyers") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2rdneGt",
                    reply: ["Buying your first home is a big deal!", "Here are the steps to be followed", "Get Pre-Approved", "Meet Your Real Estate Agent", "Understand The Basic Home Loan Programs", "Make a Down Payment"],
                    response: "You can learn more in the below link",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];
        case "How Much Home I Can Afford":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "How Much Home I Can Afford") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2I6gnZX",
                    reply: ["Get Pre-Approved To Understand Your Home Price Range, And Much More", "As a buyer understand the following", "What Is A Pre-Approval?", "Why Is A Pre-Approval Important?", "Difference! Pre-Approval Vs. Prequalification"],
                    response: "More can be found in the link below",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];
        case "Steps To Buy A Home":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Steps To Buy A Home") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2JGXry4",
                    reply: ["Steps in the Home Buying Process", "1. Get pre-approved", "2. Choose a real estate agent", "3. Find your dream home", "4. Make an offer", "5. Start the home loan process", "6. Close the loan", "7. Move in"],
                    response: "More can be found in the link below",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];




        case "When To Refinance":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "When To Refinance") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2KrnbzT",
                    reply: ["In today’s market, with rates constantly fluctuating, a good question to ask yourself is “when was the last time I checked on my mortgage interest rate?”", "So if it’s been years, or even just six months since you’ve checked in on your home financing goals", "It’s time to have your mortgage reviewed"],
                    response: "More can be found in the link below",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];


        case "Mortgage Refinance Options":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Mortgage Refinance Options") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2rdNZeS",
                    reply: ["When it comes to mortgage refinancing, we offer a TON of options", "1. Fixed Rate Mortgages", "2. FHA Streamline", "3. FHA Cashout", "4. FHA Home Improvement", "5. VA Streamline", "6. VA Cashout"],
                    response: "Here are are our hot deals right now",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];
        case "Loan Town, USA":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Loan Town, USA") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2Ks9Ln7",
                    reply: ["When you visit LoanTown, USA, you can be sure to get only a straightforward and honest approach to your best loan options.", "So come on in, meet Ned, and take a look around, we think you’ll want to stay a while"],
                    response: "Click on the link below to visit Loan Town, USA",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];

        case "FHA Home Loans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "FHA Home Loans") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2HJwSrD",
                    reply: ["FHA home loans are a popular choice among first time homebuyers, as well as those looking to refinance.", "Here are the details you need to know", "1. Do You Qualify For An FHA Home Loan?", "2. FHA Down Payment Requirements", "3. What Is An FHA Streamline?", "4. FHA Home Improvement Loan", "5. FHA Mortgage Insurance"],
                    response: "You can find more information in the following link",
                    cardDetails:[{title:"No Closing Cost", imageURL:"https://bit.ly/2jkNWJG",  url:"https://bit.ly/2rgplu3",rating:5, description:"Zero closing cost for loans greater than $300,000", feature:"Features"}, {title:"Great Discount", imageURL:"https://bit.ly/1fmR9wR", url:"https://bit.ly/2rgplu3",rating:4, description:"$250 closing cost reduction when signing up ",feature:"Features"}],
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];
        case "VA Home Loans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "VA Home Loans") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2rb8usK",
                    reply: ["The VA Home Loan program was designed for the heroes of our country, providing Service-members, Veterans and eligible surviving spouses", "1. VA Streamline Refinance", "2. VA Cashout Refinance", "3. Buying With A VA Home Loan"],
                    response: "You can find more information in the following link",
                    cardDetails:[{title:"No Closing Cost", imageURL:"https://bit.ly/2I9ao6O",  url:"https://bit.ly/2rgplu3",rating:5, description:"Zero closing cost for loans greater than $200,000", feature:"Features"}, {title:"Great Discount", imageURL:"https://cnb.cx/2ma8eYi", url:"https://bit.ly/2rgplu3",rating:5, description:"$500 closing cost reduction when signing up ",feature:"Features"}],
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];
        case "30 Years Fixed Mortgage":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "30 Years Fixed Mortgage") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/1MLlsog",
                    reply: ["The 30 year fixed rate mortgage is the most popular mortgage, especially among first time home buyers, and has been for quite some time", "There are a variety of reasons that it’s so popular: its affordability, stability and flexibility.", "The beauty is, because you’re paying it off over 30 years, your monthly mortgage payments are likely to be lower as compared to other shorter-term mortgages."],
                    response: "You can find more information in the following link",
                    cardDetails:[{title:"Lower Interest Rate", imageURL:"https://bit.ly/2jkNWJG",  url:"https://bit.ly/2rgplu3",rating:5, description:"30 year fixed rate of 4% interest rate", feature:"Features"}, {title:"Great Discount", imageURL:"https://bit.ly/1fmR9wR", url:"https://bit.ly/2rgplu3",rating:4, description:"$250 closing cost reduction when signing up ",feature:"Features"}],
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];

        case "15 Years Fixed Mortgage":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "15 Years Fixed Mortgage") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2KuqAxB",
                    reply: ["Purchasing or refinancing with a 15 year fixed rate mortgage is the new trend", "Many homeowners are refinancing from a 30 year fixed mortgage to a 15 for less interest", "Paying Less Interest = More Savings"],
                    response: "You can find more information in the following link",
                    cardDetails:[{title:"Lower Interest Rate", imageURL:"https://bit.ly/2jkNWJG",  url:"https://bit.ly/2rgplu3",rating:5, description:"Offer of 3.5% APR for credit scores 760 and higher", feature:"Features"}, {title:"Great Discount", imageURL:"https://bit.ly/1fmR9wR", url:"https://bit.ly/2rgplu3",rating:4, description:"$250 closing cost reduction when signing up ",feature:"Features"}],
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];


        case "Jumbo Loans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Jumbo Loans") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://bit.ly/2JHWR32",
                    reply: ["Jumbo Loan just a very large home mortgage that fall within the loan amount limits established by the FHFA", "Jumbo loans are available for:", "1. Primary residences", "2. Second homes", "3. Vacation homes", "4. Investment properties"],
                    response: "You can find more information in the following link",
                    buttons: ["Helpful", "Not Helpful", "Main Menu"]
                }
            ];

        case "Phone Number":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: [],
                    response: "You will receive call from one of our experts shortly. Thank you for your patience",
                    buttons: ["Main Menu"]
                }
            ];


        case "Helpful":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Helpful") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: [],
                    response: "We are happy to assist you today. For other queries click on Main Menu.",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];
        case "Not Helpful":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Not Helpful") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: [],
                    response: "What is your phone number so that we can connect to our expert?",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];


        default:
            return state;
    }
};

