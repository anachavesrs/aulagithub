const objs = [
    {
        "Nome" : "Joaquim",
        "Idade" : "7",
        "Email": "joaquim@gmail.com",
        "statusatividadeextra" : true,
        "atvextra" : ["natação", "judo"]

    },

    {
        "Nome" : "Juliana",
        "Idade" : "8",
        "Email": "julia@gmail.com",
        "statusatividadeextra" : false,
        "atvextra" : [null]

    }
]
console.log (objs);
console.log(typeof objs);


 const jsonData = JSON.stringify(objs); 
 console.log (jsonData);
 console.log(typeof jsonData);

 const objson = JSON.parse(jsonData);

 console.log (objson);
 console.log(typeof objson);

 objson.map((aluno) => {
     console.log(aluno.Nome);
     console.log(aluno.Idade);
     console.log(aluno.Email);
 })

 