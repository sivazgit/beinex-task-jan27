// 1.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
function area(){
    var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var pm = (side1 + side2 + side3)/2;
var area =  Math.sqrt(pm*((pm-side1)*(pm-side2)*(pm-side3)));
console.log(area);

}

// 2.Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

    function multiply(){
        // to get input value fetch the value by (document.getElement by id.value)
        var num1 ; 
        var num2;
       var Product = num1*num2;
       console.log(product);
    }
    
    function divide(){
        var num1
        var num2
    
       var quotient = num1/num2;
       console.log(quotient);
    }


    // 3.Write a JavaScript program to find the largest of three given integers. 

    function largest(){
        var number1;
        var number2;
        var number3;

        if (number1>number2 && number1>number3) {
console.log(`largest number: ${number1}`);        
}
        else if{
            number2>number3;
            console.log(`largest number: ${number2}`);
        }
        else{
console.log(`largest number: ${number3}`);
        }
    }




    // 4.Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

    function lessby20_others(a, b, c) {
    return (a >= 20 && (a < b || a < c)) ||(b >= 20 && (b < a || b < c)) ||(c >= 20 && (c < b || c < a));
}
console.log(lessby20_others(22, 25, 10));




// 5. Write a JavaScript program to reverse a given string.
function reverseString(string) {   
    var splitString = string.split(""); 
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 
    return joinArray;
}
 
reverseString("sivapriya");
    

// 6.Write a JavaScript program to create a new string without the first and last character of a given string.
function delete_first_last(str) {
    return str.substring(1, str.length - 1);
  }
  console.log(delete_first_last('designing'));


// 7. Write a JavaScript program to concatenate two strings except their first character.
function join(string1, string2) {
    string1 = string1.substring(1, string1.length);
    string2 = string2.substring(1, string2.length);
    return string1 + string2;
  }
  
  console.log(join("Javascript","Angular"));


//   8.Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
function string_concat(str1, str2) {
    const minimum = Math.min(str1.length, str2.length);
  
    return str1.substring(str1.length - minimum) + str2.substring(str2.length - minimum);
  }
  
  console.log(string_concat("Node", "Javascript"));

// 9.Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1. 
function swap(array) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
}
console.log(swap([2, 4, 6, 8])); 


// 10.Write a JavaScript program to extract the first half of a string of even length.
function first_half (str_ing) {
    if (str_ing.length % 2 == 0) {
      return str_ing.slice(0, str_ing.length / 2);
    }
    return str_ing;
  }
  console.log(first_half("Python"));  