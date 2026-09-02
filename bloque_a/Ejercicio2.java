import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
          Scanner leer = new Scanner(System.in);
        // Lee dos números por teclado
        System.out.print("Introduce el primer número: ");
        double num1 = leer.nextDouble();
        System.out.print("Introduce el segundo número: ");
        double num2 = leer.nextDouble();

        double suma = num1 + num2;
        double resta = num1 - num2;
        double multiplicacion = num1 * num2;
        double division = num1 / num2;

        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        System.out.println("División: " + division);
        leer.close(); 
    }
}