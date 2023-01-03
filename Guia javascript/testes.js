function getTodosOsUsuarios () {
    return new Promise((resolve, reject) => {
      reject(new Error('Não foi possível recuperar a lista de usuários'))
    })
  }
  
  getTodosOsUsuarios()
    .catch(err => console.log(err)) 