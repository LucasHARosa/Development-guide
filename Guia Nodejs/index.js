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
        ask(answers.length)
    }else{
        //console.log(answers);
        process.exit()
    }
})

process.on('exit', ()=>{
    for(var i=0; i<questions.length; i++){
        console.log(questions[i]+"\nR:"+answers[i]+"\n");
    }
    
})