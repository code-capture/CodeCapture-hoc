# CodeCapture

![CodeCapture-Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/CodeCapture-Banner-JPG.jpg/1024px-CodeCapture-Banner-JPG.jpg)

## What Is CodeCapture

**CodeCapture** is a Progressive Web App designed to bridge the gap between pen-and-paper coding and coding on a computer using mobile phones, allowing users to learn coding without typing. 

CodeCapture has the functionality to extract JavaScript code from images of handwritten text and then allows the user to edit and compile it within their browser. We also have an hour-long lesson on the fundamentals of JavaScript to assist with students' Computer Science education especially in times like these, where the COVID-19 pandemic and enforced lockdown have kept students away from school. Having a PWA allows the user to run it on both their computer as well as mobile devices, thus increasing its accessibility significantly.

## Inspiration

While in recent times, the world has started moving towards pro-CS education, the fact is that buying computers is a distant dream for most students and educational institutions across the globe even today. In most developing countries, the ratio of CS students versus the number of computers available is highly skewed and most students are still learning programming via pen-and-paper. At the same time, however, the number of people who own mobile phones has significantly increased. Bridging this gap between pen-and-paper coding and coding on a computer by using a technology that people already own can bring a significant difference in the adoption of Computer Science education today.

## Technologies Used

* The frontend of the PWA was developed using **React**
* The backend server of the PWA was built using **Flask** and hosted on an **Azure VM**
* The OCR functionality used to extract code from the scanned images of handwritten text was implemented using **Azure Cognitive Services** (Computer Vision Read API)
* In order to allow editing of code before running, we embedded the **Ace Editor** using the Ace API
