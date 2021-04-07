# Parte 2
1. Calcular o total pago em salário pela empresa
    - Resposta: 61.678.125.784
2. Calcular a média salarial da empresa
    - Resposta: 63.761,2043
3. Listar o maior salário pago pela empresa
    - Resposta: 158.220
4. Listar o menor salário pago pela empresa
    - Resposta: 38.735
5. Listar os funcionários e a quanto tempo foi contratado
    - Resposta inicial para ter referencia se está certo
    ```
    #	funcionario	anos_de_casa
    1	Georgi	    35
    2	Bezalel	    36
    3	Parto	    35
    4	Chirstian	35
    5	Kyoichi	    32
    ... outros registros ...
    ```
6. Listar os funcionários do mês de abril
    - Resposta inicial para ter referencia se está certo
    ```
    #	emp_no	birth_date	first_name	last_name	gender	hire_date
    1	10.006	1953-04-20	Anneke	    Preusig	    F	    1989-06-02
    2	10.009	1952-04-19	Sumant	    Peac	    F	    1985-02-18
    3	10.026	1953-04-03	Yongqiao	Berztiss	M	    1995-03-20
    4	10.049	1961-04-24	Basil	    Tramer	    F	    1992-05-04
    5	10.054	1957-04-04	Mayumi	    Schueller	M	    1995-03-13
    ... outros registros ...
    ```
7. Listar os funcionários seus cargos
    - Resposta inicial para ter referencia se está certo
    ```
    #	first_name	title
    1	Georgi	    Senior Engineer
    2	Bezalel	    Staff
    3	Parto	    Senior Engineer
    4	Chirstian	Engineer
    5	Chirstian	Senior Engineer
    ... outros registros ...
    ```
8. Listar os funcionários e o departamento ao qual pertence
    - Resposta inicial para ter referencia se está certo
    ```
    #	funcionario	            dept_name
    1	Mary Sluis	            Customer Service
    2	Huan Lortz	            Customer Service
    3	Basil Tramer	        Customer Service
    4	Breannda Billingsley	Customer Service
    5	Jungsoon Syrzycki	    Customer Service
    ... outros registros ...
    ```
9. Listar o top 10 funcionários com o salário maior
    - Resposta inicial para ter referencia se está certo
    ```
    #	funcionario	        salario
    1	Tokuyasu Pesch	    158.220
    2	Xiahua Whitcomb	    155.709
    3	Tsutomu Alameldin	155.377
    4	Willard Baca	    154.459
    5	Ibibia Junet	    150.345
    ... outros registros ...
    ```
10. Listar a quantidade de funcionários por cargo em order decrescente
    ```
    #   total_funcionarios  cargo
    1   115.003	            Engineer
    2   107.391	            Staff
    3   97.750	            Senior Engineer
    4   92.853	            Senior Staff
    5   15.159	            Technique Leader
    ... outros registros ...
    ```
11. Listar todos os funcionários contendo: nome completo, genero, data contratacao e cargo
    - Se for M, escrever Masculino, se for F, escrever Feminino
    - Data contratacao deve ter o formato dia/mes/ano
     ```
    #   nome_completo       genero      data_contratacao    cargo
    1   Georgi Facello	    Masculino   26/06/1986	        Senior Engineer
    2   Bezalel Simmel	    Feminino    21/11/1985	        Staff
    3   Parto Bamford	    Masculino   28/08/1986	        Senior Engineer
    4   Chirstian Koblick   Masculino   01/12/1986	        Engineer
    5   Chirstian Koblick   Masculino   01/12/1986	        Senior Engineer
    ... outros registros ...
    ```

# Parte 1 - Concluída
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