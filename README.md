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
