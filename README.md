# **Movie List APP**

**OVERVIEW**

In this app the user can find and look for movie and actor details. The user can also search, filter and sort to find the movie/actor.

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**FEATURES**

1. The user can see the large number of movies data in the website

2. See the detail of an individual movie like rating, cast, short description and recommended movies and play trailer

3. See the detail of an individual actor with popular movies of that actor.

4. **Search** movie/actor by search bar

5. **Filter** movie on the basis of rating, genre and release dates.

6. **Sort** movie on the basis of type

7. User can **login/signup** using email password or **social account** (Google and Facebook)

8. Authenticated user can create movie **wish list**.

9. They can also see their **movie view history**.

10. However, the unauthenticated user can access all the pages except view wish list, user details and view history.

11. Toggle between different **theme colours**

12. For authenticated user the theme colour would be saved online.

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**API INFORMATION**

API used: TMDB (The movie database) version 3

Link: [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**INSTALL GUIDE**

    $ git clone [https://github.com/attainu/frontend-project-mukul-prasad-au9.git](https://github.com/attainu/frontend-project-mukul-prasad-au9.git)



    $ cd frontend-project-mukul-prasad-au9



    $ git npm instal

l

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**START THE PROJECT**

    $ git npm start

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**DEPLOYMENT**

The project is deployed on Vercel on the given link

Link: [https://movie-time-app.vercel.app/](https://movie-time-app.vercel.app/)

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**TECHNOLOGY USED**

1. Firebase

1. Firebase authentication for login/signup

1. Firebase firestore for storing and managing data

1. API database – TMDB API

1. Major packages used

1. **axios** – To fetch data from html requests

1. **firebase** – To setup the firebase

1. **react-redux, redux, redux-devtools-extension** – to manage state using redux store

1. **redux-thunk** – middleware for async API call

1. **react-router-dom** – for applying routing

1. Extra Packages for styling used

1. **node-sass** – For running pre-processor in styling

1. **react-loading** – for image lazy loading

1. **react-paginating** – for pagination in the movie list

1. **react-rating-stars-components** – for displaying movie rating in star

1. **react-slick** – for performing carousel functionality

1. **react-toastify** – for showing notification or action popup

1. **react-tooltip** – for applying the tooltip in the app

1. **sweetalerts** – modern alert box to display major errors

![](RackMultipart20210121-4-1at6jwq_html_9c0fdd29d2e8037f.gif)

**PAGE FEATURES**

**HOMEPAGE-**

Where all the listing of movies is done

There are two filter options-

1.  **On the basis of discovery**

1.  a). top rated

1.  b). popular

1.  c). upcoming

1.  **Custom filter**

1.  Select genre

1.  Minimum year

1.  Sorting

1.  Minimum rating

Pagination is implemented so that user can see whole list of movies

**Movie Card**-

1. Movie card are the components which have

2. Ratings

3. Name

4. Add to Wishlist/remove

**MOVIE DETAIL PAGE**-

1. TOP CONTAINER-

1. Contains-Poster

1. description

1. background Poster

1. YouTube Trailer

1. MOVIE CAST **-** list of all cast

1. REVIEW

1. RECOMMENDED MOVIES

**ACTOR DETAIL PAGE**-

1. Actor Poster

2. Actor Detail

3. Known for Movie List

**MOVIE PAGE**-

1. Most popular movie trailers

2. Now playing movie list

3. Recommended movie list

**LOGIN/SIGNUP**-

1. User can login and signup according to their need

2. Login/signup options

3. Email Password

4. Google login

5. Facebook login

6. The login user can save movie in wish list

7. Movie view history will be created

**USERPAGE**-

1. Personal Detail Page

2. Change Theme Page

3. History Page

4. Wishlist Page

**FOOTER**-

1. Description and links

2. Copyright and logo

**AUTHOR**

Akhilesh Singh – akhileshsin97@gmail.com

Mukul Prasad – mukulp0783@gmail.com
