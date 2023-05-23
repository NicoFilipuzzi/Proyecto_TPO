let url = 'https://jsonplaceholder.typicode.com/users' //variable donde hacemos referencia al origen de los datos
        fetch(url) //solicitud a la url (promesa)
            .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
            .then(data => mostrarData(data)) //llamamos a la función mostrardata()
            .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch
            
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