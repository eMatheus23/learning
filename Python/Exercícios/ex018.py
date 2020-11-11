# Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno,
# cosseno e tangente desse ângulo.
import math
# from math import radians, sin, cos, tan
angulo = float(input('Digite um ângulo: '))
angulor = math.radians(angulo)
seno = math.sin(angulor)
cosseno = math.cos(angulor)
tangente = math.tan(angulor)
print('O ângulo de {0} tem SENO de {1:.2f}. \nO ângulo de {0} tem COSSENO de {2:.2f}.'
      '\nO ângulo de {0} tem TANGENTE de {3:.2f}.'
      .format(angulo, seno, cosseno, tangente))









