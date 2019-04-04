# Software Studio 2018 Spring Assignment 01 Web Canvas

## Web Canvas
<img src="example01.gif" width="700px" height="500px"></img>

## Todo
1. **Fork the repo ,remove fork relationship and change project visibility to public.**
2. Create your own web page with HTML5 canvas element where we can draw somethings.
3. Beautify appearance (CSS).
4. Design user interaction widgets and control tools for custom setting or editing (JavaScript).
5. **Commit to "your" project repository and deploy to Gitlab page.**
6. **Describing the functions of your canvas in REABME.md**

## Scoring (Check detailed requirments via iLMS)

| **Item**                                         | **Score** |
| :----------------------------------------------: | :-------: |
| Basic components                                 | 60%       |
| Advance tools                                    | 35%       |
| Appearance (subjective)                          | 5%        |
| Other useful widgets (**describe on README.md**) | 1~10%     |

## Reminder
* Do not make any change to our root project repository.
* Deploy your web page to Gitlab page, and ensure it works correctly.
    * **Your main page should be named as ```index.html```**
    * **URL should be : https://[studentID].gitlab.io/AS_01_WebCanvas**
* You should also upload all source code to iLMS.
    * .html or .htm, .css, .js, etc.
    * source files
* **Deadline: 2018/04/05 23:59 (commit time)**
    * Delay will get 0 point (no reason)
    * Copy will get 0 point
    * "屍體" and 404 is not allowed

---

## Put your report below here

### Brush 
* Click the brush bottum to use it and it will also change the cursor icon meanwhile.
* The size slider can change the size of the brush.
* Click the color palette to choose the color . 
* I design to color palette. One is for the color which is common used.Second is for all range .
#### How to do that ?
* I use the function arc to create the circle and then line each other when I moving my cursor.
---
### Eraser
*  Click the eraser bottum to use it and it will also change the cursor icon meanwhile.
* The size slider can change the size of the eraser.
#### How to do that ?
* I change  globalCompositeOperationSection's value from source-over(default) to destination-out, so it can erase the thing I draw.
---
### Text Input
* Type the text on the input bar and click the text button. Then, click the canvas. The Text will show up.
* We can change the size of font through the size slider, and choose the color from the color palette.We can also select the font typeface from the font selector next to the input bar.
#### How to do that ?
* I use the function fillText to do that.
---
### Cursor icon
* When we click the bush, eraser, and text button, the cursor icon would change according to the currently used tool.
#### How to do that?
* Change the document's property called cursor, when we click the button.
---
### Refresh button
* Click the refresh button to clean the canvas. 
#### How to do that?
* Use the function clearRect and delete the element in storeArray.
---
### Different brush shape
*  Click the circle,triangle or rectangle button and drag on the canvas.Then, move up the mouse button. It will appear.
* Use the color palette to change the color.
#### How to do that?
* Circle
  * I saved the coordinate when the mouse move down, and use the coordinate that mouse move up to minus the previous saved coordinate as the diameter of the circle.
  * I use the function arc to draw a circle.
*  Triangle
   *  I saved the coordinate when the mouse move down, and use the coordinate that mouse move up to minus the previous saved coordinate as the side of isosceles triangle. Use it as the argument of the function lineto, and then use the closePath to complete the triangle.
   
* Rectangle
    * I saved the coordinate when the mouse move down, and use the coordinate that mouse move up to minus the previous saved coordinate as the argument of the function rect.
---
### Re/Un-do button.

* click it, and it works.

#### How to do that?
* I saved the picture of my canvas when the mouse move up in the array called storeArray.While I click the undo or redo button, I will use the clearRect function to clear my canvas and draw the picture save in the storeArray.
---
### Image tool
* Click the Image button, and drag the size you want.
#### How to do that?
*  Use the function drawImage to draw it.
---
### Download
* Click the download button to download. 
#### How to do that?
* use the html tag a's property dowload to complete that.
---








