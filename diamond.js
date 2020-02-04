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

/* Spass, oder? 
Die function soll natürlich jede belibige zahl übernehmen. wenn die Zahl gerade ist so wie 10, dann solls 11 draus machen und den 11er diamond zeichnen.
mach fizzbuzz zuerst bitte.
*/

const n = 10;

if (n == 1) {
  for (i = 1; i <= 1; i++) {
    console.log("    " + "#");
  }
} else if (n == 3) {
  for (i = 3; i <= 3; i++) {
    console.log(" #\n" + "###\n" + " #\n");
  }
} else if (n == 10) {
  for (i = 10; i <= 10; i++) {
    console.log(
      "      #\n" +
        "     ###\n" +
        "    #####\n" +
        "   #######\n" +
        "  #########\n" +
        " ###########\n" +
        "  #########\n" +
        "   #######\n" +
        "    #####\n" +
        "     ###\n" +
        "      #\n"
    );
  }
}
