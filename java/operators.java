import java.util.Scanner;

public class operators {
    public static void main(String[] args){
        //Arithmatic Operator

        int a = 2;
        int b = 3;
        int sum = (a + b);
        System.out.println(sum);
        //same type se we are using other opretor like that +, -, /, %

        int d = 4;
        int e = 6;
        int modu = (d % e);
        System.out.println(modu);

        //Assignment Operator

        int numb = 1;
        numb = numb + 1;
        System.out.println(numb);
        //in trick (other type)

        int numbe = 2; 
        numbe++;
        System.out.println(numbe);

        //if, this operator likre numb++ is in Right side

        int number = 1;
        System.out.println(number++); //Firstly print original value 
        System.out.println(number); // & print incease value

        // if ,  ++ this operator setup leftt side 

        int nu = 1;
        System.out.println(++nu); //firstly print incease value
        System.out.println(nu); //print increase value

        // Math class feature of function

        //Math . max

      System.out.println(Math.max(5,6)); // for maximum value

      System.out.println(Math.min(79,45));//for minimum value
   


      //for random value

      System.out.println(Math.random()); //this type to print random value under range 0.0 to 1.0

      System.out.println((int)Math.random()); // this is explicit casting to print always 0


      System.out.println((int)(Math.random()*100)); // to print any number 34,75,56,56,9,86,

   



      //how to take input ?

     //scanner sc = new scanner (System.in)
     
      Scanner sc = new Scanner (System.in);
      System.out.println("Enter youe age: ");
      int age = sc.nextInt();
      System.out.println(age);

      //Scanner sc = new Scanner (System.in);
     System.out.println("Enter your name : ");
      String name = sc.next();
      System.out.println(name); // next   it is not take total sentence it take only single word.


      // For printing total sentence use "nextLine" ex--
     
     // Scanner sc = new Scanner (System.in);
      System.out.println("enter your full name:");
      String nama = sc.nextLine();
      System.out.println(nama);
    }
}

