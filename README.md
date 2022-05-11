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
