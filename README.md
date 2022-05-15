# Web and Mobile Accessibility - Exercises

## Group members

- Daniel Jones
- Nina Mari Willis
- Seonbin Kim

## Group resources
- Presentation -
  https://docs.google.com/presentation/d/1bbwTiRF9DIqWM-4Mwa6qLZTDfMDS82r0GhEHm_r-xbE/
- Report -
  https://docs.google.com/document/d/1bnuHls_YR6iUf8Inoce_JH-aKjetBMHblrzR9i9Lt4I/edit

## Exercise 1 - Explore the sample website
### Section goes here
*Question goes here*
* Answer goes here

## Exercise 2 - Accessible design
### Section goes here
*Question goes here*
* Answer goes here

## Exercise 3 - Accessible navigation
### Headings
*Open the index.html file in your code editor, can you find any headings in the source code? Do you think it is good accessibility practice or not? Why?*

* In the **index.html** file there are no headings, which is not a good accessibility practice. Screen readers, such as JAWS, make assumptions about the pages based on conventional HTML usage. Therefore, headings should be contained within the conventional tags (e.g., `<h1>Title heading</h1>`). When these conventions are broken, the tools will not be able to function as intended, resulting in the tools potentially failing or providing confusing misinformation to the user. Marking headings with the proper tags is especially important since they reflect the underlying structure of websites and provide access to the essential functionality of an application. Additionally, people with cognitive disabilities benefit from a clear heading structure to help make their experience as accessible as possible.

*If you view the same page in your browser, can you visually identify contents that are emphasised with enlarged font size or bolded font face?*

* Based on viewing the page in the browser, one can identify three main panels, each containing bolded font face. Of the three panels, they each contain text of varying sizes, ranging from large, to medium, to small.

*Find the content in the source code, can you propose and implement changes so that those emphasised contents are identified using appropriate heading hierarchy?*

* According to appropriate heading hierarchy, headings should by nested by their rank from `<h1>` to `<h6>`. Important is that the heading ranks should not be skipped, i.e., an `<h1>` tag should **always** precede an `<h2>` tag.
* For the proposed changes, the largest text of the three panels should be contained in an `<h1>` tag. The medium text, or sub-heading, should be contained within an `<h2>` tag. In the case of the small text (providing that it is not a description), it follows that it should be contained within an `<h3>` tag. 
* An overview image of the implementation can be accessed by clicking the following link: [updated heading overview](img/README_imgs/Ex3_Updated_Heading_Structure.PNG).

### Articles and their titles
*Look at the index page in your browser. You will find three articles in the news & events section. In the corresponding HTML code, each article is enclosed inside the generic div element. Can you make improvements to this by switching the div elements to HTML5 semantic tags?*

* In order to solve this, the generic div element `<div class="media-body">` can be replaced with the `<article>` tag. To comply with the semantics, a `<section>` tag is additionally added, which creates a section within the article (such that the article could be expanded with additional section tags if desired).

*Imagine you are a screen reader user who is looking at the three articles, what would the screen reader announce to the user? Can you make the user experience better so that the screen reader announces the article title already when the user is on the article, instead of requiring the user to navigate to the title before the announcement is made?*

* When using the JAWS screen reader, it first announces the section title ("Heading level one news and events") and then the article title ("Visited heading level 2 global temperature record"). It then announces "article" and proceeds to read the text of the article.
* In order to announce the article title when the user is actually on the article, we can just pull the article header down into the article body and section. This way JAWS first announces "article" and then the title and contents.

### Menu structure
*Open the index.html file in your code editor, pay attention to the HTML code for the navigation menus. Do you think the generic div elements are good enough to convey the menu structure? Are there other HTML elements that are better at indicating sub-menu hierarchy?*

* Using generic div elements when a relevant semantic tag, in this case `<nav>`, exists is not good for accessibility (as previously discussed). To indicate sub-menu hierarchy, it is better to start with a `<nav>` tag and then use, for example, a `<ul>` tag consisting of `<li>` components, as this conveys more useful information for screen readers and other such tools.

### Drop-down menu
*When you click on a menu item, if it has a sub-menu and the sub-menu is not displayed, the sub-menu would be shown visually. If you click the same menu item again, the sub-menu would be collapsed. Use the developer tool in Chrome to inspect the updates to the HTML code while the sub-menu displays or collapses. Do you think a screen reader user will be updated about the change of status, i.e. whether the sub-menu is displayed or not?*

* When using the developer tool to inspect the updates to the HTML, we can see that expanding the menu item (if it has a sub-menu) causes the `<div class="dropdown-menu">` to change to `<div class="dropdown-menu show">`, which is handled by a JavaScript listener. When testing this with the JAWS screen reader, the change of status is not updated; the only feedback we get when clicking e.g., the "Education & research" menu item is: "Education and research link".

*If not, try to fix the menu s.t. the screenreader will read "menu", "expanded/collapsed" correctly*

* To fix the menu for the screenreader users, we can set the aria-expanded property to true/false on menu items when their sub-menus are expanded/collapsed. To achieve this, the `<a class="nav-link">` tags have been updated to contain `aria-expanded=false` property by default. The `openMenu()` function within the "common.js" module has been tweaked to set the property to `true` when expanded and `false` when collapsed again. Now when using JAWS, the screenreader correctly announces whether the menu is collapsed or expanded.

### Menu keyboard interaction
*It is common practice for keyboard users to use the ESC key to cancel an operation. Therefore, it would be a user experience enhancement if an opened sub-menu gets closed automatically when the user presses the ESC key. After closing, the menu header should be focused. Can you implement this feature by using JavaScript to listen to keyboard events on sub-menu and closes it if it is open?*

* To add this feature to the website, a new function, `closeMenu()` was added to the "common.js" file. Given an event, the function first checks if the sub-menu is open and if so, whether an "Escape" key is pressed. If the key is pressed, the sub-menu is closed, and the relevant ARIA property set to `false`. Finally, the focus is restored to the menu header using the command `event.target.focus()`.

*Furthermore, the menu items are currently implemented using anchor texts, which for keyboard user are only activated by pressing the ENTER key. To improve the user experience, it would be ideal if the menu items can also be activated by pressing the SPACE key, which is the default for button types.*

* To achieve this, the `spaceExpand()` function was added, which listens to key-down events when a drop-down menu is in focus. In this case, the key is checked and if it is the space bar, the menu is either expanded or closed accordingly. The same logic applies to sub-menu items, such that they too can be accessed using the spacebar (which would redirect to that link) as well as the enter key.

*When navigating outside an open menu with TAB, the now inactive menu should be closed as well. Can you also implement this feature by using JavaScript to listen to the TAB event and determine when a menu should be closed?*

* To implement this functionality, a separate event listener function, `menuItemHandler()`, was created. The function listens to events on the `dropdown-menu` class, meaning that the `dropdown-item` classes become available. Since we listen to key-down events, we can check to see if the current `dropdown-item` is equal to the last item of the `dropdown-menu`, and if it is, we know that the menu is now inactive and can be closed accordingly.

### Skip links
*Skip links provide shortcuts for screen reader users to jump to a section of the page quickly. Can you implement this feature?*

* The skip links that have been implemented include all of the `<h1>` tags (i.e., news and events, studies, and research) with the addition of the "login" and "footer" elements. To achieve this, a `<div>` tag with the CSS property `visibility: hidden` was added to the HTML just before the `<body>` tag. The skip links all point to the IDs of the relevant HTML areas, such that screen reader users will first have access to these links upon scanning the page.

## Exercise 4 - Accessible forms

### Form control labelling

_When rendered in the browser, all input controls have their corresponding
descriptions displayed visually. Now open the login.html file in your code
editor and exam the source code carefully. Do you think the form labels are
implemented and associated with the corresponding input controls correctly?
Would a screen reader user experience any difficulty when interacting with these
forms? Can you improve the situation?_

- In the **login.html** file the input elements are not properly labeled with
  the `<label>` tag, so screen readers are not able to associate the input
  controls with its corresponding text. This results in the screen reader
  reading the input elements and their labels as separate entities, leading to
  repetitive text (e.g., reading both `<p>First name</p>` and
  `placeholder="First name"` in the input element), and thus making it
  disorienting for screen reader users. This can be improved by explicitly
  labeling each input element with a label.

### Related control grouping

_Look at the create new account form where the input controls are divided into
two groups, i.e. basic information and additional information. Can you update
the HTML source code so that the two groups are grouped using the proper element
instead of the generic div elements?_

- The input controls in the create new account form can be more meaningfully
  organized into two groups by replacing the generic div elements with
  fieldsets, using the `<fieldset>` and `<legend>` tags. The fieldset element
  groups the input controls, and the legend element within each fieldset gives
  the group a label, which the screen reader can associate with the group. The
  legend element can provide the name of the section, as well as additional
  information about all the elements in the group, such as whether the inputs
  are required or optional. The basic information group is described as
  optional, even though all of its elements are required, so this should be
  changed as well.

### Form input validation

_If you leave the login form empty and click the login button, do you see any
indication of errors? Based on your knowledge, are those features sufficient to
notify the user about his/her mistake? Can you introduce some improvement to the
form input validation?_

_Similarly, examine the account creation form and introduce changes or
improvements whenever possible._

- Clicking the login button on an empty form produces a message indicating that
  there is at least one error that needs to be fixed. The invalid input boxes
  appear red at the edges to indicate where the errors are. These features are
  insufficient for screen reader users, as the message is generic and the errors
  are not indicated verbally. This can be improved by including textual feedback
  on each invalid input and adding a role attribute to mark the feedback
  messages as alerts so that they will be read by the screen reader when they
  appear (e.g.,
  `<small class="invalid-feedback" role="alert">Password invalid</small>`).

## Exercise 5 - Accessible images

### Informative images

_Informative images are used to convey a simple concept. Common example are
logos of a brand, a scene picturing the context of an article and so on. Please
identify all the informative images in the sample Website. After inspecting the
corresponding HTML source code, please answer the following questions. Are these
images accessible to people using screen readers? If not, what changes would you
like to make to resolve the issue?_

- The logo at the head of each html file and the three images next to the
  articles listed in **index.html** are informative images in the website which
  are not accessible to screen reader users. This issue can be resolved by
  adding a brief textual description for each image using the alt attribute in
  the image element.

### Complex images

_Compared to informative images, complex images usually contain substantial
amount of information. Examples of informative images are line chart depicting
the average price of the real estate market over time, a pie chart showing the
percentage of male and female students enrolled in a university and so on.
Because of the complexity of such image, adding a detailed description about
them is essential of screen readers since technically screen readers cannot just
look at an image and describe its content. In the article.html file, we have
introduced an image showing the evolution of global average temperature over the
last two centuries. Can you add accessibility features to make this part more
accessible? There are several ways to implement the solution, which one do you
use? What are the pros and cons?_

- To make the complex image in **article.html** more accessible, alternative
  text can be added to the image element to provide a short description of the
  image, and the caption just under the image can provide a more detailed
  description. This enables a screen reader user to have a general idea of the
  image before hearing the detailed description, and also provides the same
  details to those reading the article visually. One possible con is that this
  method does not explicitly associate the image with its caption as its long
  description. Another way to implement this would be to specify the detailed
  description through the longdesc attribute in the image element, pointing to,
  for example, the ID of the caption. However, there are existing bugs of JAWS
  not reading long descriptions in Chrome despite recognizing them, so we opted
  for the former method, as the article is organized such that the description
  is just below the image anyway.

## Exercise 6 - Accessible tables

### Header cells vs data cells
*Open the article page in your browser and scroll down to the table containing samples of average global temperature for the last two centuries. Can you identify which rows (columns) belong to the table header and which rows (columns) belong to the table data?*

* The "Century", "Year", "Temperature", "Average", and "Smoothed" values should be marked as table headers for the respective **columns**, the "19th Century", "20th Century", and "21st Century" should be marked as table headers for the respective **rows**. The rest of the values are correctly marked as data.

*If you inspect the HTML code of article.html in your code editor, are the header cells and data cells marked up correctly? If not, how can you fix it?*

* The header cells are not marked up correctly, to fix this the `<td>` tags were replaced with `<th>` for each identified table header value.

### Column and row groups
*In the table about average global temperature, there are some headers that span multiple rows (columns) but the corresponding scopes are not correctly established. Based on the slides containing column and row groups, can you change the HTML code?*

* The headers that span multiple rows (i.e., "Temperature", "19th Century", "20th Century", and "21st Century") have been assigned to the appropriate scope e.g., `<th scope="colgroup" class="align-middle" colspan="2">Temperature</th>` and `<th scope="rowgroup" class="align-middle" rowspan="2">19th century</th>`.

## Exercise 7 - Accessibility test
### Section goes here
*Question goes here*
* Answer goes here
