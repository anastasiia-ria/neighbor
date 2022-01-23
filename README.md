# Mr. Roboger's Neighborhood

#### By Anastasiia Riabets

#### Mr. Roboger's Neighborhood game

## Technologies Used

* CSS
* HTML
* JavaScript
* jQuery

## Description

Mr. Roboger's Neighborhood application takes a number from a user and returns a range of numbers from 0 to the user inputted number with substitions: 'Beep,' 'Boop,' and 'Won't you be my neighbor, [name]?' instead of 1, 2, and 3 respectivly.

## Setup/Installation Requirements

* Click on or copy and paste this [GitHub Page](https://anastasiia-ria.github.io/neighbor/) into your preferred browser:<br>https://anastasiia-ria.github.io/neighbor/

  ***OR***

* Clone this repository to your Desktop:
  1. Your computer will need to have GIT installed. If you do not currently have GIT installed, follow [these](https://docs.github.com/en/get-started/quickstart/set-up-git) directions for installing and setting up GIT.
  2. Once GIT is installed, clone this repository by typing following commands in your browser:
      ```
      $ cd ~/Desktop
      $ git clone https://github.com/anastasiia-ria/neighbor.git
      ```
  3. Open index.html by typing following command: 
      ```
      $ open ~/Desktop/neighbor/index.html
      ```
      ***OR***

      Open "neighbor" folder on your desktop and open "index.html" file in your browser.

## Specifications

Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"  
Code: beepBoop(0);  
Expected Output: 0  

Test: "It should return an array [0, 'Beep!'] if the number 1 is inputted"  
Code: beepBoop(1);  
Expected Output: 0, 'Beep!'  

Test: "It should return an array [0, 'Beep!', 'Boop!'] if the number 2 is inputted"  
Code: beepBoop(2);  
Expected Output: 0, 'Beep!', 'Boop!'

Test: "It should return an array [0, 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?'] if the number 3 is inputted"  
Code: beepBoop(3);  
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?'

Test: "It should replace the number that contains 1 with 'Beep!'"  
Code: beepBoop(10);  
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?', 4, 5, 6, 7, 8, 9, 'Beep!'"

Test: "It should replace the number that contains 2 with 'Boop!'"  
Code: beepBoop(12);  
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!'

Test: "It should replace the number that contains 3 with 'Won't you be my neighbor?'"  
Code: beepBoop(13);  
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?'

Test: "It should replace number that contains 2 AND 3 with 'Won't you be my neighbor?'"  
Code: beepBoop(23);  
Expected Output: 0, 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor, undefined?', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', 'Won't you be my neighbor, undefined?'

Test: "It should return an array from 0 to the inputted number with correct replacements and name"
Code: beepBoop(5, 'Anastasiia');
Expected Output: 0, 'Beep!', 'Boop', 'Won't you be my neighbor, Anastasiia?', 4, 5

## Game Instructions

1. Click "Start" to start the game
2. Enter your name and number
3. See your results
4. (Optional) Click "Clear" to clear results
5. Click "Start" to start over
6. (Optional) Click on the neighbor to see animation

## Known Bugs

* Layout is not adjusted for small screens
* Layout is not well adjusted for inputs larger than 25

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 01/21/2022 Anastasiia Riabets



