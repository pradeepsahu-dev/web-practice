public class PR2 {
    public static void main(String args[]){
        int a = 2;
        int b = 5;
        int exp1 = (a * b / a);
        int exp2 = (a + (b / a));
        System.out.println(exp1);
        System.out.println(exp2);
       // 2nd QUESTION
         int a = 200;
         int b = 50;
         int c = 100;

         if(a > b && b > c){
            System.out.println("hello");
         }
         if(c > b &&  c < a){
            System.out.println("java");
         }
         if((b + 200) < a && (b + 150) < c){
            System.out.println("hello java :");
         }
         // 3RD QUESTION
          int x, y, z;
         x = y = z = 2;
         x += y;
         y -= z;
         z /= (x = y);
        System.out.println(x + " " + y + " " + z);
   // 4th question
      int x = 9, y = 12;
      int a = 2, b = 4, c = 6;
      int exp = 4 / 3 * (4 + 34) + 9 * (a + b + c) + (3 + y * (2 + a) / (a + b * y));
      System.out.println(exp);
   // question 5 
    
    int x = 10, y = 5;
    int exp1 = (y * (x / y + x / y));
    int exp2 = (y * x / y + y * x / y);
    System.out.println(exp1);
    System.out.println(exp2);


    }
}
