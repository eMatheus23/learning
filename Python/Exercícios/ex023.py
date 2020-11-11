# Faça um programa que leia um número de 0 a 9999 e
# mostre na tela cada um dos dígitos separados.

# Ex: Digite um número : 1834
# Unidade: 4
# Dezena: 3
# Centena: 8
# Milhar: 1

numero = str(input('Digite um número com até 4 caracteres: '))
print('Unidade:', numero[3])
print('Dezena:', numero[2:5])
print('Centena:', numero[1:5])
print('Milhar:', numero[0:5])



