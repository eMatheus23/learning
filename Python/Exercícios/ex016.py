# Crie um programa que leia um número REal qualquer pelo teclado e mostre
# na tela a sua porção inteira.
# Ex.: Digite um número: 6.127
# O número 6.127 tem a parte Inteira 6.
import math
numero = float(input('Digite um número: '))
inteiro = math.trunc(numero)
print('O número {} tem a parte inteira {}.'.format(numero, inteiro))
print('EZ')
