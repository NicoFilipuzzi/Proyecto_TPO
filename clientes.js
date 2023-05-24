let url = 'https://jsonplaceholder.typicode.com/users' 
        fetch(url) 
            .then(response => response.json()) 
            .then(data => mostrarData(data)) 
            .catch(error => console.log("Ocurrió un error", error)) 
            
        const mostrarData = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i<data.length; i++){
                
                body += ` 
                    ${data[i].name}<br>
                    `
            }
            
            document.getElementById("data").innerHTML = body
        }