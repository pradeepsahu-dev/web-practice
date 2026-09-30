
import java.util.Arrays;

public class level2 {
    public static void main(String[] args){
        int phyisics = 80;
        int eng = 90;
        int drawing = 76;

        int[] marks = new int[3];
        
        marks[0] = 80;
        marks[1] = 90;
        marks[2] = 76;

System.out.println("Before sorting:");

        System.out.println(marks[0]);
        System.out.println(marks[1]);
        System.out.println(marks[2]);


        //length

       // System.out.println(marks.length);

        //sort

        System.out.println("After sorting:");

        //System.out.println(marks);
        Arrays.sort(marks);
        System.out.println(marks[0]);
        System.out.println(marks[1]);
        System.out.println(marks[2]);
   
        // Samr problem uding 2D arrays


        System.out.println("2D Arrays problem");


            int[] karks = {97, 98, 95};
            int[][] finalKarks = {{97, 98, 95}, {95, 97, 98}};

    System.out.println("Befor sorting by use 2D Arrays");        
            System.out.println(finalKarks[0][0]);
             System.out.println(finalKarks[0][1]);
              System.out.println(finalKarks[0][2]);
               System.out.println(finalKarks[1][0]);
                System.out.println(finalKarks[1][1]);
                 System.out.println(finalKarks[1][2]);
           
                 
            
System.out.println("After sorting by use 2D Arrays");

 Arrays.sort(marks);     
             System.out.println(finalKarks[0][0]);
             System.out.println(finalKarks[0][1]);
              System.out.println(finalKarks[0][2]);
               System.out.println(finalKarks[1][0]);
                System.out.println(finalKarks[1][1]);
                 System.out.println(finalKarks[1][2]);
        }

    }

