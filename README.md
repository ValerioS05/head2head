# Head2Head Readme
- This is the Head2Head Readme set to explain and walk you through this project and it's developement.  
 ![Responsive mock home page](/readmeImg/mock.png)
 Thanks to [ui.dev device mock](https://ui.dev/amiresponsive).
## Readme map 
- [Head2Head Readme](#head2head-readme)
  - [Readme map](#readme-map)
  - [Project Goal](#project-goal)
  - [Plan](#plan)
  - [User Stories](#user-stories)
  - [Flow and Wireframes](#flow-and-wireframes)
  - [Head2Head Design](#head2head-design)
    - [Color Palette](#color-palette)
    - [Fonts](#fonts)
    - [Responsiveness](#responsiveness)
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
## User Stories
- In here I will explain how the Head2Head was planned in an Agile development in GitHub issue through user stories.
- The first thing that I did was to go around asking people what they would like or what not in a comparison site.
- I created some notes following their ideas and my ideas and I group them by themes.  
 ![User Stories Notes](/readmeImg/notes.png)  

- Second step was to organize them in a Kanban board inside my repository.  

- Next I created Epics that group all the user stories by theme. The epics are labelled by priority and their content has been organized with the MoSCoW method. 
 ![Epics Priority](/readmeImg/prio.png)

- Each Epic has User stories that got broke down to single objects and a priority was given to them as well.
 ![Signel user story](/readmeImg/userst1.png)  

- Every single user story was added to the backlog - User stories spring as a starting point.
- During the developement, the user stories with prio 0 (highest) were selected first and moved to the In progress and once completed were moved again to the Done section.
- A final column was added for the Wont Have section
  - This section contains user stories that were tought initially but not implemented at the end due to the scope of the project or not usefull functionality. This section also contains future feature.
  - ![Future Feature](/readmeImg/future.png)  
- For tje non achieve User stories comments were made inside the respective object.
- [Link to the board](https://github.com/users/ValerioS05/projects/3/views/1) See the user stories in their final state.
- ![User stories Kanban board](/readmeImg/userst.png)
- The process that I followed was
 1. Document user stories.
 2. Create a board to track and organize them.
 3. Create an API to handle what would be necessary to fulfill the user stories in the front end side.
 4. Create a initial idea of the flow and a mockup of the final app through wireframes.
 
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

## Head2Head Design
- I wanted this app to have a defined design from the start. So everything started with the design of the logo and the creation of the Hero Image(the hero image has also been used as a default image where it was needed.).  
  |||
  |--|--|
  |![Logo](/readmeImg/logo.png)|This is the logo that I used. We can see it in the title (Browser bar.) and in the Navbar.|
  |![Hero Image](/readmeImg/hero.png)|This is the hero image of the app, we can see it in the home page at first impact resembles 2 heads in different direction and color , giving a meaning of different opinions(to stay on theme with a comparison site.).|
### Color Palette
- For the app I opted to use a similar pattern shown in the hero image colour palette.
- I used: 
  - 1. Aqua
  - 2. Orangered
  - 3. White
  - 4. Black
  - Some different color were used for example on the navbar where the actual name of the page would turn blue. Green on select buttons in the comparison page. Red and Yellow for feedbacks to the user(For example in forms or non authorized actions.).
   
    - Here is an example of rendered items and the colours used.
      |||
      |-|-|
      |![Colour Palette](/readmeImg/palette.png)|In this picture we can see at the top in the navbar when the cursor hovers the navlinks the link turns blue and the icon orangered to give a visual feeback. Also the active page link turns orangered. All the navlinks are displayed on white over black to give a great contrast. The product components are shown on a white card with a box shadow orangered. Inside the product we have text on black and name of the product on orange red to give important to the name that is also a link.  At the bottom of the picture we can see a part of a feedback with black text and a red background to give meaning to the feedback(Non possible action). The select button is on a green/black palette to differenciate the products page from the comparison create page.The select buttons revert the color palette when selected to give the user a visual feedback that the product is selected.|
      |![Colour Feedback](/readmeImg/feedback.png)|Here is an example of another feedback the color is not red because the message is a warning on an authorized action.|
  - 5. The main body of the app is on a dark theme. Initially it was on a white theme, during the development of the project the strain on my eyes was very strong due to the brightness coming out of any page. So after this I opted to revert the main body to a black colour that solved my issue and hopefully for everyone else. Also the black main body give a good contrast on the white cards of the product components enhancing the view.  
  
- Checks were made on the pages with [ContrastChecker](https://contrastchecker.com/).
  - Home page: ![Home Page check](/readmeImg/homepalcheck.png)
  - Product page: ![Product page check](/readmeImg/prodpalcheck.png)
  - Comparison page: ![Comparison page check](/readmeImg/compalcheck.png)

### Fonts
- For the fonts I mainly used "Lato", sans-serif for the entire App. 
- For the headings from h1 to h6 the font was set to "Merriweather". 
- This two fonts were choosen reasoning on a balance between modern readability  and classic elegance.
  - Lato is clean modern and readable making a perfect fit for the main body. This ensure a smooth reading experience.
  - Merriweather is elegant giving the headings a more refined look.
- The fonts were taken from [Google fonts](https://fonts.google.com/).
  |Lato |Merrywather |
  |--|--|
  |![Lato font](/readmeImg/lato.png)|![Merryweather font](/readmeImg/merry.png)|

### Responsiveness
- Head2Head is a responsive app, it is created on mobile first approach due to the high usage of mobiles over other devices.
  - The design is optimazed for smaller screens ensuring a good experience on mobile devices. With the help of media queries and bootstrap classes to help adapt layouts over every page.
  - The layout is flexible using a grid system for larger screen and a 1 column layout for smaller devices.
- For mobile devices a toggler for the navbar was implemented where the user will not be presented with the full navbar but with a toggler that will display it in a dropdown ensuring readability and a good UX without overwhelming the UI.
-  Typography scaling is based on viewport width using rem where needed ensuring that any device has the chance to display a good quality text.
-  Images are set to scale depending on the page and the width of the device ensuring no distortion.
-  This ensurers that every user has the chance to experience the app in all devices.
    |Small width| Larger Width|
    |--|--|
    |![mobile width](/readmeImg/resp.png)|![larger width](/readmeImg/resp1.png)|  
    |![grid system](/readmeImg/grid.png)|In here we can see the product cards displayed in a grid for larger widths.|