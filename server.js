const express = require('express');
const app = express();
app.use(express.json());

let pacientes = [];

// Cadastra paciente
app.post('/pacientes', (req, res) => {
    const { nome, cpf } = req.body;
    const novoPaciente = { id: pacientes.length + 1, nome, cpf };
    pacientes.push(novoPaciente);
    res.status(201).json(novoPaciente);
});

// Rota de login (simulada)
app.post('/login', (req, res) => {
    res.json({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." });
});

app.listen(3000, () => console.log('API rodando na porta 3000!'));