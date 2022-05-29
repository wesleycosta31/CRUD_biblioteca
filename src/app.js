import express from "express";

const app = express();

app.use(express.json())

let livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"},
]

app.get('/', (req, res) => {
    res.status(200).send('Página index');
})

app.get('/livros', (req, res) => {
    res.status(200,).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);  
})

app.post('/livros', (req, res) => {
    let livro = {
        id: livros.length+1,
        titulo: req.body.titulo
    };
    
    console.log(livro);
    livros.push(livro);

    let result = {
        status: true,
        data: livro
    }

    res.status(201).json(result)
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    console.log(req.params.id);
    console.log(index);
    livros[index].titulo = req.body.titulo;
     res.json(livros[index]);
})

app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    console.log(index);
    if (index < 0) {
        let result = {
            status: false,
            data: "Não encontrado"
        }
       res.status(404).json(result); 
    }
    else {
        livros.splice(index, 1)

        let result = {
            status: true,
            data: "Excluído com sucesso"
        }
        res.json(result);
    }
})
 
    function buscaLivro(id) {
        return livros.findIndex(livro => livro.id == id)
    }

export default app

 