//Transformar temperatura (string) em outra unidade de temperatura
/*
function temp(temperatura){
    let tempnova;
    if(temperatura.toUpperCase().includes("F")){
        temperatura = temperatura.toUpperCase().replace("F", "");
        tempnova = ((Number(temperatura)-32)*(5/9)).toFixed(2);
        temperatura = String(tempnova)+"C";
    }
    else if(temperatura.toUpperCase().includes("C")){
        temperatura = temperatura.toUpperCase().replace("C", "");
        tempnova = ((Number(temperatura)*(9/5))+32).toFixed(2);
        temperatura = String(tempnova)+"F";
    }
    else{
       throw new Error("temperatura not valid");
    }
    console.log("temperatura transformada: ", temperatura);
}

try {
    temp("33F");
    temp("21C");
    temp("123f");
    temp("21C");
    temp("34c");
    temp("100C");
    temp("100F");
}catch(error){
    console.log(error.message);
}
*/


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
*/