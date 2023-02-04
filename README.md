### "npm install" to install package, "npm start" to run project

The steps that I took while doing the test included:
 1) Install scss, create directory trees similar to the content on the website to facilitate maintenance and search, including:
    + folder "src/assets" to store images
    + folder "src/components" contains components
    + directory "src/constant" contains constant variables
    + file "_variable.scss" contains common variables like "color code, distance ..."

 2) After completing step 1, I read the documentation to be able to create as many reusable components as possible, for example: chart, button...

 3) I proceed to build the layout of the web pages from the components that I created in step 2.

 4) In the process of creating screens, I use additional libraries to enhance the user experience such as: "frame-motion" library, hover or active effects

 In summary during the coding process, I tried to be as optimized as possible: clean code, line spacing, format code with spaces 2, separate mockup data from components, use common variables, use "map" function to avoid code duplication, fix warnings on local and on the browser's F12.
 - For typescript, I define variables or values using the most explicit, do not use type="any".
 - For building layouts based on figma, I work very closely and build the most complete layout possible in terms of Width, Height, font-size, font-family, color, background ..., Also, I added mobile responsive with resolution < 480px.
 - Create "PAGE NOT FOUND" when navigating wrong path. 

 How the website works is as follows:
 - The first time the website launches will take us to the home page ( My Page )
 - Clicking the "自分の記録" button at the top of the page will take them to the "My Record" page. At this website when we click the "自分のカラダの記録", "自分の運動の記録" and "自分の日記" buttons in the Entry Screen section, the web page will go to the content corresponding to each button.
 - Clicking the "コラム一覧" on menu icon to go to the "Column" screen.

 - Scroll button will be displayed when page height is over 300px, , click will move to the top of the page.


 Node -v: ^16.17.0
 Npm -v: 8.15.0
 React: ^18.2.0
 TypeScript: ^4.4.2