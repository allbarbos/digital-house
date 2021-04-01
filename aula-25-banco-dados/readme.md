## 1- Criar database/schema

## 2- Criar as tabelas e seus relacionamentos

### Tabela Clientes  
Se relaciona com Ordens, onde 1 cliente pode ter várias ordens  

Campos:
- id
- nome
- cpf
- celular
- telefone_fixo

___

### Tabela Ordens  
Se relaciona com Produtos, onde 1 ordem pode ter vários produtos e 1 produto pode estar em várias ordens  

Campos:
- id
- data_compra
- data_entrega
- nome_destinatario
- endereco_destinatário

___

### Tabela produtos
- id
- nome
- categoria
- preco
- quantidade

### Tabela Ordem Detalhes
Nasce do relacionamento de Ordens e Produtos

Campos:
- id
- ordem_id
- produto_id
- desconto
- preco_unitario
- quantidade

## 3- Inserir registros em clientes, produtos, ordens e ordem detalhes

## 4- Listar as ordens de forma decrescente

## 5- Listar os clientes que possuem a letra A no nome

## 6- Listar os clientes que o nome inicia com a letra J

## 7- Listar os clientes que o nome termina com a letra O

## 8- Listar apenas as 3 últimas ordens

## 9- Atualizar o endereço de entrega de uma ordem

## 10- Deletar uma ordem de compra