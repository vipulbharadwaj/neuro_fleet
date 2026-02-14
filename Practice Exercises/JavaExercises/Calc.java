import java.util.Scanner;
public class Calc{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        
        int sum = a + b;
        System.out.println("Sum: " + sum);

       
        int difference = a - b;
        System.out.println("Difference: " + difference);

        
        int product = a * b;
        System.out.println("Product: " + product);

        
        int quotient = a / b;
        System.out.println("Quotient: " + quotient);
    }
}