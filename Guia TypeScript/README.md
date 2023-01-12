# TypeScript 
A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

## Tipagem
### Funções
Os argumentos devem ser tipados

```ts
function myFunction (nome:string, ticket:number){

}
```
Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void. Dessa maneira, tipamos dessa forma no TypeScript:
```ts
function showMessages(message: string):void {
    console.log(message)
}
```

### Tipagem explicita
Na tipagem explícita nós especificamos o qual será o tipo de cada variável.
```ts
user: string, ticket: number;
```
### Any
Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.
```ts
let info: any;
```
### Tipo na atribuição
O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.
```ts
let user = "João"
```


### UNION
O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:

```ts
function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`);
}
```

### GENERIC
O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma T (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

S → Representando State T → Representando Type K → Representando Key V → Representando Value E → Representando Element

Exemplo de um trecho de código utilizando generics:

```ts
function useState<T>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState<string>();
```

## Type
Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas. Veja o exemplo a seguir:
```ts
type IdType = string | number | undefined;

let userId: IdType;
```

### Type Assertions

Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.
<br>
Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

```ts
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
```

## Interface
O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface:

```ts
type TUser = {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}
```

## Array
A tipagem de arrays funciona da seguinte forma:
```ts
let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];
```
## Objeto
Como criar tipagens utilizando objetos no TypeScript.

Segue o exemplo:
```ts
type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})
```
### Opcional
Para informamos que uma propriedade é opcional inserimos o sinal de ?

Veja o exemplo:
```ts
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}
```

### Intersecção de tipos

A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

Segue o exemplo abaixo:
```ts
type User = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}
```