const url="http://localhost:5500/api"

//Nosso servidor node-api-discover está rodando, estamos pegando informações dele
function getUsers() {
    fetch(url)//Por padrão o matodo é o GET
    .then((res) => res.json())
    .then((data) => {renderApiResult.textContent = JSON.stringify(data)}) //DOM})
    .catch((err) => console.log(err))
}

//GET Aqui pegamos as informações de um usuário especifico
function getUser (number){
    fetch(`${url}/${number}`)
    .then((res) => res.json())
    .then((data) => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch((err) => console.error(err))
}

// POST com o fetch, Colocar uma informação nova
function addUser(newUser){
    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newUser)//Corpo do meu POST
    })
    .then(res => res.json())
    .then(data => {
        alert.textContent = data
    })
    .catch((err) => console.error(err))
}

// PUT com FETCH, Atualizar uma info ja existente
function updateUser(updateuser){
    fetch(`${url}/1`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(updateuser)//casting
    })
    .then(res => res.json())
    .then(data => {
        alert.textContent = data
    })
    .catch((err) => console.error(err))
}

const updateuser={
    name:"Delacruz",
    city:"vulgo RJ borah",
    avatar:"https://heloisatolipan.com.br/imagens/2019/10/20191009-dia07_palcofavela_delacruz_vans_ihf-16.jpg",
}

const newUser ={
    name:"lucas",
    city:"brasilia",
    avatar:"https://avatars.githubusercontent.com/u/65405310?s=400&u=d0994855b6bd17826a213c8d08bf3c839b4017b7&v=4",
}
// DELETE em fetch
function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alert.textContent = data)
    .catch((err) => console.error(err))
}



//addUser(newUser);
//updateUser(updateuser);
getUsers();
getUser(1);
deleteUser(5)



