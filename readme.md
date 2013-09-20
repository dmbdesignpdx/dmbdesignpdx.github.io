# DMB Designs

Note: All of your changes will take a little bit to get built by Github.

## How to write a new post

- Go to [Prose.io](http://prose.io)
- Navigate to the dmbdesignpdx.github.io repository
- Go into the _posts directory
- Hit New File
- Post title will be date-new-post.md, replace "new-post" with your post title, lowercase spaced with dashes. New title will be date-post-name-here.md
- If you'd like to upload an image, click the image button to upload or link to an image in your post
- Save the changes, refresh the page, and then hit "Publish". The post will now be on your site

## Modifying HTML/CSS/Javascript with Prose

- Go to [Prose.io](http://prose.io)
- Navigate to the file you'd like to change
- Make your changes in the browser
- Save/Commit the file

## How to add/modify files on your computer
- Open up Terminal and run these commands

```
  cd ~/Documents/site
  git pull --rebase origin master
  git push origin
```

- Make any changes you'd like to make
- Open up Terminal and run the following commands

```
  cd ~/Documents/site
  git add .
  git add -u
  git commit -m "Updated files locally"
  git push origin
```

## Running the site locally

- Open up Terminal and run the following commands

```
  cd ~/Documents/site
  jekyll serve --watch
```
- This will start the web site on your computer

Visit the site at http://localhost:4000

When you are ready to update the site, go back into terminal and press control+c to stop the server. You can then update the code as per the instructions above.
