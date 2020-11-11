# Notas da Aula 09 - Ignorar print()
frase = 'Curso em Vídeo Python'
# Primeiro caractere sempre tem contagem '0', segundo '1', e assim em diante...
# Fatiamento
print(frase[9])  # Retorna o nono caractere. Sempre usar [], pois é uma 'lista'.
print(frase[9:13])  # Retorna o intervalo entre 9 e 12. Sempre um a menos que o último.
print(frase[9:21:2])  # Entre 9 e 20, de dois em 2 caracteres.
print(frase[:5])  # Do início até o 4. (Ignora o 5)
print(frase[15:])  # Do 15 até o fim
print(frase[9::3])  # Do 9 até o fim, de três em três.

# Análise
print(len(frase))  # Retorna o número de caracteres da frase
print(frase.count('o'))  # Conta quantos "o" existem na string
print(frase.count('o', 0, 13))  # Conta quantos "o" existem no intervalo de caracteres.
print(frase.find('deo'))  # Busca o 'deo', e retorna a posição do caractere inicial.
print(frase.find('Android'))  # Se não existe, retorna valor "-1"
print('Curso' in frase)  # Retorna 'True' ou 'False', se existe o valor buscado na frase.

# Transformação
print(frase.replace('Python', 'Android'))  # troca um parte da string por outra.
print(frase.upper())  # todas as letras maiúsculas (Entre parênteses pois é método)
print(frase.lower())  # todas as letras minúsculas
print(frase.capitalize())  # tudo p/ minúsculo e primeira letra de cada palavra maiúscula
print(frase.title())  #Deixa o começo de cada palavra em maiúsculo (Usa espaço)
frase2 = '  Aprenda Python  '
print(frase2.strip())  # Exclui os espaços inúteis, no começo e no final da string
print(frase2.rstrip())  # Variação do anterior, excluindo somente da direita.
print(frase2.lstrip())  # Tira só os espaços da esquerda.


#  Divisão
print(frase.split()) # Separa cada palavra de um string em uma lista = string -> lista

# Junção
print('-'.join(frase))  # Análogo a divisão, junta os elem. de uma lista numa string = lista -> string
print('x'.join(frase)) # Caractere 'x' dita o que vai separar os elementos da lista dentro da string







