# Crie um programa que leia o nome completo de uma pessoa e mostre:
# - O nome com todas as letras maiúsculas e minúsculas.
# - Quantas letras ao t odo (sem considerar espaços).
# - Quantas letras tem o primeiro nome.

nome = input('Digite seu nome completo: ')
nome = nome.strip()

print('Maiúsculo: {}'.format(nome.upper()))
print('Minúsculo: {}'.format(nome.lower()))
print('Seu nome tem {} caracteres, sem contar os espaços.'.format(len(nome)-nome.count(' ')))

dividido = nome.split()
primeiro = dividido[0]
print('Seu primeiro nome tem {} caracteres.'.format(len(primeiro)))

