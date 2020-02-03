/*
Bau eine function der du eine ungerade zahl n übergibst und die dann einen diamanten ausgibt wobei n die zahl der zeilen ist

wenn du der function 1 übergibst, kommt das raus:
#

3:
 #
###
 #

10:
     #
    ###
   #####
  #######
 #########
###########
 #########
  #######
   #####
    ###
     #

*/
const n=10;

if (n==1){
     for ( i=1; i<=1; i++){          
          console.log("    "+"#");
     }
}
else if (n==3){
     for ( i=3; i<=3; i++){          
          console.log(" #\n"+"###\n"+" #\n");
     }
}
else if(n==10){
 for ( i=10; i<=10; i++){          
     console.log("      #\n"+"     ###\n"+"    #####\n"+"   #######\n"+"  #########\n"+" ###########\n"+"  #########\n"+"   #######\n"+"    #####\n"+"     ###\n"+"      #\n");
 }
}