import data from "./data.js";

//
const logoTag = document.getElementById('logo')
logoTag.src = data.logo
//
const form = document.getElementById("form");
const name = document.getElementById("name");
const message = document.getElementById("message");

const nameSpan = document.getElementById("nameSpan");
const emailSpan = document.getElementById("emailSpan");
const messageSpan = document.getElementById("messageSpan");

const apiEndPoint = data.formSpreeApi


async function handleSubmit(event) {

    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);


    if(name.value.trim ==='' || name.value.toString().length<2 ){
        nameSpan.classList.remove('hidden'); 
        return
    }else {
        nameSpan.classList.add('hidden'); 
    }

    if(message.value.trim ==='' || message.value.length<2 ){
        messageSpan.classList.remove('hidden'); 
        return
    }else {
        messageSpan.classList.add('hidden'); 
    }



    fetch(apiEndPoint, 
        {  method: 'POST',
            body: data,
            headers: {'Accept': 'application/json'}
        })
        .then(response => 
            {   
                if (response.ok) {  
                    status.innerHTML = "Thanks for your submission!"; 
                    form.reset() 
                }else {
                    console.log('else part')
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) { 
                            console.log('errors',data)  
                            nameSpan.innerHTML = data["errors"].map(error => error["message"]).join(", ") 
                        } else {   
                        //    nameSpan.innerHTML = "Oops! There was a problem submitting your form"  
                        }
                    }
                )}
            }
                
            ).catch(error => {
                console.log('errors',error)  

                // nameSpan.innerHTML = "Oops! There was a problem submitting your form"
            }
            );
                }
                
    form.addEventListener("submit", handleSubmit)


                