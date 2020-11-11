# Crie um programa que leia um valor de temperatura em graus Celsius e retorne o falor em Fahrenheit.
celsius = float(input('Qual a temperatura em graus Celsius? '))
fahrenheit = celsius * 9 / 5 + 32
print('A temperatura de {}ºC corresponde a {}ºF!'.format(celsius, fahrenheit))
