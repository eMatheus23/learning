# Faça um programa que leia o preço de um produto e retorne seu valor à vista,
# com desconto de 10% ou a prazo, com aumento de 8%
valor = float(input('Qual é o valor do produto? R$ '))
vista = valor * 0.9
parcelado = valor + valor * 8 / 100
print('Seu produto no valor de R${:.2f}, sai a R${:.2f} à vista, com 10% de desconto ou R${:.2f}, '
      'parcelado em até 6 vezes de R${:.2f}, com aumento de 8%.'.format(valor, vista, parcelado, valor / 6))



