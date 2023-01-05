const url="http://localhost:5500/api"

//Nosso servidor node-api-discover está rodando, estamos pegando informações dele

//GET
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent += JSON.stringify(response.data);
    })
    .catch(err => console.error(err))
}


//GET com parâmetros
function getUser(id) {
    axios.get(url+"/"+id)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userAvatar.src = response.data.avatar
    })
    .catch(err => console.error(err))
}

const user={
    name:"Delacruz",
    city:"vulgo RJ borah",
    avatar:"https://heloisatolipan.com.br/imagens/2019/10/20191009-dia07_palcofavela_delacruz_vans_ihf-16.jpg",
}

//POST
function postUser(user) {
    axios.post(url, user)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.error(err))
}

const userUpdate={
    name:"MC marcinho",
    city:"RJ",
    avatar:"https://www.zonasuburbana.com.br/wp-content/uploads/2021/06/Delacruz-ft.-MC-Marcinho-Rom%C3%A2ntico-90.jpg",
} 

//POST
function updateUser(id, userUpdate) {
    axios.put(url+"/"+id,userUpdate)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.error(err))
}

function deleteUser(id){
    axios.delete(url+"/"+id)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.error(err))
}

updateUser(3,userUpdate)
postUser(user);
deleteUser(5);
getUser(2)
getUsers();


