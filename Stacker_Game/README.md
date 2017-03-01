*[back to root directory](../../../)*

# Arduino: Arcade Stacker Game

## Table of Contents

1. [Project Description](#projectDesc)
2. [Setting Up Software](#setUp)
3. [List of Components](#components)
4. [Libraries Used](#libraries)

<a name="projectDesc"></a>
## Project Description

This Arduino project was my final project for my ATW(Advanced Topics in Web Development) class at Full Sail University. The project concept is to function exactly as the arcade stacker game functions. Apart from the main game code I also created a simple Leaderboard application where players can view the 20 highest scores in the game. This application uses simple HTML, CSS, and Javascript.

Included in this repository is the main code for the leaderboard application and the Arduino game. In order to view the game in action please follow this link to view the comedic presentation on *[Youtube](https://youtu.be/r_MDxbUtLDg)*.

<a name="setUp"></a>
## Setting Up Software

This is a simple guide on how to copy the software portion unto your own computer if looking to personally test. For a view at how the hardware was setup please refer to the Youtube video and search for the section where the hardware is displayed top-down, link *[here](https://youtu.be/r_MDxbUtLDg)*.

As for the software portion follow these simple and quick steps to get it set up.

1. First check and make sure to have the Arduino Editor installed in order to use the libraries and builds. If the editor is not installed then please install following the instructions *[here](https://www.arduino.cc/en/Guide/HomePage)*.

2. If step 1 is completed then proceed to clone this branch of the repo. In order to do this open terminal and run `git clone -b branchName --single-branch TBD`.

3. Next make sure you have the correct libraries installed in the IDE in order for the software to function properly. Refer to the *[Libraries Section](#libraries)* for instructions on this.

4. Before running or uploading the code make sure to have an Arduino Board setup similarly to the one in the Youtube video. Once the board is setup and connected to the computer, verify and upload the software. Now the game is ready to be used.


<a name="components"></a>
## List of Components

The following is a list of all the components that were used in order to make the hardware portion of the game. Each item links to an amazon page where they can be bought for reasonable prices if anyone wanted to recreate the game.

- [Arduino UNO](https://www.amazon.com/Arduino-Uno-Rev-3-A000066/dp/B006H06TVG/ref=sr_1_4?ie=UTF8&qid=1488323837&sr=8-4&keywords=arduino+uno)
- [2x SainSmart MAX7219 Dot Matrix 4-in-1](https://www.amazon.com/SainSmart-MAX7219-Matrix-Module-Arduino/dp/B00WWNZZAS/ref=sr_1_2?ie=UTF8&qid=1488323727&sr=8-2&keywords=sainsmart+led+matrix)
- [Ethernet Shield](https://www.amazon.com/Desloo-Ethernet-Micro-sd-Arduino-Duemilanove/dp/B00GIDHZHE/ref=sr_1_8?ie=UTF8&qid=1488323878&sr=8-8&keywords=arduino+ethernet+shield)
- [3x Buttons](https://www.amazon.com/microtivity-IM206-6x6x6mm-Tact-Switch/dp/B004RXKWI6/ref=sr_1_4?ie=UTF8&qid=1488323950&sr=8-4&keywords=arduino+buttons)
- [Breadboard](https://www.amazon.com/Aketek-Solderless-BreadBoard-tie-points-power/dp/B01258UZMC/ref=sr_1_9?ie=UTF8&qid=1488324015&sr=8-9&keywords=arduino+breadboard)

<a name="libraries"></a>
## Libraries used

These are all of the libraries used with the Arduino software in order to make the LED matrix function properly. Each library links to a description page of the latter. For details on how to install and use libraries please click this *[link](https://www.arduino.cc/en/reference/libraries)*.

- [SPI.h](https://www.arduino.cc/en/Reference/SPI)
- [Ethernet.h](https://www.arduino.cc/en/Reference/Ethernet)
- [Adafruit_GFX.h](https://github.com/adafruit/Adafruit-GFX-Library)
- [Max72xxPanel.h](https://github.com/markruys/arduino-Max72xxPanel)
