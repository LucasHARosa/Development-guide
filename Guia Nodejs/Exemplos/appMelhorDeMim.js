// Aplicativo para perguntas e respostas no terminal
// Execute com "node appMelhorDeMim.js"

const questions = [
    "Consegui avançar em tudo que pretendi fazer? Se não, porque?",
    "Aprendi algo hoje?",
    "Algo me deixou triste hoje?",
    "Algo me deixou feliz hoje?",
];

const ask = (index = 0)=>{
    process.stdout.write("\n\n"+ questions[index]+" > ");
}
ask()

const answers = [];
process.stdin.on("data",data=>{
    answers.push(data.toString().trim());
    if(answers.length<questions.length){
        ask(answers.length) // puxa a próxima pergunta para a a impressão
    }else{
        //console.log(answers);
        process.exit() // O processo para de ouvir
    }
})

process.on('exit', ()=>{ // O processo fica ouvindo um exit acontecer
    for(var i=0; i<questions.length; i++){
        console.log(questions[i]+"\nR:"+answers[i]+"\n");
    }
    
})