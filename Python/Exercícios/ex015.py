# Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado
# e a quantidade de dias pelos quais ele foi alugado.
# Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.

km = int(input('Quantos quilômetros foram percorridos com o carro? '))
dias = float(input('Por quantos dias ele foi alugado? '))
preco = km * 0.15 + dias * 60
print('O preço final do aluguel é R${:.2f}.'.format(preco))

