let url = 'http://localhost:3000/api/users';
fetch(url)
    .then(res => res.json())
    .then(data => mostrarData(data))
    .catch(err => console.log(err))

const mostrarData = (data) => {

    console.log(data);
    let body = ''
    for(let i=0; i< data.length; i++){
        body += `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].password}</td>
                <td>${data[i].profession}</td>

            </tr> `
    }

    return document.getElementById('data').innerHTML = body


}
