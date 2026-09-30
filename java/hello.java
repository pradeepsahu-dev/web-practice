 import java.util.Scanner;
 
 public class hello {

  public static boolean  ispalindrome(int number){
    int palindrome = number;
     int rev= 0;

     while( palindrome != 0){
      int rem = number%10;
      rev = rev * 10 + rem;
      palindrome = palindrome / 10;
     }
     if(number == palindrome){
      return true;
     }else{
      return false;
     }
  }
   

    // public static int multiply(int a, int b){
    //     int product = a * b;
    //    // System.out.println(product);
    //     return product;
    // }

    // public static int factorial(int n){     
    //     int f = 1;
    //     for(int i=1; i<=n; i++){
    //          f = f*i;
    //     }  
    //     return f;
    // }   

    // public static int bincoeff(int n, int r){
    //     int fact_n = factorial(n);
    //     int fact_r = factorial(r);
    //     int fact_nmr = factorial(n-r);

    //     int bincoeff = fact_n / (fact_r*fact_nmr);
    //     return bincoeff;
    // }
    //   public static int sum(int a, int b){
    //         return a+b;
    //     }

    //     public static int sum(int a, int b, int c){ 
    //     return a+b+c;
    //     }

    // public static void main(String args[]){


    //      // //nt fact = fatorial(5 );
    //     // //ystem.out.println(fact); 
    //     //  //int rfact = fatorial(3);
    //     //  //System.out.println(rfact); 

    //     //  System.out.println(bincoeff(5, 02));


    //     System.out.println(sum(5, 6));
    //     System.out.println(sum(5, 3, 8));
      // public static int factorial(int n){ 
      //     int f = 1;
      //     for(int i=1; i<=n; i++){
      //       f = f*i;
      //     }
      //     return f;
      // }

      // public static int bincoeff(int n, int r){
      //   int fact_n = factorial(n);
      //   int fact_r = factorial(r);
      //   int fact_nmr = factorial(n-r);
        
      //   int bincoeff = fact_n / (fact_r*fact_nmr);
      //   return bincoeff;
      // }
     
      // public static int sum(int a, int b){
      //   return a+b;
      // }
      // public static float sum(float a, float b){
      //   return a+b;
      // }

      // public static boolean isPrime(int n){
      //   if (n==2){
      //       //System.out.println(true);
      //       return true;
      //   }

      //   for(int i=2; i<=n-1; i++){
      //       if(n % i == 0){
      //          return false;
      //       }
      //   }
      //     return true;
      // }
        
      // public static void bintodeci(int n){
      //   int pow = 0;
      //   int dec = 0;

      //   while(n > 0){
      //     int lastdigit = n % 10;
      //     dec = dec + (lastdigit* (int) Math.pow(2, pow));
      //     pow++;

      //     n =n / 10;
      //   }
      //  System.out.println(dec);
        
      // }

      //  public static void dectobin( int n){
      //   int pow = 0;
      //   int bin = 0;

      //   while(n>0){
      //     int rem = n % 2;
      //     bin = bin + (rem*(int) Math.pow(10,pow));
      //     pow++;

      //     n = n/2;
      //   }
      //    System.out.println(bin);
      //  }


       public static int sumDigit(int n){
        int sumofdigits = 0;  
        while(n>0){
          int lastdigit = n%10;
          sumofdigits = sumofdigits+lastdigit;
          n= n/10;
        }
        return sumofdigits;
       } 

      public static void average( int n){
       Scanner sc = new Scanner(System.in);
       System.out.println("enter first number");
       int x =sc.nextInt();
       System.out.println("enter secont number");
       int y =sc.nextInt();
       System.out.println("enter third number");
       int z =sc.nextInt();
       float avg = (x+y+z)/n;
       System.out.println( "the average is "+avg);
      }
      

       public static boolean isEven(int n){
      
        if(n%2==0){
          return true;
        } else{
          return false;
        }
       }
      public static void main(String[] args){


         Scanner sc = new Scanner(System.in);
          System.out.println("enter the number");

          int digits =sc.nextInt();
          System.out.println(sumDigit(56));
        //  int palindrome = sc.nextInt();
           
        //  if(ispalindrome(palindrome)){
        //   System.out.println("is pelimdrome");
        //  }else{
        //   System.out.println("not pelindrome");
        //  }

      
        // Scanner sc = new Scanner(System.in);

        // int n;
        // System.out.println("enter any number you want to see is even or not");
        //  n =sc.nextInt();

        //  if(isEven(n)){
        //   System.out.println("the number is even");
        //  }else{
        //   System.out.println("the is odd");
        //  }
      
    //     for(int j=1; j<=i; j++){
    //       System.out.print("*");
    //     }
    //     System.out.println();
    //    }
    //    System.out.println();
    //       int n=4;
    //    for(int i=1; i<=n; i++){
    //     for(int j=1; j<=(n-i+1); j++){
    //       System.out.print("*");
    //     }
    //     System.out.println();
    //    }
    //    System.out.println();
    //       //int n=4;
    //    for(int i=1; i<=4; i++){
    //     for(int j=4; j>=i; j--){
    //       System.out.print("*");
    //     }
    // //     System.out.println();
    // //    }
    //  int n=101;

    //  for(int i=1; i<=n; i++){
    //   for(int j=1; j<=i; j++){
    //     System.out.print(j);
    //   }
    //   System.out.println();
    //  }
    // int n =7;
    //   char cha='a';
    // for(int i=1; i<=n; i++){
    //   for(int j=1; j<=i; j++){
    //     System.out.print(cha);
    //     cha++;
    //   }
    //   System.out.println();
    // }
      
    }

}          

