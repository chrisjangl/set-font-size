# Set font size
Quick and dirty script to set the font size for common elements from the front-end. Originally created to help designers &amp; stake holders  easily experiment with different font sizes on different sized screens to see which worked best.

## Dependencies
### Bootstrap CSS & JS
For styling and easily hiding/displaying the form (I used a collapsible div). Neither one is required for the actual functionality, and if you don't need to style the form elements or hide/show the form, you can ignore them all together.

## Set up
For organizational purposes, I've created separate files for the html, style & JS. But when using it, I combine the form, styles & script and add them all inline where needed for ease of use. I'm using this in a development environment, so having inline styles & JS doesn't bother me. Your call as to how you want to handle it. 

If keeping the files separate, don't forget to link the stylesheet & script wherever you're using the form - the HTML doesn't include these.

## How it works
If using the collapsible form, click/tap on "Adjust font sizes" button to show the form. When you click/tap into an input (say the H1), if there's a H1 tag on the page, the first one will be highlighted. You'll also get a link below the input that will take you to that text so you know what you're working with. If there is no H1 on the page, you'll get a red notice below the input instead. Enter the font size in pixels (but only the number - don't include px) you want to set the element to and hit the **Set It** button. All H1 tags on the page will now be set to the size you entered.
