## ENADE 2011

### QUESTÃO 29

Um algoritmo é qualquer procedimento computacional bem definido que toma algum valor ou conjunto
de valores como entrada e produz algum valor ou conjunto de valores como saída.

Considere o algoritmo a seguir.

Algoritmo Calcular

```portugol
var
  mat [1..3][1..5] de inteiro =
  {{1, 2, -1, 2, 3}, {1, -3, 4, 2, 0}, {-3, 5, 2, 3, 4}}

  sl[1..3] de inteiro = {0, 0, 0}

  x, i, j : inteiro

  x <- 0

início
  para i <- 1 até 3 faça
    para j <- 1 até 5 faça
      sl[i] <- sl[i] + mat[i][j]
    fimpara
    x <- x + sl[i]
  fimpara
  imprima x
fim
```

No fim da execução do código apresentado, será exibido o valor:  
(A) 4.  
(B) 7.  
(C) 11.  
(D) 22.  
(E) 30.

#### Resolução:

| i   | sl  | x   |
| --- | --- | --- |
| 1   |     |     |
| 2   |     |     |
| 3   |     |     |

---

### QUESTÃO 34

Sistemas especialistas são aqueles que fazem uso intensivo do conhecimento especializado para resolver
problemas de modo semelhante àquele de um especialista humano. Uma das diversas utilizações de
sistemas especialistas é na elaboração de diagnósticos destinados a inferir sobre o mau funcionamento
de um sistema, a partir de observações, de modo a prescrever soluções para a anomalia detectada.  
A medicina, atualmente, já se beneficia do uso de sistemas especialistas em conjunto com técnicas de
inferência estatística.

Uma das formas de trabalhar com sistemas especialistas é por meio do uso de “regras de produção”,
que são instruções do tipo “se - então”. As regras de produção aplicam-se à memória de trabalho,
que contém dados, e se tiverem êxito, contribuirão com alguma nova informação para a memória.

A metodologia de trabalho de um médico do serviço de emergência inclui a utilização de um sistema
especialista para diagnóstico de dengue, para o qual se encontra a seguinte regra de produção.

Se ((temperatura > 38o) e (dores musculares intensas))  
então (quadro de dengue, com 70% de chance);  
senão(quadro de resfriado comum com 30% de chance);

Levando em conta a regra de produção do sistema especialista utilizado pelo médico, é correto
afirmar que

(A) cada pessoa que procura atendimento apresentando ambos os sintomas, possui a probabilidade “0,7”
de estar contaminada pela dengue.  
(B) se 50 pessoas procurarem o atendimento apresentando um dos dois sintomas, provavelmente
15 pessoas estarão com resfriado comum.  
(C) se 100 pessoas procurarem o atendimento apresentando ambos os sintomas, a quantidade de pessoas
com dengue será igual a 70.  
(D) cada pessoa que chega apresentando um dos dois sintomas estará com resfriado comum.  
(E) a cada 100 pessoas que procuram atendimento, no máximo 30 estarão doentes.

#### Resolução:
