public class Ejercicio5 {

    static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        double promedio = calcularPromedio(15.5, 18.0);
        System.out.println("Promedio calculado: " + promedio);

        Estudiante est1 = new Estudiante("Jonnathan", promedio);
        est1.mostrarFicha();
    }
}

class Estudiante {
    String nombre;
    double promedio;

    Estudiante(String nombre, double promedio) {
        this.nombre = nombre;
        this.promedio = promedio;
    }

    void mostrarFicha() {
        System.out.println("Estudiante: " + nombre + " - Promedio: " + promedio);
    }
}