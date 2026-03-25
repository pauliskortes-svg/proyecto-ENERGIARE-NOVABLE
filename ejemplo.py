
def promedio(nota1, nota2, nota3):
    return (nota1 + nota2 + nota3) / 3

nota1= int(input("ingrese nota 1)"))
nota2= int(input("ingrese nota 2)"))
nota3= int(input("ingrese nota 3)"))
promTotal =promedio(nota1, nota2, nota3)
if promTotal >=4:
    print(f"Promocionado, su promedio es : {promTotal}")
else:
   print(f"No promocionado, su promedio es : {promTotal}")




SueldoEmpleado= int(input("ingrese su sueldo)"))
if SueldoEmpleado >3000000:
    print("deba pagar impuestos")
else:
    print("NO debe pagar impuestos")



PrecioProducto=float(input("ingrese valor del producto:"))
if PrecioProducto >200:
    PrecioTotal= PrecioProducto-(PrecioProducto*0.20)
    print(f"el valor total a pagar: {PrecioTotal}")

else:
    print(f"el valor total a pagar: {PrecioProducto}")




def promedio(nota1, nota2, nota3):
    return (nota1 + nota2 + nota3) / 3

nota1= int(input("ingrese nota 1)"))
nota2= int(input("ingrese nota 2)"))
nota3= int(input("ingrese nota 3)"))
prom= promedio(nota1, nota2 ,nota3)
if prom >= 4:
    print(f"Promocionado, su promedio es: {prom}")
elif prom >= 3 and prom < 4:
    print(f"Regular, su promedio es: {prom}")
else:
    print(f"Reprobado, su promedio es: {prom}")



num1= int(input("ingrese valor 1)"))
num2= int(input("ingrese valor 2)"))
num3= int(input("ingrese valor 3)"))

if num1 == num2 or num1 == num3 or num2 == num3:
    print("los valores no deben ser iguales")
else:
    if num1 > num2 and num1 > num3:
        print(f"El número mayor es: {num1}")
    elif num2 > num1 and num2 > num3:
        print(f"El número mayor es: {num2}")
    else:
        print(f"El número mayor es: {num3}")
    
