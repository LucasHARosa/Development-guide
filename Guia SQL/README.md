# Comando: Selecionar colunas
SELECT (Nome(s) da(s) coluna(s) ou * seleciona todas as colunas)
FROM (nome da tabela)


# Comando: DISTINCT Remover duplicados de colunas (distinct)
SELECT  DISTINCT () (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)


# Comando: WHERE Operador lógico
SELECT (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)
WHERE //Condição lógica // (nome da coluna) (operador) (valor) AND/OR (nome da coluna) (operador) (valor)
	Operadores:
	=	Igual
	>	Maior que
	<	Menor que
	>=	Maior igual
	<=	Menor igual
	<>	Diferente de
	AND	E lógico
	OR	Ou lógico


# Comando: COUNT Contagem de linhas na tabela
SELECT  COUNT ( * ou nome da coluna ) (* para todas linhas, O DISTINCT pode ser usado)
FROM (nome da tabela)


# Comando: TOP Pega o topo de linhas de uma tabela
SELECT  TOP número inteiro (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)


# Comando: ORDER BY Ordena a tabela de forma crescente ou decrescente em relação a uma coluna
SELECT  (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)
ORDER BY (nome da coluna) asc/desc
ORDER BY (nome da coluna) asc/desc, (nome da coluna) asc/desc


# Comando: BETWEEN Pega valores entre faixas de valores
SELECT  (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)
WHERE (coluna desejada) (Pode existir o operador lógico NOT) BETWEEN número and número;


# Comando: IN Separa valores iguais aos informados
SELECT  (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)
WHERE (coluna desejada) (Pode existir o operador lógico NOT) IN (valor, valor, valor);


# Comando: LIKE Busca valores dado um valor incompleto
SELECT  (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)
WHERE (coluna desejada) (Pode existir o operador lógico NOT) like ‘%valor incompleto%' 

(O ‘%’ pode vir antes ou depois, isso significa que a linguagem irá completar com quantos caracteres forem precisos. Se houver somente 1 caracter faltando podemos usar underline _)

# Comando IS NULL e IS NOT NULL, pega os valore nulos
SELECT (Nome da coluna ou * seleciona todas as colunas)
FROM (nome da tabela)
WHERE (nome da coluna) IS NULL

# Comando:  SUM MAX MIN AVG Funções matemáticas (soma, valor máximo, valor mínimo, média)
SELECT SUM ((Nome da coluna)) AS “Nome da coluna”
FROM (nome da tabela)


# Comando:  GROUP BY Divide o resultado da pesquisa por meio de grupos, agrupando eles, como por exemplo: somar itens de um mesmo tipo.
SELECT coluna1, Função de agregamento(coluna2)
FROM (nome da tabela)
GROUP BY coluna1


# Comando:  HAVING Usado junto ao group by para filtrar os dados agrupados, similar ao where
SELECT coluna1, Função de agregamento(coluna2)
FROM (nome da tabela)
GROUP BY coluna1
HAVING  (condição)


# JOIN

## Comando:  INNER JOIN - PROCV do SQL
SELECT (colunas desejadas para consulta ou * ) ex: p.nomeDaColuna, onde p é a abreviação do datasheet.
FROM (nome da tabela A) as A
INNER JOIN (nome da tabela B) B on A.coluna_relacional1 = B.coluna_relacional2


SELECT *
FROM Person.Address pa
INNER JOIN person.StateProvince ps on pa.StateProvinceID = ps.StateProvinceID
WHERE ps.Name = 'Alberta'

## Comando:  FULL OUTER JOIN Junta todas as informações e coloca null onde não há correspondência
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela A) as A
FULL OUTER JOIN (nome da tabela B) B on A.coluna_relacional1 = B.coluna_relacional2


## Comando:  LEFT OUTER JOIN Junta todas as informações da tabela A e coloca null onde não há correspondência com a tabela B
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) as A
 LEFT JOIN (nome da tabela B) B on A.coluna_relacional1 = B.coluna_relacional2


## Comando: SELF JOIN Relaciona dados de uma mesma tabela
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) as A, (nome da tabela) as B
WHERE A.coluna = B.coluna


## Comando:  UNION Junta duas pesquisas de select em um resultado
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) 
UNION //existe a opção de UNION ALL//
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) 


## Comando:  CONCAT Concatenação de strings
SELECT CONCAT (coluna1, ‘ ‘, coluna2)
FROM (nome da tabela) 
Manipulação de strings Strings SQL


## Comando:  Funções matemáticas SQL server
SELECT Função matemática ((colunas desejadas para consulta ou * ))
FROM (nome da tabela) 
Funções matemáticas Funções matemáticas


## Comando:  SUBQUERY Usa uma outra tabela para fazer um subseleção nos dados
SELECT (colunas desejadas para consulta ou * )
FROM (nome da tabela) 
WHERE NomeDaColuna IN (SELECT NomeDaColuna FROM (nome da tabela 2)
				WHERE (condição))


# TIPOS DE DADOS

BOOLEANOS - Iniciado como nulo 
CARACTERES
char
varchar
nvarchar
NÚMEROS
tinyint / smallint / int / bigint inteiro normal
numeric / decimal Valores exatos
real / float precisão de 15 dígitos
TEMPORAIS
date aaaa/mm/dd
datetime aaaa/mm/mm:hh:mm:ss
datetime aaaa/mm/mm:hh:mm:sssssss


# Criação de tabela

CREATE TABLE table_name (
	column1 datatype,
	column2 datatype,
	column3 datatype,
   ....
);

## Tipos de datatype:
NOT NULL - Não permite nulos
UNIQUE - Força que todos os valores em uma coluna sejam diferentes
PRIMARY KEY - Uma junção do not null e unique
FOREIGN KEY - Identifica unicamente uma linha em outra tabela
CHECK - Força uma condição específica em uma coluna EX: (idade>17)
DEFAULT - Força um valor padrão quando nenhum valor é passado



## Comando: INSERT INTO Colocar valores na tabela
INSERT INTO (nome da tabela) (coluna1, coluna2, …)
VALUES ("1 dado coluna 1", 1 dado coluna 2)
VALUES ("2 dado coluna 1", 2 dado coluna 2)
…
 

## Comando: UPDATE Muda valores na tabela, coluna
UPDATE (nome da tabela)
SET 	(coluna1) = (valor1)
		(coluna2) = (valor2)
WHERE (condição)


## Comando: DELETE Deleta linhas 
DELETE FROM (nome da tabela)
WHERE (condição)
WHERE (nome da coluna) = ‘nome’


## Comando: ALTER TABLE Altera tabela:
Adicionar, remover ou alterar coluna
Setar valores padrões para uma coluna
Add ou remover restrições de colunas
Renomear tabela

ALTER TABLE (nome da tabela)
add (nome da coluna) (tipo da coluna) (restrição)
ALTER COLUMN (nome da coluna)(tipo da coluna) (restrição)

Para mudar o nome da coluna:
EXEX sp_RENAME ‘nometabela.nomecolunaatual’,’nomecolunanova’,’COLUMN’



## Comando: DROP TABLE Deleta tabelas 
DROP TABLE (nome da tabela)


## Comando: TRUNCATE TABLE Deleta dados da tabela 
TRUNCATE TABLE (nome da tabela)







