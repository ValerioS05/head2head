# Head2Head Readme
- This is the Head2Head Readme set to explain and walk you through this project and it's developement.  
 ![Responsive mock home page](/readmeImg/mock.png)
## Readme map 
- [Head2Head Readme](#head2head-readme)
  - [Readme map](#readme-map)
  - [Project Goal](#project-goal)
  - [Plan](#plan)
  - [Flow and Wireframes](#flow-and-wireframes)
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
## Flow and Wireframes
  |FlowChart and Wireframes|Page Name|Description|
  |--|--|--|
  |![FlowChart](/readmeImg/flowchart.png)|Application flow and how is designed |In here we have a visual description of the Head2Head app. Starting from the home page where straigh away the app realize if the user is logged in. The response will rendere two different pages one where the user is welcomed and presented with links to direct to main pages. If user is not logged in the page will show a link  to the sign up page. from the sign up page we are redirected to the sign in page once sign up. To note that the navbar is always show and renders differently depending on the user status. From the main page we can go to the products page where all the products are displayed or to the compare page where we have all products with a select button. Both pages are very similar. From the product page we can explore all the products clicking on them. Once cliked we are redirected to the product detail page. In this page we have multiple solutions we can click on the profile picture of users to go to their profiles, we can edit the product if we are staff users, we can leave comments and vote on products. The comparison page acts exactly the same with the addition of a select button under the each product. Both of these pages have a filter, a sort and a search bar to help the user find what they are looking for. From the comparison page after selecting two product we are show a compare button that will redirect us to the comparison where two products are shown side by side. The profile page is accessible anywhere if a profile link is shown in the page. The edit form for the product is shown from the product page and only if we are staff users.The profile edit form is shown only to the owner of the respective profile and is accessible from the edit icon. From the profile edit form we can access the pages to edit username or password. There is not a closed way in this app the navbar allows you to navigate easy an fast.(Click on the image to see the full FlowChart)|
  |![Home wireframe](/readmeImg/homewire.png)|Home page |This is the frame of the home page we are presented with different rendering based on the state of the user (Logged in / Logged out) to help the user understand what is going on the first time visiting the page the user will always be displayed the sign up button at the end of the page. The home page also has the navbar that helps the user with directions. For more details click on the images.|
  |![Sign In/Up wireframe](/readmeImg/signwire.png)|Sign In/Sign Up pages|The sign up and sign in display two different forms depending on the page. The sign in page contains only the username and password inputs. The sign up form has an additional input where the user needs to confirm the buttons. The text under the form displays also a link redirecting to the opposite page sign in to sign up and viceversa.|
  |![Products page wireframe](/readmeImg/prodspage.png)|Products page|The products page is the full product inventory displayed for the user. We have some utility like the search/sort/filter, we have the infinite scroll feature so not all the products are loaded at the moment but only when the user scolls down.|
  |![Product page wireframe](/readmeImg/prodpage.png)|Product page|The product page shows a product component in full details. In addition of the product component in here we have also different decisions that we can make depending on which user is visualizing the page. A staff user can eaither choose to edit a product or moderate the comments, or just use the platform as a normal "customer". The non staff user can see the full product details and leave comments or votes on the product. A feature here is the average rating is dinamically changed once a user leave a vote.|
  |![Product Create/Edit page wireframe](/readmeImg/prodforwire.png)|Product Edit/Create page|This page contains a form to create or edit a product. It is accessible only to staff users. Restrictions on the image size was implemented to avoid enormous pictures to be added. (Cloudinary has a 5mb restriction but even 1mb its a bit too much).|
  |![Comparison create page wireframe](/readmeImg/compage.png)|Create Comparison page|This page is literally the same as the products page. The main difference is the select buttons that allows the user to select two products to compare. The comparison has a restriction and the products must be two. If a user select only one product the compare button is not shown. If the user tries two select two products an alert is shown.|
  |![Comparison page wireframe](/readmeImg/compwire.png)|Comparison page|The comparison page is quite simple. Two products are shown in two different column , the two columns are responsive depending on the screen size but it always displays two columns side by side.|
  |![Profile page wireframe](/readmeImg/profwire.png)|Profile page|The profile page here displays the profile details, a profile picture ,a bio and the user location. (Check the wireframe to learn about the favourites)Edit icon changed position during development, at the start the idea was to insert it at the top right corner as the product and the comment. When displayed there something was not feeling right due to not beeing simmetric to the page so I moved the profile edit icon under the image. Now it seems more organized even beeing quite a simple page.|
  |![Profile Edit form wireframe](/readmeImg/proforwire.png)|Edit Profile page|The profile edit page follows the same pattern as the profile page with the only difference that the details are forms. We also have the change username/password buttons that redirect to the respective forms.|

