# Faça um programa que leia a largura e a altura de uma parede
# em metros, calcule a sua área e a quantidade de tinta necessária
# para pintá-la, sabendo que cada litro de tinta, pinta uma área de 2m².
l = float(input('Qual a largura da parede? '))
h = float(input('Qual é a altura da parede? '))
a = l*h
print('Sua parede tem a dimensão {}m x {}m e sua área é de {}m².'.format(l, h, a))
print('Para pintar essa parede, você precisará de {} litros de tinta.'.format(a/2))

