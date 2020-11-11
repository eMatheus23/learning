frase = 'Curso em Vídeo Python'
dividido = frase.split()
print(dividido[2][3])

print(frase.find('Vídeo'))
print('Curso' in frase)
print(frase[::2])
print(frase.count('O'))
print(frase.upper().count('O'))
print(len(frase.strip()))
frase = frase.replace('Python', 'Android')  # Uma string salva é imutável,
# preciso salvar novamente para que mude
print(frase)


print('''Nessa aula, vamos aprender operações com String no Python. 
As principais operações que vamos aprender são o Fatiamento de String, 
Análise com len(), count(), find(), transformações com replace(), upper(), lower(), 
capitalize(), title(), strip(), junção com join()''')

#  Se quiser imprimir um texto grande, eu coloco 3 aspas no começo e no final da frase






