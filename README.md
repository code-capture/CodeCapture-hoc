# CodeCapture

![CodeCapture-Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/CodeCapture-Banner-JPG.jpg/1024px-CodeCapture-Banner-JPG.jpg)

## What Is CodeCapture

**CodeCapture** is a Progressive Web App designed to bridge the gap between pen-and-paper coding and coding on a computer. CodeCapture has the functionality to extract JavaScript code from images of handwritten text and then allows the user to edit and compile it within their browser. We also have an hour-long lesson on the fundamentals of JavaScript to assist with students' Computer Science education especially in times like these, where the COVID-19 pandemic and enforced lockdown have kept students away from school. Having a PWA allows the user to run it on both their computer as well as mobile devices, thus increasing its accessibility significantly.

## How we built it

* The frontend of the PWA was developed using **React**
* The backend server of the PWA was built using **Flask** and hosted on an **Azure VM**
* The OCR functionality used to extract code from the scanned images of handwritten text was implemented using **Azure Cognitive Services** (Computer Vision Read API)
* In order to allow editing of code before running, we embedded the **Ace Editor** using the Ace API

## What’s next for CodeCapture
  
We have planned a lot of new and innovative ideas for CodeCapture‘s future. They are as follows:

* Add support for more languages
* Allow the option for multiply users to contribute to the same file in the editor
* Provide an option for evaluation and grading of tests for educational institutions (including bulk evaluation of code)
* Display the accuracy growth of a programmer over time