# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente
#  de um triângulo retângulo, calcule e mostre o comprimento da hipotenusa.
from math import sqrt
oposto = float(input('Comprimento do cateto oposto: '))
adjacente = float(input('Comprimento do cateto adjacente: '))
hipotenusa = sqrt(oposto**2 + adjacente**2)
print('O comprimento da hipotenusa é: {:.2f}.'.format(hipotenusa))




