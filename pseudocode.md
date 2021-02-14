# Digital Clock Display Pseudocode

## Objective: 

This webpage will allow the user to see if the current time in digital format. Note: Time will update every second without refreshing the page. 

**Time Format:**

Hour:Minute:Second AM/PM

**Additional Features:**
- Change the font (HTML/CSS)
- Add the date (Day, Month, and year)
- Button for toggling between a 12-hour and 24-hour display
- Turn into an Analog Clock
- Hidden Easter Egg. 

**General Steps:**
1. Start: The user opens the page. 
2. The Time will display Automatically (Hour:Minute:Second AM/PM) Note: 12-hour display will be the default
3. End: The program is ends when the browser tab is closed. 

**Events (Not in order.)**

    **Basic Events:**    

    - When the user opens the page: Automatically shows the current time
    - When the user refreshes the page: Restarts the page and should continue showing the current time.
    - When the user close the program: The program should end. 
    - When the user leaves and opens the page open again: Shows the current time.

    **Feature Events:**

    - When the user clicks & holds the clock: EASTER EGG!! WHOOP WHOOP!
    - When the user clicks the Analog selector: Switches to Analog.
    - When the user clicks the digital selector: Switch to digital. (Only if the user is in Analog form.) 
    - When the user clicks "24 Hour Display": Show the 24-hours display;


    **Troubleshoot Events:**

    - What if the user loses connection with external network?: Should continue to show the current. 
    - What if the user changes time zones?: Date() may help with that. 

**Objects**
- The Clock (Hours: 1 - 12/24; Minute: 1 - 60; Second: 1- 60)**object**  
- 12, 24 Hour Toggle Button **object**
- Hours: (1-12) **Integers**
- 24Hours: (1-24) **Integers**
- Minutes: (1 - 60) **Integers**
- Seconds: (1 - 60) **Integers**
- Month: (1-12)
- Day: (1-31)
- Year: (Infinite)
- Date object 
- setInterval
- EventListeners (Buttons)
Thoughts: Maybe array of numbers will do the trick. Check for libraries or builded in methods. 


**START:**
**Not in order**


```

FUNCTION: Show/Set Current Time: 

   Function should be called AUTOMATICALLY when the user opens the page.
   Set: Date object
   Get: Current Time
   Display: Current Time on the screen.
        

```
```

FUNCTION: Show/Set Date: 
    SET: The Date Objet from the date init
    GET: The Current Date
    Display: Current Date on the screen. 

```
```

FUNCTION: Change Hour Format:

   By Default, page will show 12 hour format. 
   Thoughts: "Maybe use a while loop instead."  
    
   IF: User clicks on the "12, 24 Hour Toggle Button" THEN
      "The Clock" is going to change to 12 or 24 hour formats. 
   ELSE:
      Continue to show 12 hour format.
      LISTENB: for "12, 24 Toggle Button Click. 

   Same function should be called if the user is in the 24 hour format.
   "12, 24 Hour Toggle Button" Should be looked to this function. 
```
```
FUNCTION: Increase time on clock:
   This is where the "setInterval()" will come in. 
   FOR: every second: 
      Increment one second up on the timer.
```
```
FUNCTION: Increase date on calendar date: 
    //Use "setInterval()"
    FOR: every 86,400,000 second:
      increment the date once on the calendar. 
```


**END.**










