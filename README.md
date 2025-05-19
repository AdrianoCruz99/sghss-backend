# SGHSS - Back-end  
API RESTful para gestão hospitalar (projeto UNINTER).  

## Rotas  
- `POST /pacientes`: Cadastra novos pacientes.  
  - Request body: `{ "nome": "Fulano", "cpf": "12345678900" }`  
- `POST /login`: Retorna um token JWT simulado.  

## Como executar  
1. Instale o Node.js (versão LTS).  
2. No terminal, execute:  
   ```bash
   npm install express
   node server.js
