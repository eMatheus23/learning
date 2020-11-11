# Desenvolva um programa que leia as duas notas de um aluno, calcule e mostre sua média.
aluno = input('Qual o nome do aluno? ')
n1 = float(input('Qual é a nota do(a) {} na primeira prova? '.format(aluno)))
n2 = float(input('E na segunda prova? '))
print('A média do(a) {} é {}.'.format(aluno, (n1+n2)/2))
