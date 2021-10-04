 /* Task#1 */

 Boolean(Number("10")) + 1; //2
 "sub" + Number(false); //sub0
 16 * "      91    "; //1456
 true - 70; //-69
 Number(1 + String(1)) + 1; //12

 /* Task#2 */

 const amountHours = prompt("Enter the amount of hours, please:");
 let amountSeconds = amountHours * 60 * 60;
 alert(amountSeconds);

 /* Task#3 */

 var num = 1;
 num = num + 12;
 num = num - 14;
 num = num * 5;
 num = num / 7;
 num = num + 1;
 num = num - 1;
 alert(num); // -0.7142857142857143

 var num = 1;
 num += 12;
 num -= 14;
 num *= 5;
 num /= 7;
 num = num++;
 num = num--;
 alert(num); // -0.7142857142857143