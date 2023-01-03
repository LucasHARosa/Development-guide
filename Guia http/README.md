# HTTP
### Iniciando servidor
json-server --watch db.json

## OPTIONS
É um verbo HTTP que irá nos dar informações sobre a disponibilidade de métodos da requisição. Ele é um método seguro, pois não faz alteração alguma, e é idempotente, pois sempre retornará a mesma coisa para a mesma requisição, o OPTIONS não manda nem recebe um Body, não é usado em formulários e nem é cacheable. Usamos para ver o métodos disponíveis

```terminal
curl -X OPTIONS http://localhost:3000/posts -i
```
Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE

## GET
Serve para pegar um recurso, ou seja, só pode receber dados. Ele é um método seguro e idempotente, que não pode enviar um Body no request, mas pode receber no response, ele também pode ser cacheable e é usado em alguns formulários.

```terminal
curl http://localhost:3000/posts\?q/=json
```

## HEAD
HEAD, que é semelhante ao GET, porém é recebido somente o cabeçalho. Ele é um método seguro e idempotente, não tem Body nem no envio nem na resposta, não é usado em formulários e é cacheable.

```terminal
curl -I http://localhost:3000/posts
```

## POST
Serve para publicar ou cadastrar um recurso. Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição, o verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.

```terminal
curl -d '{ "id": 2, "title": "json-server-2", "author": "lucas rosa" }' -H "Content-type: application/json" -X POST http://localhost:3000/posts
```

## PUT
Serve para criar ou atualizar um recurso, porém, diferentemente do POST é idempotente e normalmente usado para atualizar recursos. O status code de criação do PUT é 201, e o de atualização é o 204 ou 200. O verbo PUT não é seguro, pois altera dados no servidor, mas é idempotente, tem Body na requisição mas não na resposta e não é usado em formulários nem é cacheable.

```terminal
curl -d '{ "name": "lucas rosa" }' -H "Content-type: application/json" -X PUT http://localhost:3000/profile
```

## PATCH
Serve para modificar parcialmente um recurso, diferentemente do PUT, que é usado para modificar o recurso inteiro. Ele não é um verbo seguro nem idempotente, e recebe um Body tanto na requisição quanto resposta, não é usado em formulários e não é cacheable.

```terminal
curl -d '{ "title": "lucas rosa" }' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1
```

## DELETE
Serve para remover um recurso, e pode ser respondido com o código 202, que não foi processado mas já foi aceito, 204, que significa que o recurso não existe e 200, que significa que o conteúdo foi deletado. Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta, não é usado em formulários e não é cacheable.

```terminal
curl -X DELETE http://localhost:3000/posts/2
```

## Status code
A proposta do status code é ter uma comunicação mais clara entre o back-end com o cliente. Os status code do tipo 100 servem pra mostrar que a operação pode ser continuada sem problemas. Os status code do tipo 200 podem significar: 200 em si, significa que tudo está ok (GET e POST), 201, significa que o recurso foi criado (PUT), 204, significa que não há conteúdo (PUT e DELETE). Os status code do tipo 300 podem significar: 301, significa movido permanentemente, 308, significa redirecionamento permanente, 302, significa uma mudança temporária assim como o 307. Os status code o tipo 400 podem significar: 400, que significa que o pedido foi mal efetuado, 401, que significa que o pedido não teve autorização, 403, que significa que a autorização foi negada, 404, que o pedido não foi encontrado, 405, que significa que o método usado não é permitido e 429, que significa que foram efetuados muitos pedidos. Os do tipo 500: 500, que significa que ocorreu um erro desconhecido no servidor e o 503, que significa que o servidor está indisponível no momento (DEV DOCS)