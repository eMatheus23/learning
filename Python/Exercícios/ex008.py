# Escreva um programa que leia um valor em metros e o exiba convertido em
# centímetros e milímetros. Passo 2: km, hm, dam, dm, cm, mm
n = float(input('Digite uma medida em metros: '))
print('A medida de {}m corresponde a:'.format(n))
print('{}km; \n{}hm; \n{}dam; \n{}dm; \n{:.0f}cm \n{:.0f}mm'.format(n/1000, n/100, n/10, n * 10, n * 100, n * 1000))



