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
*Open the index.html file in your code editor, can you find any headings in the source code? Do you think if it is good accessibility practice or not? Why?*

* In the **index.html** file there are no headings, which is is not a good accessibility practice. Screen readers, such as JAWS, make assumptions about the pages based on conventional HTML usage. Therefore headings should be contained within the conventional tags (e.g., `<h1>Title heading</h1>`). When these conventions are broken, the tools will not be able to function as intended, resulting in the tools potentially failing or providing confusing misinformation to the user. Marking headings with the proper tags is especially important, since they reflect the underlying structure of websites and provide access to the essential functionality of an application. Additionally, people with cognitive disabilities benefit from a clear heading structure to help make their experience as accessible as possible.

*If you view the same page in your browser, can you visually identify contents that are emphasized with enlarged font size or bolded font face?*

* Based on viewing the page in the browser, one can identify three main panels, each containing bolded font face. Of the three panels, they each contain text of varying sizes, ranging from large, to medium, to small.

*Find the content in the source code, can you propose and implement changes so that those emphasized contents are identified using appropriate heading hierarchy?*

* According to appropriate heading hierarchy, headings should by nested by their rank from `<h1>` to `<h6>`. Important is that the heading ranks should not be skipped, i.e., an `<h1>` tag should **always** precede an `<h2>` tag.
* For the proposed changes, the largest text of the three panels should be contained in an `<h1>` tag. The medium text, or sub-heading, should be contained within an `<h2>` tag. In the case of the small text (providing that it is not a description), it follows that it should be contained within an `<h3>` tag. 
* An overview image of the implementation can be accessed by clicking the following link: [Updated heading overview](img/README_imgs/Ex3_Updated_Heading_Structure.PNG)
