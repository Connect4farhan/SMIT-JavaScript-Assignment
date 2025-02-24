// //--------~~~~~~~~~******** CHAPTER-01 ********~~~~~~~~~---------

// // Question-01
// alert ("wellcome to My Website");


// // Question-02
// alert ("Error! Please enter a valid password");


// // Question-03
// alert ("welcome to JS land... \n HAPPY COADING!");


// // Question-04
// alert ("welcome to JS land...");
// alert ("HAPPY COADING!");
// confirm("Prevent this page from creating  additional dialogs");


// // Question-05
// var message = ("Hello... i can run JS through my web browser's console")
// alert (message);
// console.log(message);

// //--------~~~~~~~~~******** CHAPTER-02 ********~~~~~~~~~---------

// // Question-01
// var username 
// console.log(username);


// // Question-02
// var myName = "Farhan Ahmed";
// console.log(myName);


// // Question-03
// var message = "Hello World";
// alert (message);


// // Question-04
// var studentBioData = { 
// name: "Jhon Doe",
// age: "15 years old",
// course: "certified mobile application Development",}
// alert(studentBioData.name);
// alert(studentBioData.age);
// alert(studentBioData.course);


// // Question-05
// var piza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(piza);


// // Question-06
// var email = "connect4farhanahmed@gmail.com";
// alert ("My email adress is :" + "  " + email);


// // Question-07
// var book= "'A Smarter Way to Learn Javascript'";
// alert ("I am trying to learn from the book " + book);


// // Question-08
// document.write("Yah! I can write HTML content through Javascript.<br><br><br>") ;


// // Question-09 
// var frame = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// alert (frame);
// document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// //--------~~~~~~~~~******** CHAPTER-03 ********~~~~~~~~~---------

// // Question-01
// var age = 28;
// alert ("I am " + age + " years old");


// // Question-02



// // Question-03
// var birthYear = 1993;
// document.write("MY birth year is " + birthYear + "<br><br><br>");
// document.write("Data Type  of my  decleared variable is " +typeof birthYear,"<br><br><br>");


// // Question-04
// var xyzClothing = {
//     vsitorName: "jhon Doe" ,
//     quantity: 15,
//     ProductTitle: "XYZ Clothing Store" ,
// }
// alert (xyzClothing.vsitorName + " order " + xyzClothing.quantity + " T-Shirt's On " + xyzClothing.ProductTitle);
// document.write("<br><br>Jhon Doe Ordered 5 T-shirts on XYZ Cloting Store <br><br><br>");

// //--------~~~~~~~~~******** CHAPTER-04 ********~~~~~~~~~---------

// // Question-01
// var firstName = "";
//     secondName = "";
//     fartherNam = "";

// // Question-02

// // Some examples of valid variable names:
// var name = farhanAhmed;   //Letter
// var num =  1234;           //Digit
// var name = farhan_Ahmed;  //Underscore
// var name = $farhan_Ahmed;  //Dollar Sign
// var name = $farhan_Ahmed123;

// // Some examples of invalid variable names:
// var name = farhan-Ahmed;   //Hyphens not allowed
// var name = 12farhanAhmed;  //Can not start with numbers.
// var name = farhan Ahmed;   //Spaces not allowed.
// var name = @farhan Ahmed   //any other special characters not allowed.
// var var = farhanAhmed;     //Reserved keywords are not allowed.



// // Question-03


// document.write("a) Variable name can only contain: Letter,  Digit,  Underscore,  Dollar Sign <br>")
// document.write("b) Vaiable must being with a: $farhan, _farhan, farhan, farhan123 <br>");
// document.write("c) Vaiable name are case sensitive <br>");
// document.write("d) Vaiable names should not  be JS Keyword<br><br><br>");  


// //--------~~~~~~~~~******** CHAPTER-05 ********~~~~~~~~~---------

// // Question-01

// var num1 = 5;
// var num2 = 3;
// document.write ("sum of 3 and 5 is: ", num1 + num2);

// // Question-02

// // Multipication
// document.write ("<br>multipication of 3 and 5 is: ", num1 * num2);
// // Division
// document.write ("<br>divide of 3 and 5 is: ", num1 - num2);
// // Subtraction
// document.write ("<br>subtract of 3 and 5 is: ", num1 / num2);
// // Modulus
// document.write ("<br>modulus of 3 and 5 is:", num1 % num2);

// // Question-03

// var Num ;
// document.write ("<br><br><br><br> value after variable decleartion is: ", Num);
// Num = 5;
// document.write ("<br> initial value: ", Num);
// document.write ("<br> value after increment is: ", ++Num);
// document.write ("<br> value after addition is: ",Num += 7);
// document.write ("<br> value after decrement is: ", --Num);
// document.write ("<br> rimindeer is: ", Num % 3);

// // Question-04
// var ticket = prompt("enter your quaintity");
// var price = 600
// document.write ("<br><br><br>  total coast of ticket is: ", ticket * price);

// // Question-05
// let a =prompt("enter Multipication tabel No.");
// for(let i=1; i<=10; i++){
//     console.log(a, " x ", i, " = ", a*i,);
//     document.write(a, " x ", i, " = ", a*i, "<br><br><br>");
// }

// // Question-06
// var c = (f - 32) *5/9;
// var f = ((c*9) /5 +32);
// console.log(c)

// // Question-07
// var item_1 = 650;
// var item_2 = 100;
// var order_quintity_item_1 = 3;
// var order_quintity_item_2 = 7;
// var shipping_charges = 100;
// document.write("Price of item 1 is: 650 <br>");
// document.write("Quantity of item 1 is: 3 <br>");
// document.write("Price of item 2 is: 100 <br>");
// document.write("Quantity of item 2 is: 7 <br>");
// document.write("Shipping Charges: 100 <br><br><br>");

// document.write(
//   "Total Coast of your order  is:  ",
//     item_1 * order_quintity_item_1 +
//     item_2 * order_quintity_item_2 +
//     shipping_charges
// );



// // Question-08
// var total_marks =   980;
// var obtained_marks =   804;
// total_marks%obtained_marks;
// document.write("Total Marks = 980 <br>");
// document.write("Marks Obtained = 804 <br>");
// document.write("Percentage: ",(obtained_marks *100)/ total_marks, "%");


// // Question-9
// var us_Dollar = 104.80;
// var saudi_riyal = 28;
// var pkr = 104.80;
// document.write("Total us Dollar  10 <br>");
// document.write("Total Suadi Riyal   25 <br>");
// document.write( "Total Currency in PKR: ",(us_Dollar*10)+(saudi_riyal*25),"<br><br><br>");


// // Question-10
// var num1 = 10;
// document.write("Add 5 =  ", num1 +=5,"<br>",
// "Muntiplay by 10 =  ", num1*10,"<br>", 
// "Divide by 150 =  ", num1/2,"<br><br><br>",
// )


// // Question-11
// var current_year = 2025;
// var birth_year = 2000;
// document.write("Current Year = 2025 <br>",
//     "Birth Year = 1993 <br>",
//     "Your Age is : ", current_year - birth_year,"<br><br><br>"
// )


// // Question-12
// var radius = 20;
// var pi = 3.142
// document.write("redius of a circle: 20 <br>",
//     "The cercumference is: ", 2*pi*radius,"<br>",
//     "The Area is: ", pi*(radius**2),"<br><br><br>",
// )


// // Question-13
// var snak = "chochlateChip";
// var age = 15;
// var maxAge = 65;
// var estimated_amount = 3; 
// document.write("Favourite Snak: Chocolate chip <br>",
//     "Current Age: 15 <br>",
//     "Estimated  Maximum Age: 65<br>", 
//     "Amount of Snacks per day: 3<br>",
//     "You will need",(maxAge - age) * estimated_amount,
//     "chochlate chip to last you until the ripe old age of ",maxAge)
