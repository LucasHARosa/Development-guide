# Básico SQL 
<h2 style="color: rgb(226, 186, 43)"><strong>Comando: SELECT</strong></h2>

 ###  Selecionar colunas
```sql
SELECT (Nome(s) da(s) coluna(s) ou * seleciona todas as colunas)
FROM (nome da tabela)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: DISTINCT </strong></h2>

 ### Remover duplicados de colunas (distinct)
```sql
SELECT  DISTINCT (Nome da coluna ou *)
FROM (nome da tabela)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: WHERE </strong></h2>

 ### Operador lógico
```sql
SELECT (Nome da coluna ou *)
FROM (nome da tabela)
WHERE (nome da coluna) (operador) (valor) AND/OR (nome da coluna) (operador) (valor)
```
	Operadores:
	=	Igual
	>	Maior que
	<	Menor que
	>=	Maior igual
	<=	Menor igual
	<>	Diferente de
	AND	E lógico
	OR	Ou lógico


<h2 style="color: rgb(226, 186, 43)"><strong>Comando: COUNT </strong></h2>

 ### Contagem de linhas na tabela
```sql
SELECT  COUNT ( * ou nome da coluna ) (* para todas linhas, O DISTINCT pode ser usado)
FROM (nome da tabela)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: TOP </strong></h2>

Pega o topo de linhas de uma tabela
```sql
SELECT TOP (número inteiro) (Nome da coluna ou *)
FROM (nome da tabela)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: LIMIT </strong></h2>

Pega um limite de resultados em um query
```sql
SELECT (Nome da coluna ou *) 
FROM (nome da tabela)
LIMIT (número inteiro)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: OFFSET </strong></h2>

Ignora as primeiras x linhas de uma tabela
```sql
SELECT (Nome da coluna ou *) 
FROM (nome da tabela)
OFFSET (número inteiro)
```


<h2 style="color: rgb(226, 186, 43)"><strong>Comando: ORDER BY </strong></h2>

Ordena a tabela de forma crescente ou decrescente em relação a uma coluna
```sql
SELECT  (Nome da coluna ou *)
FROM (nome da tabela)
ORDER BY (nome da coluna) asc/desc, (nome da coluna) asc/desc
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: BETWEEN </strong></h2>

Pega valores entre faixas de valores
```sql
SELECT  (Nome da coluna ou *)
FROM (nome da tabela)
WHERE (coluna desejada) (Pode existir o operador lógico NOT) BETWEEN (número) and (número);
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: IN </strong></h2>

Separa valores iguais aos informados
```sql
SELECT  (Nome da coluna ou *)
FROM (nome da tabela)
WHERE (coluna desejada) (Pode existir o operador lógico NOT) IN (valor, valor, valor);
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: LIKE </strong></h2>

Busca valores dado um valor incompleto
```sql
SELECT  (Nome da coluna ou *)
FROM (nome da tabela)
WHERE (coluna desejada) (Pode existir o operador lógico NOT) like ‘%valor incompleto%' 
```
(O ‘%’ pode vir antes ou depois, isso significa que a linguagem irá completar com quantos caracteres forem precisos. Se houver somente 1 caracter faltando podemos usar underline _)

<h2 style="color: rgb(226, 186, 43)"><strong>Comando IS NULL e IS NOT NULL</strong></h2>

pega os valore nulos
```sql
SELECT (Nome da coluna ou *)
FROM (nome da tabela)
WHERE (nome da coluna) IS (Pode existir o operador lógico NOT) NULL
```
<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  SUM MAX MIN AVG </strong></h2>

Funções matemáticas (soma, valor máximo, valor mínimo, média)
```sql
SELECT SUM ((Nome da coluna)) AS “Nome da coluna”
FROM (nome da tabela)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  GROUP BY </strong></h2>

Divide o resultado da pesquisa por meio de grupos, agrupando eles, como por exemplo: somar itens de um mesmo tipo.
```sql
SELECT coluna1, Função de agregamento(coluna2)
FROM (nome da tabela)
GROUP BY coluna1
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  HAVING </strong></h2>

Usado junto ao group by para filtrar os dados agrupados, similar ao where
```sql
SELECT coluna1, Função de agregamento(coluna2)
FROM (nome da tabela)
GROUP BY coluna1
HAVING  (condição)
```

# JOIN
<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  JOIN</strong></h2>
Une informações de duas tabelas relacionando com alguma coluna relacional

```sql
SELECT (colunas desejadas para consulta ou * ) 
FROM (nome da tabela A)
JOIN (nome da tabela B)
ON A.coluna_relacional1 = B.coluna_relacional2
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  INNER JOIN - PROCV do SQL</strong></h2>

Esse "as A" e "as B" é a renomeação da tabela para facilitar e abreviar as fórmulas

```sql
SELECT (colunas desejadas para consulta ou * ) 
FROM (nome da tabela A) as A
INNER JOIN (nome da tabela B) as B 
ON A.coluna_relacional1 = B.coluna_relacional2
```

```sql
SELECT *
FROM Person.Address as pa
INNER JOIN person.StateProvince as ps 
ON pa.StateProvinceID = ps.StateProvinceID
WHERE ps.Name = 'Alberta'
```
<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  FULL OUTER JOIN </strong></h2>

Junta todas as informações e coloca null onde não há correspondência
```sql
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela A) as A
FULL OUTER JOIN (nome da tabela B) as B 
ON A.coluna_relacional1 = B.coluna_relacional2
```
<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  LEFT OUTER JOIN </strong></h2>

Junta todas as informações da tabela A e coloca null onde não há correspondência com a tabela B
```sql
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) as A
LEFT JOIN (nome da tabela B) as B 
ON A.coluna_relacional1 = B.coluna_relacional2
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: SELF JOIN </strong></h2>

Relaciona dados de uma mesma tabela
```sql
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) as A, (nome da tabela) as B
WHERE A.coluna = B.coluna
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  UNION </strong></h2>

Junta duas pesquisas de select em um resultado
```sql
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) 
UNION //existe a opção de UNION ALL//

SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) 
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  CONCAT Concatenação de strings</strong></h2>

```sql
SELECT CONCAT (coluna1, ‘ ‘, coluna2)
FROM (nome da tabela) 
```
Manipulação de strings Strings SQL


<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  Funções matemáticas SQL server</strong></h2>

```sql
SELECT Função matemática (colunas desejadas para consulta ou * )
FROM (nome da tabela) 
```
```sql
SELECT AVG(colunas desejadas para consulta ou * )
FROM (nome da tabela) 
```
```sql
SELECT (nome da coluna A) + (nome da coluna B)
FROM (nome da tabela) 
```




<h2 style="color: rgb(226, 186, 43)"><strong>Comando:  SUBQUERY </strong></h2>

Usa uma outra tabela para fazer um subseleção nos dados
```sql
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) 
WHERE NomeDaColuna IN 
(SELECT NomeDaColuna 
FROM (nome da tabela 2)
WHERE (condição))
```

# TIPOS DE DADOS

BOOLEANOS 
* Iniciado como nulo 

CARACTERES
* char
* varchar
* nvarchar

NÚMEROS
* tinyint / smallint / int / bigint inteiro normal
* numeric / decimal Valores exatos
* real / float precisão de 15 dígitos

TEMPORAIS
* date aaaa/mm/dd
* datetime aaaa/mm/mm:hh:mm:ss
* datetime aaaa/mm/mm:hh:mm:sssssss


# Criação de tabela
```sql
CREATE TABLE table_name (
column1 datatype,
column2 datatype,
column3 datatype,
...
)
```
```sql
CREATE TABLE youtube (
id INTEGER primary key,
nome TEXT not null unique,
dataCriacao datetime not null
)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Tipos </strong></h2>
datatype:

* NOT NULL - Não permite nulos
* UNIQUE - Força que todos os valores em uma coluna sejam diferentes
* PRIMARY KEY - Uma junção do not null e unique
* FOREIGN KEY - Identifica unicamente uma linha em outra tabela
* CHECK - Força uma condição específica em uma coluna EX: (idade>17)
* DEFAULT - Força um valor padrão quando nenhum valor é passado



<h2 style="color: rgb(226, 186, 43)"><strong>Comando: INSERT INTO </strong></h2>

Colocar valores na tabela
```SQL
INSERT INTO (nome da tabela) (coluna1, coluna2, …)
VALUES ("1 dado coluna 1", 1 dado coluna 2)
VALUES ("2 dado coluna 1", 2 dado coluna 2)
...
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: UPDATE </strong></h2>

Muda valores na tabela, coluna
```SQL
UPDATE (nome da tabela)
SET 	(coluna1) = (valor1)
		(coluna2) = (valor2)
WHERE (condição)
```


<h2 style="color: rgb(226, 186, 43)"><strong>Comando: DELETE </strong></h2>

Deleta linhas 
```SQL
DELETE FROM (nome da tabela)
WHERE (condição)
```


<h2 style="color: rgb(226, 186, 43)"><strong>Comando: ALTER TABLE </strong></h2>

Altera tabela:
* Adicionar, remover ou alterar coluna
* Setar valores padrões para uma coluna
* Add ou remover restrições de colunas
* Renomear tabela
```SQL
ALTER TABLE (nome da tabela)
ADD (nome da coluna) (tipo da coluna) (restrição)
ALTER COLUMN (nome da coluna)(tipo da coluna) (restrição)
```

Para mudar o nome da tabela:
```SQL
ALTER TABLE (nome da tabela)
RENAME TO (nome nova da tabela) 
```

Para mudar o nome da tabela:
```SQL
ALTER TABLE (nome da tabela)
RENAME COLUMN (nome da coluna) TO (Novo nome da coluna)
```



<h2 style="color: rgb(226, 186, 43)"><strong>Comando: DROP TABLE</strong></h2>

Deleta tabelas 
```SQL
DROP TABLE (nome da tabela)
```

<h2 style="color: rgb(226, 186, 43)"><strong>Comando: TRUNCATE TABLE </strong></h2>

Deleta tabelas 
Deleta dados da tabela 
```SQL
TRUNCATE TABLE (nome da tabela)
```








