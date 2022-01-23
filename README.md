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

Test: "It should return "Boop!" if the number 2 is inputted"
Code: beepBoop(2);
Expected Output: "Boop!"

Test: "It should return "Won't you be my neighbor?" if the number 3 is inputted"
Code: beepBoop(3);
Expected Output: "Won't you be my neighbor?"

Test: "It should return "Beep!" if inputted number contains 1"
Code: beepBoop(51);
Expected Output: "Beep!"

Test: "It should return "Boop!" if inputted number contains 2"
Code: beepBoop(52);
Expected Output: "Boop!"

Test: "It should return "Won't you be my neighbor?" if inputted number contains 3"
Code: beepBoop(53);
Expected Output: "Won't you be my neighbor?"

Test: "It should return "Won't you be my neighbor?" if the number 13 is inputted"
Code: beepBoop(13);
Expected Output: "Won't you be my neighbor?"

Test: "It should return an array from 0 to the inputted number with correct replacements"
Code: beepBoop(5);
Expected Output: 0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

Test: "It should return an array from 0 to the inputted number with correct replacements and name"
Code: beepBoop(5, "Anastasiia");
Expected Output: 0, "Beep!", "Boop", "Won't you be my neighbor, Anastasiia?", 4, 5

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



