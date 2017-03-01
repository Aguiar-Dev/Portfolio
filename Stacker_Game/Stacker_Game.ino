/**
 * Arduino: Arcade Stacker Game
 * Author: Fernando L. Aguiar Guevarez
 * Class: ATW
 * Instructor: Sean Bernath
 */

/**** File Includes ****/
#include <SPI.h>
#include <Ethernet.h>
#include <Adafruit_GFX.h>
#include <Max72xxPanel.h>

/**** Components Requirements ****/
int pinCS = 6;
int numHorizontalDisp = 2;
int numVerticalDisp = 4;
byte mac[] = {0x90, 0xA2, 0xDA, 0x0F, 0x98, 0xAD};
char server[] = "data.sparkfun.com";

Max72xxPanel matrix = Max72xxPanel(pinCS, numHorizontalDisp, numVerticalDisp);
EthernetClient client;

/**** Global Variables ****/
/* Game Positioning & Difficulty Variables */
int currentSpd;
int currentX;
int previousX;
int currentY;

/* Game & Component State */
int gameBtn = 1;
int left_btn = 1;
int right_btn = 1;
int game_value = 0;
int score;

/* Stack Variable Managers */
int stack_loss;
int stack_width;
int prev_width;
String initials = "";

/**** Setup Function ****/
void setup() {
  Serial.begin(57600);
  pinMode(2, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  
  /* Ethernet Connection */
  Ethernet.begin(mac);

  /* Matrix Positions, Intensity, and Rotations */
  matrix.setIntensity(3);
  
  matrix.setPosition(0, 0, 0);
  matrix.setPosition(1, 0, 1);
  matrix.setPosition(2, 0, 2);
  matrix.setPosition(3, 0, 3);
  matrix.setPosition(7, 1, 0);
  matrix.setPosition(6, 1, 1);
  matrix.setPosition(5, 1, 2);
  matrix.setPosition(4, 1, 3);

  matrix.setRotation(7, 2);
  matrix.setRotation(6, 2);
  matrix.setRotation(5, 2);
  matrix.setRotation(4, 2);
}

void loop() {
  if(game_value == 0){
    initialize_game();
    play_msg();
  }
  else if(game_value == 1){
    play_game();
  }
  else if(game_value == 2){
    game_end();
  }
  else if(game_value == 3){
    initial_picker();
    thanks_msg();
    data_upload();
    game_value = 0;
  }
  else if(game_value == 4){
    winner_anim();
    game_end();
    initial_picker();
    thanks_msg();
    data_upload();
    game_value = 0;
  }
}

/************ Game Logic Functions ************/
/* Stack animation and logic */
void play_game(){
  for(int x = currentX + 1; x < matrix.width() - stack_width; x++){
      matrix.drawLine((x + stack_width), currentY, matrix.width(), currentY, LOW);
      matrix.drawLine(x, currentY, 0, currentY, LOW);
      matrix.drawLine(x, currentY, (x + stack_width), currentY, HIGH);
      matrix.write();
      currentX = x;
      delay(currentSpd);
      if(gameBtn == HIGH && digitalRead(2) == LOW){
        playerAction();
      }
      if(game_value != 1){
        break;
      }
    }
    
    for(int x = currentX - 1; x >= 0; x--){
      matrix.drawLine((x + stack_width), currentY, matrix.width(), currentY, LOW);
      matrix.drawLine(x, currentY, 0, currentY, LOW);
      matrix.drawLine(x, currentY, (x + stack_width), currentY, HIGH);
      matrix.write();
      currentX = x;
      delay(currentSpd);
      if(gameBtn == HIGH && digitalRead(2) == LOW){
        playerAction();
      }
      if(game_value != 1){
        break;
      }
    }
}

/* Player Button click functionality and Stack responses*/
void playerAction(){
  if(currentY < matrix.height() - 1){
    if(currentX == previousX){
      score += 100;
    }
    else if(stack_width == 0 && currentX != previousX || currentX > (previousX + prev_width) || (currentX + stack_width) < previousX){
      matrix.fillScreen(LOW);
      game_value = 2;
    }
    else if((currentX + stack_width) > (previousX + prev_width)){
      matrix.drawLine((previousX + prev_width + 1), currentY, (currentX + stack_width), currentY, LOW);
      matrix.write();
      stack_loss = (currentX + stack_width) - (previousX + prev_width);
      stack_width -= stack_loss;
      score += 50;
    }
    else if(currentX < previousX){
      matrix.drawLine(previousX - 1, currentY, currentX, currentY, LOW);
      matrix.write();
      stack_loss = previousX - currentX;
      stack_width -= stack_loss;
      currentX = previousX;
      score += 50;
    }
  }
  prev_width = stack_width;
  previousX = currentX;
  currentY--;
  if(currentY == -1){
      game_value = 4;
  }
  if(currentSpd > 30){
    currentSpd -= 7;
  }
  while(digitalRead(2) == LOW){};
}

/* Reset Variables */
void initialize_game(){
  score = 0;
  currentX = 0;
  currentY = (matrix.height() - 1);
  currentSpd = 200;
  stack_loss = 0;
  stack_width = 5;
  initials = "";
}

/* Sparkfun Data Upload for Initials and Score */
void data_upload(){
  if(client.available()){
    char c = client.read();
    Serial.write(c);
  }
  client.stop();

  if(client.connect(server, 80)){
    Serial.println("Connected");
    Serial.print("Initials: ");
    Serial.println(initials);
    Serial.print("Score: ");
    Serial.println(score);
    
    client.print("GET ");
    client.print("/input/DJM2pXGgR4F0qalaG7Zm?private_key=P4oYPmXk1rsW76x61NZD&initials=");
    client.print(initials);
    client.print("&score=");
    client.print(score); 
    client.println(" HTTP/1.1");
    client.println("Host: data.sparkfun.com");
    client.println("User-Agent: arduino-ethernet");
    client.println("Connection: close");
    client.println();
  } else{
    Serial.println("connection failed");
  }
}

/* Player Initial Selection for Leaderboards */
void initial_picker(){
  matrix.fillScreen(LOW);
  char letter = 65;
  int pos_x = 0;
  while(initials.length() <= 3){
    matrix.fillTriangle(1, 12, 3, 10, 3, 14, HIGH);
    matrix.drawChar(5, 9, letter, HIGH, LOW, 1);
    matrix.fillTriangle(14, 12, 12, 10, 12, 14, HIGH);
    matrix.write();
    
    if(left_btn == HIGH && digitalRead(4) == LOW && letter > 65){
      letter--;
      while(digitalRead(4) == LOW){};
    }
    else if(right_btn == HIGH && digitalRead(5) == LOW && letter < 90){
      letter++;
      while(digitalRead(5) == LOW){};
    }
    else if(initials.length() == 3){
      break;
    }
    else if(gameBtn == HIGH && digitalRead(2) == LOW){
      pos_x = 0;
      initials += letter;
      for(int i = 0; i < initials.length(); i++){
        matrix.drawChar(pos_x, 20, initials[i], HIGH, LOW, 1);
        pos_x += 5;
      }
      while(digitalRead(2) == LOW){};
    }
    delay(100);
  }
  delay(1000);
  wait_anim();
}

/************ LED Matrix Animations ************/
/* Loading Screen Animation */
void wait_anim(){
  for(int i = 0; i < matrix.height() + matrix.width(); i++){
    unsigned int startX = 0;
    unsigned int startY = 0;
    unsigned int endX = 0;
    unsigned int endY = 0;
    startY = i;
    
    if(i < matrix.width()){
      endX = i;
    }else{
      endX = matrix.width();
    }
    
    if(i < matrix.width()){
      endY = 0;
    }else{
      endY = i - matrix.width();
    }
    matrix.drawLine(startX,startY,endX, endY, HIGH);
    matrix.write();
    delay(10);
    if(gameBtn == HIGH && digitalRead(2) == LOW){
       game_value = 1;
    }
  }
  for(int i = 0; i < matrix.height() + matrix.width(); i++){
    unsigned int startX = 0;
    unsigned int startY = 0;
    unsigned int endX = 0;
    unsigned int endY = 0;
    startY = i;

    if(i < matrix.width()){
      endX = i;
    }else{
      endX = matrix.width();
    }

    if(i < matrix.width()){
      endY = 0;
    }else{
      endY = i - matrix.width();
    }
    matrix.drawLine(startX,startY,endX, endY, LOW);
    matrix.write();
    delay(10);
    if(gameBtn == HIGH && digitalRead(2) == LOW){
       game_value = 1;
    }
  }
}

/* Game Re-Initialize Animation */
void end_anim(){
  matrix.fillScreen(LOW);
  for(int i = 0; i < matrix.height(); i++){
    for(int x = 0; x < matrix.width(); x++){
      matrix.drawLine(x, i, x, i, HIGH);
      matrix.write();
      delay(2);
    }
  }
  for(int i = matrix.height(); i > 0 - 1; i--){
    for(int x = matrix.width(); x >= 0; x--){
      matrix.drawLine(x, i, x, i, LOW);
      matrix.write();
      delay(2);
    }
  }
}

/* Winner Animation */
void winner_anim(){
  matrix.fillScreen(LOW);
  
  for(int i = 0; i < matrix.height(); i+=2){
    for(int x = 0; x < matrix.width(); x+=2){
      matrix.drawLine(x, i, x, i, HIGH);
      matrix.write();
      delay(3);
    }
  }
  
  for(int i = matrix.height(); i > 0 - 1; i-=2){
    for(int x = matrix.width(); x >= 0; x-=2){
      matrix.drawLine(x, i, x, i, LOW);
      matrix.write();
      delay(3);
    }
  }

  String msg = "You WIN!";
  int spacer = 1;
  int width = 5 + spacer;
  
  for ( int i = 0 ; i < width * msg.length() + matrix.width() - 1 - spacer; i++ ) {
    matrix.fillScreen(LOW);
    int letter = i / width;
    int x = (matrix.width() - 1) - i % width;
    int y = (matrix.height() - 8) / 2;
    while ( x + width - spacer >= 0 && letter >= 0 ) {
      if ( letter < msg.length() ) {
        matrix.drawChar(x, y, msg[letter], HIGH, LOW, 1);
      }
      letter--;
      x -= width;
    }
    matrix.write();
    delay(100);
  }
}

/************ LED Matrix Messages ************/
/* Start Screen Message */
void play_msg(){
  String msg = "Arduino Stacker";
  int spacer = 1;
  int width = 5 + spacer;
  
  for ( int i = 0 ; i < width * msg.length() + matrix.width() - 1 - spacer; i++ ) {
    matrix.fillScreen(LOW);
    int letter = i / width;
    int x = (matrix.width() - 1) - i % width;
    int y = (matrix.height() - 8) / 2;
    while ( x + width - spacer >= 0 && letter >= 0 ) {
      if ( letter < msg.length() ) {
        matrix.drawChar(x, y, msg[letter], HIGH, LOW, 1);
      }
      letter--;
      x -= width;
    }
    matrix.write();
    delay(65);
    if(gameBtn == HIGH && digitalRead(2) == LOW){
      game_value = 1;
      while(digitalRead(2) == LOW){};
      break;
    }
  }
  wait_anim();
}

/* Player Score Display Message */
void game_end(){
  Serial.print(score);
  String msg = "Score: ";
   msg = msg + String(score);
  int spacer = 1;
  int width = 5 + spacer;
  
  for ( int i = 0 ; i < width * msg.length() + matrix.width() - 1 - spacer; i++ ) {
    matrix.fillScreen(LOW);
    int letter = i / width;
    int x = (matrix.width() - 1) - i % width;
    int y = (matrix.height() - 8) / 2;
    while ( x + width - spacer >= 0 && letter >= 0 ) {
      if ( letter < msg.length() ) {
        matrix.drawChar(x, y, msg[letter], HIGH, LOW, 1);
      }
      letter--;
      x -= width;
    }
    matrix.write();
    delay(65);
  }
  if(game_value == 2){
    game_value++;
  }
}

/* Gratuitous Message for Players at end of Game */
void thanks_msg(){
  String msg = "Thanks for playing! ";
   msg = msg + String(initials);
  int spacer = 1;
  int width = 5 + spacer;
  
  for ( int i = 0 ; i < width * msg.length() + matrix.width() - 1 - spacer; i++ ) {
    matrix.fillScreen(LOW);
    int letter = i / width;
    int x = (matrix.width() - 1) - i % width;
    int y = (matrix.height() - 8) / 2;
    while ( x + width - spacer >= 0 && letter >= 0 ) {
      if ( letter < msg.length() ) {
        matrix.drawChar(x, y, msg[letter], HIGH, LOW, 1);
      }
      letter--;
      x -= width;
    }
    matrix.write();
    delay(65);
  }
  end_anim();
}
