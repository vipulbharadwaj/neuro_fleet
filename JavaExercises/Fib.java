import java.util.*;
public class Fib{
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
         int a =0;
         int b =1;

         for(int i =0; i<n; i++){
            int sum = a+b;
            System.out.print(a + " ");
            a = b;
            b = sum;
         }
    }
}