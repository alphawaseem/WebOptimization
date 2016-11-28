# Website Optimization

This project is part of udacity's front-end nanodegree program.
In this project I have optimized Cameron's portfolio website.

## Links to website

* [unoptimized site](http://cameronwp.github.io/udportfolio/index.html)
* [optimized site](http://waseemahmed.in/cam_perf/index.html)


## PageSpeed Insights Scores
	
#### BEFORE:
	index.html : Speed 28
#### AFTER:
	index.html : Speed 99

## How to use gulp
 
 1. To minify html use this command:

 	```$ gulp html```

 2. To minify css files: 

    ```$ gulp css```

 3. To minify js files:

 	```$ gulp js```

 4. To minify html in pizza site: 

 	```$ gulp pizza_html```

 5. To minify css in pizza site:

 	```$ gulp pizza_css```

 6. To minify js in pizza site:
 
 	```$ gulp pizza_js```


## Things I did to optimize this site

 1. Minify all html,css,js files
 2. Configured my server to deliver compressed files to the browser
 3. Added and configured .htaccess file to root of the website to cache the files
 4. Optimized and compressed images
 5. Removed rendered blocking css and js files
 6. Refactored code to remove layout trashing when page is scrolled and pizza's are resized
 7. Added viewport to pizza.html