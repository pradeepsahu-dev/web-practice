import java.util.Scanner;
  public class PR1 {
    public static void main(String[] args){
    Scanner sc = new Scanner(System.in);  

    //1st QUESTION
    System.out.println("Enter the number: ");  
      int a = sc.nextInt();
      int b = sc.nextInt();
      int c = sc.nextInt();

      float avg = (a+b+c)/3.0f;
      System.out.println("This is AVG:" +avg);

    //  2nd QUESTION
      System.out.println("Enter to the Side:");
      int side = sc.nextInt();
      int square = side * side;
      System.out.println("This is Area of Square: " + square);

   // 3rd QUESTION

    System.out.println("Enter your items price:");
      float pen = sc.nextFloat();
      float pencil = sc.nextFloat();
      float eraser = sc.nextFloat();

      float total = pen + pencil + eraser;

      System.out.println( "Your total cost (without GST):" + total);

      // add GST 18% :

      float gst = 0.18f * total;
      float newtotal = total+gst;
      System.out.println("GST (18%):" + gst);
      System.out.println("Your final cost (with GST):" + newtotal);
      

     // 4th QUESTION:

    //   byte b = 4;
    //   char c = 'a';
    //   short s = 512;
    //   int i = 1000;
    //   float f = 3.14f;
    //   double d = 99.9954;

    //  double result = (double) (f * b) + (i % c) - (d * s);
    //   System.out.println(result);

    //  5th QUESTION:

    int $ = 24;
    System.out.println($);
    }
}
