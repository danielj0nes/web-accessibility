# Web and Mobile Accessibility - Exercises

## Group members

- Daniel Jones
- Nina Mari Willis
- Seonbin Kim

## Useful

- Presentation -
  https://docs.google.com/presentation/d/1bbwTiRF9DIqWM-4Mwa6qLZTDfMDS82r0GhEHm_r-xbE/
- Report -
  https://docs.google.com/document/d/1bnuHls_YR6iUf8Inoce_JH-aKjetBMHblrzR9i9Lt4I/edit

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
  for the former method.
