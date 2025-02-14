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
  - [Features](#features)
  - [Future features](#future-features)
  - [CRUD features](#crud-features)
  - [Reusable components](#reusable-components)
  - [Hooks](#hooks)
  - [Utils](#utils)
  - [Testing](#testing)
    - [Automate testing](#automate-testing)
    - [Manual testing](#manual-testing)
  - [Bugs and Fixes](#bugs-and-fixes)
    - [Non fixed / known bugs:](#non-fixed--known-bugs)
  - [Libraries, Frameworks and Languages.](#libraries-frameworks-and-languages)
  - [Deployment](#deployment)
  - [Credits](#credits)
- [**Special thanks**.](#special-thanks)
 
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
   The design is optimazed for smaller screens ensuring a good experience on mobile devices. With the help of media queries and bootstrap classes to help adapt layouts over every page.
   The layout is flexible using a grid system for larger screen and a 1 column layout for smaller devices.
- For mobile devices a toggler for the navbar was implemented where the user will not be presented with the full navbar but with a toggler that will display it in a dropdown ensuring readability and a good UX without overwhelming the UI.
-  Typography scaling is based on viewport width using rem where needed ensuring that any device has the chance to display a good quality text.
-  Images are set to scale depending on the page and the width of the device ensuring no distortion.
-  This ensurers that every user has the chance to experience the app in all devices.
    |Small width| Larger Width|
    |--|--|
    |![mobile width](/readmeImg/resp.png)|![larger width](/readmeImg/resp1.png)|  
    |![Column layout](/readmeImg/col.png)|![grid system](/readmeImg/grid.png)|

    In here we can see the product cards displayed in a grid for larger widths. In the pictures above we can get a glimpse of the navbar not being displayed fully in the mobile version and the column display over a row display using flexbox properties.

## Features
Heead2Heead has many features to show off, the general feature is that we are able to compare different products, create products objects, vote, comment on them, profiles and so on. Here is a list of features that the app offers.
|Feature|Description|
|--|--|
|![Hero image](/readmeImg/hero.png)|The hero image gives a good definition and meaning to the home page and is repeated for default images.|
|![Logo](/readmeImg/logo.png)|The logo was used for both the navbar and the browser bar close to the title displaying a similar pattern of the hero image: two heads this time facing eachother that combines in heart giving the meaning of sharing similar ideas and friendly enviroment. The logo in the navbar acts also a redirection to the home page even though an existing home page navlink exist.|
|![Conditional rendering](/readmeImg/cond.png)![Conditional rendering 2](/readmeImg/cond1.png)|The app understands when a user is allowed or not to do certain actions confirming the user state(logged in/ logged out / staff users or non), this simplify the user experience to be directed and guided through the app even beeing a first timer. Here is an example of the home page recognizing the user state for a non logged user(1) vs a logged in user(2)|
|![Personalized Welcome](/readmeImg/merry.png)|The app offers a personalized welcome getting the name of the user displayed at first impact. Giving a sense of both personalization and a succesfull log in feedback.|
|![Navbar](/readmeImg/navexp.png)![Toggle Navbar](/readmeImg/nav.png)|The navbar one of the featurees that the user will use most. We have two examples here, the first image shows the navbar at full capacity where the user can see all the navlinks ,the logo and the personal profile picture. If a user is a staff member we have displayed the + add product where a product can be created. In the second image we can see the navbar shown as a toogler in smaller screens, the user can tap on it to expand it as a dropdown for a better UX and not overwhelming UI. The navbar recognize the active page and changes the icon color to an orangered to give the user a sense of position.|
|![Icons 1](/readmeImg/i1.png) ![Icons 2](/readmeImg/i2.png)![Icons 3](/readmeImg/i3.png)![Icons 4](/readmeImg/i4.png)![Icons 5](/readmeImg/i5.png)|The use of icons was implemented to add an additional visual feedback to the user. In the images we can see the pencil icon used to define edit options and is used for all the edit options used, a calendar icon displayed with a date, and a bin icon to define the deletion of items. In the navbar we have the home icon, the product icon displayed as a open box, the compare icon with two reverse arrows to stay in pattern with the hero image reverse faces and a sign out/in icon. When the user is not logged in we have the sign up icon displayed in the navbar.|
|![Sign in page](/readmeImg/signin.png)![Sign up](/readmeImg/signup.png)|In here we have the sign up and sign in forms to give the user the chance to create or login to their own account. The sign up page redirects the user after a successfull account creation to the sign in page to make easy the access to the app. After a successfull login the app redirect you to the home page to start navigatin through the app.|
|![Search bar](/readmeImg/search.png)|In here we have a sample of the search/sort/filter bar. This feature allow the user to easily sort, search and filter products based on their needs, like by price, date, simple text or group by categories. The search is easy to use and a timer has been installed to make sure the user has time to type and dont refresh the page at every key stroke.|
|![Drop down menus](/readmeImg/dropdown.png)|In this sample we have a glimpse of a dropdown menu, no one likes clutter so the dropdown menus allows the user to select to edit or delete just by clicking on the edit menu icon.|
|![Vote form](/readmeImg/vote.png)|The product component only in the product page allows the user to leave a vote in that specifi product. Once the vote is submitted the average rating is displayed dinamically. The user can also revote on the product if their idea changed overtime.|
|![Comment section](/readmeImg/comment.png)|What is a comparison site if you can't share your idea with others? The product page give the chance to the user to leave comments. The comment is displayed with an edit menu in case the user wants to change or delete the comment. We can also see that in the top left corner of the comment is displayed the user profile picture that redirect the user to that specific profile.|
|![Profile page](/readmeImg/profile.png)|Even though the profile is not a very important part of this project, Head2Head provide the user a profile page that is connected to product owners or comment owners, the profile can be edited and an important part is that the user can change the credentials to log to app (Username and Password) by the edit profile icon.|
- An important feature that sometimes pass without being noticed is the infinite scroll, when the app gets overpopulated by comments or products the app respond logging only the visible amount of comments and product until the user scrolls down to see more.


## Future features
For this web app I would like to add as many features as I could. Some of the ideas that I have a the moment are:
- Advanced comparison view, where the actual properties are highlighted when displayed side by side.
- The chance to share comparisons with other users or in comments instances.
- Price tracking and alerts, like notifications when something similar of a favourite product gets added.
- Favourite, for the favourites mostly the logic has already been set up initially and it would be great to personalize a profile with the preferred products.
- Reccomendations based on parsonal votes, like when a user leave a rating for a product ,similar products appear in a list of reccomendations.
- Purchases, a real time basket and a purchase functionality for products , mimicking a real life purchase with the ability to compare before getting a product.
- Social features like badges and and rewards for most active users.
- More active feedbacks, visual feedbacks for any action of the users and use of modals to keep the user entertained and more aware.
- Data insights like trend analysis or general score of a product based on popularity and features and the product history.
- Exclusive deals that change overtime.
- AI powered comparison feedback, sometimes we are just too tired of reading let the AI read and show us the result.
- Product battle of the week. All the users share their ideas on two specific products during a certain week and highlight the product winner for the full successive week.
- Multi currency support, not everyone has pounds or euros.
- Multi language app, also not everyone speaks english.
Ther could be much more to add but these are the main ideas that could be implemented in the near future or in the long term.

## CRUD features
- Head2Head offers multiple CRUD functionalities for the usual user and for staff users.
- Create: Users can create profiles, comments and comparisons. Staff users can also create products via the conditionally rendere add product icon that redirect to the actual form.
- Read: Every user can read any of the object created. We can see every product, comments average votes and comparisons. We can see when products and comments are created and by who. 
- Update: usual user can update the votes , comments and their own profiles. Staff users can also update products in case is needed.
- Delete: A regular user can delete their comments if their are not happy with it. Staff users can delete products if needed and also unwanted comments acting like a mod.
- All this make the app quite interactive and help keep the data up to date.

## Reusable components
For this project I created some reusable components to avoid cluttering the code too much. 
|||
|--|--|
|![Spinner](/readmeImg/spinner.png)|The spinner (Asset.js) is been used for waiting times. Instead of seeing the pictures getting loaded one by one or rendered async, I used the spinner to make sure most of the data is loaded before displaying everything. I also used the spinner for the infinite scroll following the same logic.|
|![profile pic](/readmeImg/profilepic.png)| The profile picture(ProfileImage.js) component has been the most used component it is displayed in every single page of the app. It displays a standard rounded profile pic visible always in the navbar and in the top left corner of products and comments. This helped to follow the same pattern throughout the entire app.|
|![Edit menu](/readmeImg/editmenu.png)|The dropdown edit menu (EditMenu.js) also has been used for all the edit menus (except for the profile edit icon) we can find it in every comment and for staff users in every product. We can see the edit menus always displayed on the top right corner following always the same pattern.|
|![Product component](/readmeImg/product.png)|The product (Product.js) component is the most used component for every card in both the products pages and the comparison pages. Is always the same component but is displayed differently depending on the active page. For example we can see it full displayed in the product page with all its properties at the hand of the user or just a sample of it in the products page or comparison create page.The product component contains multiple properties that define and make original every single component.|
|![Not found component](/readmeImg/notf.png)|This component has been used to be reactive on a 404 response. It displays a picture that still is in theme with the hero image (Two people and a question mark) and a feedback underneath it explaining what is going on depending on the page.|
|![Vote form](/readmeImg/vote.png)|The vote form it is displayed under every product in the product page only. It allows the user to leave a vote on the displayed product and it is dinamically connected to the average rating.|
|![Comment component](/readmeImg/comment.png)|The comment component has multiple instances under each product in the product page. It is used everytime a comment is posted.|

## Hooks
During the development I found myself inserting the same code over and over for certain pages. The use of hooks helped me to reuse some of this logic to simplify the code and also the simplify the development of the project.
- 1. useCategories.js : This hook fetches the categories I mostly used it in couple with the product, every single product could have different categories. It has been used for sorting the category utility also.
- 2. useCloudinaryImageUrl.js : This hook helped to get the right URL for certain images where needed due to some issue retrieving the right URL to display the wanted image.
- 3. useRedirect.js: This hooks was used to redirect the user based on its status (Logged in or logged out).
- 4. UseUserProfile.js: This hook was used to retrieve the full user profile (not currentUser but connected to it), to fetch the full profile properties like the profile picture the username or if is a staff user. (Was also set to retrieve the favourites but this functionality was not implemented at the end due to the scope of the project.).
- 5. useClickOutsideToggle.js: This hook was taken from the Moments walkthrough, it helps with the logic of the toggle navbar once is expanded.

## Utils
- FetchNext.js: this util has been used to get the data from the backend when needed. (Taken from the Moments walkthrough.)
- tokenTimeStamp.js: This util as well was taken from the walkthrough it was used to handle the token for the user, for example at the moment of the logout.
- ValidateImage.js: This util was used to handle image validation. Due to some issues from the backend where the Cloudinary default validation was not enough. I used this to check if the file was an image and the size of it(1Mb in this case.).


## Testing

### Automate testing
- Navbar test: This test was taken from the walkthough moments. 
The test consinst in rendering the NavBar component inside a router since the component constains navigation links.
It checks the "Sign In presence inside the document. The test ensures that the component loads correctly and confirm the presence of the link when a user is not logged in. A second test is present to confirm that the sign in and sign up buttons, mimicking a logout and it ensure that the log out action updates the UI correctly.

- useCategories test: This test mimick the usage of the useCategory hook on a component. Calling the useCategory we handle different states like the loading , the error, and the success. If loading is true it returns Loading... If loading is error it return an error message. If category is loaded it returns the name of the category. This test ensures that the categories are correctly fetched. I choose to test this hook for the vaste usage of it and the importance of displaying and retrieving categories and last but not least the loading state helps the user understand what is going on and what is happening at that moment.

- useUserProfile test: As for the categories the user profile is one of the main parts of this project. It is connected to products, comments, votes and comparisons so a test for this was due.
 I created a test  fetching a user and a profile object with its properties. Inside a test component I simulated the fetching of a profile by ID. Using the same pattern as for the categories we get 3 states, loading, error and success. When loading it returns loading.. , when error it displays the error and when success it returns the profile owner matching the ID. This test ensures that the useUserProfile fetches correctly the datas.

Some help building this tests arrived from this guide: [Click here to see the page](https://www.gyata.ai/nodejs/jest-writing-test-suites-and-test-cases).

### Manual testing
- Home page:
  |Test| Response|
  |--|--|
  |Test Sign in /Sign out|Tried to sign in and sign out multiple times, text is rendered correctly depending on the user state and the usern name. Navlinks are displayed correctly following the same pattern.|
  |Sign up button|The button correctly redirects to the sign up page.|
  |Explore products / Compare products|Correctly react on hover and correctly direct to the right page.|
  |Username on welcome|Correctly render the username of the logged in user.|
- NavBar:
  |Test| Response|
  |--|--|
  |Links|Each of the links correctly display the active page and react to cursor hover. Toggle function correctly and is responsive. Each button redirect to the correct page. Add product icon correctly redirect to the Product create form. Logo correctly redirect to home page.|
  |Sign In /Sign up forms|Correctly renders feedbacks on wrongly inserted credentials. Correctly create a user and login successfully. Bottom link correctly redirect to the right page.|
- Products page:
  |Test| Response|
  |--|--|  
  |Search/Sort/Filter|Each of the utilities works as expected fetching the right datas, the search bar waits until the user finished typing.|
  |Product Component|Each of the products contains the right details (Owners name a profile picture, images and the rest.) Each link(Image and name) Correctly direct to the right pages.|
- Product page:
  |Test| Response|
  |--|--|
  |Product|As previously mentioned the product is displayed correctly and works as expected, Edit icon is shown only to staff users.|
  |Edit icon|Correctly display the icon to staff users. When clicked shows a dropdown menu that works as expected and correctly direct to right pages.|
  |Vote form|Correctly renders from 1 to 5 select oprions. Submit button is disable until submission is made. Once submitted the average rating correctly adjust to match the value/es. Once a vote is submitted from the same user the vote is update and not duplicated. A user cannot submit a null vote.|
  |Comment section|Correctly display the form (Text area). Once submitting a post the button is disabled until submission is done. Once submitted the comment is displayed properly in descending order (from last submitted to first). Edit icon in the comment works as expected.A comment is deleted once the bin icon is clicked. Profile picture in each comment is displayed correctly with the right user. Each profile picture redirect to the correct profile page.|
- Product create/edit page:
  |Test| Response|
  |--|--|
  |Image input|Correctly select only image files, and feedback is displayed when image doesn't meet standards. When image is not valid the submit button is disabled to prevent submission. Each of the form correctly display warning feedback and prevents submission when data is invalid. Correctly creates a product when all the form is valid. Cancel button correctly redirect.Submit button correctly redirects.Price form correctly accept only numbers.|
- Comparison create page:
  |Test| Response|
  |--|--|
  |Selection|When 1 product is selected correctly render clicked/tapped button. When 2 products are selected correctly renders the compare button. Compare button correctly create comparison and redirect to comparison page. When 3 or more products are being selected alert is displayed correctly and disapper after certain time. A correct comparison can be submitted properly.|
- Comparison page:
  |Test| Response|
  |--|--|
  |Comparison|The page correctly display the two selected products.|
- Profile Page:
  |Test| Response|
  |--|--|
  |Profile|Correct display the right profiles and its details (Image, location and bio.) and edit icon if the user is the owner of the profile. Image is set to default if user didn't change profile picture. To note some of the profiles contains the favourites are the bottom of the page. This is only to showcase a future feature and favourites are displayed correctly.|
- Profile Edit page:
  |Test| Response|
  |--|--|
  |Form|Correctly display preexisting datas. Correctly updates details. All four buttons are displayed and works correctly (Change username/password, save and cancel.)|
- Change password/Username:
  |Test| Response|
  |--|--|
  |Forms|Both forms update credentials correctly and the user object reflects changes through the profile.|
- 404 page:
  |URL| When non existing url is inserted the 404 page correctly display the right component.| 
- Responsiveness:
  |||
  |--|--|
  |All pages|The app correctly responds on Dev Tools mimicking different devices and widths using preselected devices and the tools provided.|
  |![Dev Tools devices](/readmeImg/responsive.png)|In here is displayed all the devices that the app has been tested on using dev tools.|
- LightHouse:
  |||
  |--|--|
  |![Light house 1](/readmeImg/lighhouse.png)![Light house 2](/readmeImg/ligh1.png)|Using lighthouse from Dev Tools The average rating is quite good. Some improvement could be made over third party cookies and the images server by Cloudinary. Also a part that needs improvement is the loading time and the amount of requests to the backend. In general the app is quite quick loading but it can be improved a lot. An issue that was solved was the missing connection between labels and forms in the form pages, the issue was addressed and solved using the right mesure.|
- EsLint:
  Every file was passed through EsLint and some warnings were found but not critical error or breaking points.
  Some of this warning were about unused vars, missing or non needed semicolons, spacing and length of few lines of code. Also some indentation was modified due to the use of 2 spaces instead of 4.
- W3C JigSaw validator CSS:
  Every CSS file has been passed through this validator. An issue was found due to this validator not recognizing the :global in some of the forms.
  For this I followd this guide on how override global rules. [Follow the link to see the page.](https://inprod.dev/blog/2020-04-07-global-css-modules/) , [CSS modules DOC](https://github.com/css-modules/css-modules).
  ![CSS validation result](/readmeImg/css.png)  

No major issues found from manual testing, but more visual feedback would be an improvement for user experience.

## Bugs and Fixes
  1. Retrieving images URL from backend. 
     - When I was retrieving images for the products I was having problem retrieving the right URL, I solved this problem creating the useCloudirnaryImageUrl.js hook that helped fetching the right url modifing and replacing the actual path.
  2. Multiple submissions
     - A problem encountered was that the user was able to submit multiple objects clicking multiple times the submit button , for example I was able to submit as many comparisons as I could during the submitting time. What I did is disabling the submit button until the submission was completed.
  3. Retrieving the profile details.
    - During the development of this project I was not able to fetch properly the Profile details of a user and it was creating a time waste for me slowing down the developement process. What I did was creating another hook to fetch the user profile in full, and it solved the issue permitting me to continue the creation of this app.
  4. Every comment under every product.
    - An issue that was easy to spot at first impact was that once the comments were created every product would display the comments made for another product. I understood that the problem was how I was fetching the comments from the backend and I followed the axios request just written. See below how the issue was solved.
    - ![Fixed issue with comments retrieving](/readmeImg/fix.png)
  5. Big images breaking the server.
    -  A issue that I got was the images upload/update. When I tried to insert a test image (5Mb and 10Mb size) the server would just not respond for few seconds and the problem was that Cloudinary was not accepting the two images and in return the server would just stop. I fixed this problem giving a maximum size for the images and now it is smooth (The limit now is 1Mb also to dont overwhelm the site when loading.)
  6. Infinite loop.
    - During the development of the product page component I was setting wrong the dependency array in the useEffct() this was cousing an infinite loop that blocked the server. What was appening was that the useEffect was triggering api calls at every re-render like when loading or any of the value set in the array would change. I fixed the issue passing only the needed value in this case the "id" and everything was working as expected.
  7. Average rating updating only after refresh.
    - When a user would leave a vote on a product the average rating was set correctly but not displayed until the page was rendered again. To fix this issue a made sure that the app would listen to the form submission and when a submission happens the average rating is fetched with the updated value. This also helped to give a visual response to the user once the vote is submitted.
  8. Undefined values.
    - In some part of the app like in the products page where the loading time takes a bit longer , the api response was not avalilable straight away and the component was rendered before the datas were fully loaded. To solve this issue I used optional chaining and a loading state.
      Even though the response is still a bit slow a gave time to the app to load correctly the items and display them correctly with defined values.
  9. Many other issues that were found during the developement of this app were about typos in the requests to the api and wrong syntaxes. All these issues were addressed properly.
### Non fixed / known bugs:
  - I still have some 401 responses when the page loads for the first time due to the currentUser context.
  - A bug is about the mobile version of the app. When I try to log or do any action in the mobile version (Using a real mobile device) the app is always signing me out. This issue was passed after confronting the tutoring team and the assesting team. I can say that the app works as expected in every other device like tablets and desktops , also I tried to use IOS devices and Android. No other issues were encountered. The issue arises from the cross domain requests, probably due to the fact that this project works with 2 different domains.(Separate backend and frontend.)
  - Even though I'm retrieving the images from Cloudinary I still have the request made in HTTP instead of HTTPS and this throws warnings for the image.
  - Third party cookie, This warning are shown mainly in the products page and comparsion create page. They are shown due to Cloudinary and the use of currentUser.
 
## Libraries, Frameworks and Languages.
  - [React](https://react.dev/) - Was the foundation of the frontend use to build Components in a modular fashion being dynamic and interactive.
 
  - [React-Router](https://reactrouter.com/home) Used for dynamic routing so users can navigate between the present pages inside the application and provide usefull tools like the useParams hook.
  - [React Bootstrap ](https://react-bootstrap.github.io/)for styling and organizing the UI. Reduces the need of writing CSS and ensures in this case that the app and its layout is mobile friendly and responsive.
  - [React Infinite scroll](https://www.npmjs.com/package/react-infinite-scroll-component) for handling infinite scrolling. Reduces initial loading time by getting only what is needed at the moment.
  - [FontAwesome](https://docs.fontawesome.com/) for the icons used in this project.
  - [Axios](https://axios-http.com/docs/intro) for making HTTP requests to the backend. Allowing GET,POST,PUT and delete requests to interact and connect to the backend side.
  - [React testing library](https://testing-library.com/docs/react-testing-library/intro/) for testing the project component and requests.
  - [Google Fonts](https://fonts.google.com/) for the fonts used in this project.
  - [JWT Decode](https://www.npmjs.com/package/jwt-decode) used to decode the JWTokens.  
 
 Languages:
  - Javascript
  - JSX 
  - CSS
  - CSS modules
  - Python for the backend(Backend built with DRF).

  Initially the project was developed using GitPod and finished using VSCode.

## Deployment
- Fork:
  - Steps to Fork a Repository on GitHub:  
    Go to GitHub  
    Open GitHub and log in to your account.  
    Find the Repository  
    Navigate to the repository you want to fork.  
    Click the "Fork" dropdown on the top right corner of the repository page click the " Create a new Fork" button.   
    Once redirect to the Create a new Fork page click on "Create Fork".  

- Clone:
  - Steps to Clone a repository on GitHub:  
    Go to GitHub  
    Open GitHub and log in to your account.  
    Find the Repository  
    Navigate to the repository you want to clone.  
    Above the list of files click on "Code" dropdown.  
    Copy the URL of the repository using HTTPS.  
    Open Bash and change the working directory to the location wanted to be the cloned directory.  
    Type git clone and paste the URL copied before.  
    Press enter to create your local clone.  

To learn more about cloning [Click here.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)  

- Deployment:
  - Steps to Deploy your repository on Heroku:  
    Log in to Heroku.  
    Select create new app in top right corner of the page.  
    Enter a name for your app(preference for a name similar to your backend app if you have one).  
    Select the region(Europe in my case).  
    Click on create app.  
    Select the deploy menu.  
    Select GitHub from the menu.  
    Once in the menu you need to select the repository that you want to deploy in the search bar and confirm it.  
    Once selected make sure you select main branch.  
    Under it you can find the manul deploy and submit the deployment.  
    Well done!  
    To note you can use the automatic deploy if you like to enable auto deployment everytime you push your code to GitHub.  
    If you are using a backend app on Heroku  
    Remember to add to the config vars the URL provided for this app for authentication.
    Remember to hide your confidentials inside an env.py file and add it to the gitignore file before pushing and deploy your backend.

- A note to add is that when you use this repository you need to change the settings for your axios defaults reflecting your own API.




## Credits
- Images were taken from the [Unspalsh](https://unsplash.com/)
- Logo was made with [Canva](https://unsplash.com/)
- Wireframes were made with [Wireframe.cc](https://wireframe.cc/)
- Flowchart was made with [Lucid.app](https://lucid.app/)
- Devices mock was made from [ui.dev](https://ui.dev/amiresponsive)
- Some of the code for this app was taken from the Moments walkthrough for example the clickOutSideToggle, part of the navBar and all the logic behing the currentUserContext, sign forms , spinner asset...
- Font from [Google fonts](https://fonts.google.com/)
- Icons from [FontAwesome](https://fontawesome.com/)
- Help with dummy data was gotten from a friend (Dont have a way to credit her.)
- GitPod was used initially as development enviroment.
- VSCode was used to finish developing as enviroment.
- Heroku for hosting backend and frontend
- Cloudinary for storing the images.

# **Special thanks**.
I also would like to thanks the code institute support team that helped me in a very hard moment of my life, after the sudden passing away of one of my family members I didn't have time and mental power to continue developing for that certain period. The support received helped to atleast reach the end of this project and that wouldn't have been possible without their help and support. 
Thank you so much and wish all the best.