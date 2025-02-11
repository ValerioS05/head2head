# Head2Head Readme
- This is the Head2Head Readme set to explain and walk you through this project and it's developement.
 
## Readme map 

## Project Goal
- This project has been designed to help Users Compare a range of products and share their ideas on the web app.
  - From the user stories the first thought of the first person questioned about a comparison site idea told me "I would like to leave my thoughts on the products that I just compared. So the site has followed that idea since the start and hopefully achieved the goal that was set.
- The project has been built following the Mobile First rule and to be responsive in every device that will be accessed on.
- What the app provides?
  - Head2Head provides 2 different sides of the same medal.
    - One side is a management side where staff users can Create , Update and Delete products.
      - The managament user also can act as moderators where they have the chance to keep an eye on the behavior of regular users.
    - The "Customer" side is where the regular user can explore the products pass the time through the products pages via a series of linked content, they got access to Comments sections and read about other people in the respective profiles and obviously as a comparison site we have the final component that is the comparison where the user can select any product to be compared.
- The UI is quite simple and straight forward with the help of feedbacks and visual text(Not forgetting accessibility), a first time user will feel like that it's not the first time.

## Plan 
  - I started planning the project by asking to people close to me what they would like in a comparison site.
    - Many of them never used a comparison site and few of them got already experience with it.
    - Their help has been asked before, during and at the end of the development of the project to keep on the right track using an agile enviroment.
  - At the start of the project I created Epics and user stories on NotePad to then after being transferred to the project itself.
  - After the user stories were grouped and created, I started creating Wireframes of how the app would look like following my ideas.
  - The next step was to create personal logos and main pictures that the user will use to identify the brand and as the name of the site the logo and the brand image were created based on that.
  - Last step was the creation of the actual app following all the previous statements.
    - For the creation of the app we needed first an API built based on what we needed to fulfill the user stories.
    - This one was the first real step into the creation of Head2Head.
      - Check the [drf-api-head2head Readme](https://github.com/ValerioS05/drf-api-head2head/blob/main/README.md)
      - Check the [drf-api-head2head Repo](https://github.com/ValerioS05/drf-api-head2head)  
 
    |FlowChart and Wireframes|Description|
    |--|--|
    |![FlowChart](/readmeImg/flowchart.png)|In here we have a visual description of the Head2Head app. Starting from the home page where straigh away the app realize if the user is logged in. The response will rendere two different pages one where the user is welcomed and presented with links to direct to main pages. If user is not logged in the page will show a link  to the sign up page. from the sign up page we are redirected to the sign in page once sign up. To note that the navbar is always show and renders differently depending on the user status. From the main page we can go to the products page where all the products are displayed or to the compare page where we have all products with a select button. Both pages are very similar. From the product page we can explore all the products clicking on them. Once cliked we are redirected to the product detail page. In this page we have multiple solutions we can click on the profile picture of users to go to their profiles, we can edit the product if we are staff users, we can leave comments and vote on products. The comparison page acts exactly the same with the addition of a select button under the each product. Both of these pages have a filter, a sort and a search bar to help the user find what they are looking for. From the comparison page after selecting two product we are show a compare button that will redirect us to the comparison where two products are shown side by side. The profile page is accessible anywhere if a profile link is shown in the page. The edit form for the product is shown from the product page and only if we are staff users.The profile edit form is shown only to the owner of the respective profile and is accessible from the edit icon. From the profile edit form we can access the pages to edit username or password. There is not a closed way in this app the navbar allows you to navigate easy an fast.(Click on the image to see the full FlowChart)|
