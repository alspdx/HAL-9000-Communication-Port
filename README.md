# HAL 9000 Communication Port

#### Application to communicate numerical values with HAL 9000, _2001_

#### by **Adam Smith**

## Description

This is an application to submit numerical values to **HAL 9000**, the onboard computer control system on the **Discovery One** spacecraft.

The application will:

Take in the user's name and display it in a welcome message.
  * Example input: Dave
  * Expected output: "Hello Dave. That's and odd name."

Return an error message if the value is not a number.
  * Example input: Hello HAL
  * Expected output: "I think you know what the problem is just as well as I do, Dave. This mission is too important for me to allow you to jeopardize it. Please enter a numerical value."

Print a special message if the number contains a 0.
  * Example input: 0
  * Expected output: ["Beep"]

Print a special message if the number contains a 1.
  * Example input: 1
  * Expected output: ["Beep", "Boop"]

Print the number if it is not a 0 or a 1.
  * Example input: 2
  * Expected output: ["Beep", "Boop", 2]

Print a special error message if the number is divisible by 3.
  * Example input: 3
  * Expected output: ["Beep", "Boop", 2, "I'm sorry, Dave. I'm afraid I can't do that."]

Print an extra-special message if the number contains both a 0 and a 1.
  * Example input: 10
  * Expected ouput: ["Beep", "Boop", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5,  "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that.", "Beep-Boop"]

## Setup

Visit the webpage [here](https://alspdx.github.io/HAL-9000-Communication-Port/).

Alternately you may [Clone this repository](https://github.com/alspdx/HAL-9000-Communication-Port.git).
  1. Click on the link above.
  2. Click the green button marked **Clone or download**.
  3. Click **Download ZIP**.
  4. Unzip file.
  5. Open index.html in Chrome or another web browser.

## Technologies Used

* Bootstrap 4
* jQuery 3.2.1

## License

Copyright (c) 2017, Adam Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
