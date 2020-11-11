# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre
# quantos dólares ela pode comprar. Considere US$1,00=R$3,27
real = float(input('Quantos reais você tem na carteira? R$ '))
dolar = float(input('Qual a cotação do dólar hoje? R$ '))
euro = real/4.51
franco = real/4.10
libra = real/5.09
yen = real/0.038
print('Você consegue comprar US${:.2f} com seus R${:.2f}.'.format(real/dolar, real))
print('Ou: \n{:.2f} Euros; \n{:.2f} Francos Suíços; \n{:.2f} Libras; \n{:.2f} Ienes.'
      .format(euro, franco, libra, yen))






