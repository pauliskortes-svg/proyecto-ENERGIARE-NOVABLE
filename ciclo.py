#imprimir los numeros del 1 al 100
for i in range(1, 101):
    print(f"{i}-", end="")

#imprimir los numeros hasta 1000 de dos en dos
for i in range(0, 1001,2):
    print(f"{i},", end="")


#imprimir los numeros de 1 en 1 hasta el numero ingresado en teclado


#notas alumnos

Mayores = 0
Menores = 0
for i in range(5):
    nota = int(input(f"Ingrese la nota {i+1}: "))
    if nota >= 4:
        Mayores += 1
    else:
        Menores += 1
print("Cantidad de notas mayores o iguales a 4:", Mayores)
print("Cantidad de notas menores a 4:", Menores)

# realizar un programa que imprima 25 terminos de la serie 11-22-33-44, etc 
for i in range(1, 26):
    print(i * 11)


#saludo inicial

print("Hola!!!!")

while True:
    palabra = input("Ingresa una palabra (escribe 'salir' para terminar): ")
    
    if palabra.lower() == "salir":
        print("Terminó la ejecución de palabras")
        break


