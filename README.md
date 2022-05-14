# Web and Mobile Accessibility - Exercises
## Group members
* Daniel Jones
* Nina Mari Willis
* Seonbin Kim
## Useful
* Presentation - https://docs.google.com/presentation/d/1bbwTiRF9DIqWM-4Mwa6qLZTDfMDS82r0GhEHm_r-xbE/
* Report - https://docs.google.com/document/d/1bnuHls_YR6iUf8Inoce_JH-aKjetBMHblrzR9i9Lt4I/edit
## Exercise 3 - Accessible navigation
### Headings
*Open the index.html file in your code editor, can you find any headings in the source code? Do you think it is good accessibility practice or not? Why?*

* In the **index.html** file there are no headings, which is is not a good accessibility practice. Screen readers, such as JAWS, make assumptions about the pages based on conventional HTML usage. Therefore headings should be contained within the conventional tags (e.g., `<h1>Title heading</h1>`). When these conventions are broken, the tools will not be able to function as intended, resulting in the tools potentially failing or providing confusing misinformation to the user. Marking headings with the proper tags is especially important, since they reflect the underlying structure of websites and provide access to the essential functionality of an application. Additionally, people with cognitive disabilities benefit from a clear heading structure to help make their experience as accessible as possible.

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

* To fix the menu for the screenreader users, we can set the aria-expanded property to true/false on menu items when their sub-menus are expanded/collapsed. To achieve this, the `<a class="nav-link">` tags have been updated to contain `aria-expanded=false` property by default. The `openMenu()` function within the "common.js" module has been tweaked to set the property to `true` when expanded and `false` when collapsed again. Now when using JAWS, the screenreader correctly announces whether or not the menu is collapsed or expanded.

### Menu keyboard interaction
*It is common practice for keyboard users to use the ESC key to cancel an operation. Therefore, it would be a user experience enhancement if an opened sub-menu gets closed automatically when the user presses the ESC key. After closing, the menu header should be focused. Can you implement this feature by using JavaScript to listen to keyboard events on sub-menu and closes it if it is open?*

* To add this feature to the website, a new function, `closeMenu()` was added to the "common.js" file. Given an event, the function first checks if the sub-menu is open and if so, whether an "Escape" key is pressed. If the key is pressed, the sub-menu is closed and the relevant ARIA property set to `false`. Finally, the focus is restored to the menu header using the command `event.target.focus()`.

*Furthermore, the menu items are currently implemented using anchor texts, which for keyboard user are only activated by pressing the ENTER key. To improve the user experience, it would be ideal if the menu items can also be activated by pressing the SPACE key, which is the default for button types.*

* To achieve this, the `spaceExpand()` function was added, which listens to key-down events when a drop down menu is in focus. In this case, the key is checked and if it is the space bar, the menu is either expanded or closed accordingly. The same logic applies to sub-menu items, such that they too can be accessed using the spacebar (which would redirect to that link) as well as the enter key.

*When navigating outside an open menu with TAB, the now inactive menu should be closed as well. Can you also implement this feature by using JavaScript to listen to the TAB event and determine when a menu should be closed?*

* To implement this functionality, a separate event listener function, `menuItemHandler()`, was created. The function listens to events on the `dropdown-menu` class, meaning that the `dropdown-item` classes become available. Since we listen to key-down events, we can check to see if the current `dropdown-item` is equal to the last item of the `dropdown-menu`, and if it is, we know that the menu is now inactive and can be closed accordingly.

### Skip links

*Skip links provides shortcuts for screen reader users to jump to a section of the page quickly. Can you implement this feature?*

* The skip links that have been implemented include all of the `<h1>` tags (i.e., news and events, studies, and research) with the addition of the "login" and "footer" elements. To achieve this, a `<div>` tag with the CSS property `visibility: hidden` was added to the HTML just before the `<body>` tag. The skip links all point to the IDs of the relevant HTML areas, such that screen reader users will first have access to these links upon scanning the page.