public class operator2 {
     public static void main(String[] args){
       // condition stt

       boolean ispradeepontabale = true;
       if (ispradeepontabale == true) {  
          System.out.println("yes");
       }
         
       else{  
            System.out.println("no");
              }
   //new try
              int age = 15;
              if (age>18){
                System.out.println("can vote: ");
              }
              else{
                System.out.println("can't vote: ");
              }


              //Logical Operator

             // (1) &&

              int a = 40;
              int b = 20;

              if(a<50 && b<50){
                System.out.println("Both less than 50");
              }
              else{
                System.out.println("not both < 50: ");
              }

            //(2) || LO

            int c = 70;
            int d = 90;
            if(c<80 || d<80){
             System.out.println("atleast one less the 80:");
            }
            else{
              System.out.println("none less than 80:");  

          }
   }          
}

 