Chitter is a Single Page Application (SPA) for the front end of a Twitter-type application.
Making it a Single Page Application offers several advantages over traditional multi-page applications (MPAs) and server-side rendered (SSR) applications.

## Advantages of SPA over MPA:
1.  Seamless and responsive User Experience by dynamically updating content without full page reloads. This results in  faster navigation and smoother interactions.
2.	Faster load times - SPAs load all necessary assets initially and then fetches data from the server as needed
3.  Improved Performance - SPAs use client-side rendering, offloading processing to the user's browser rather than the server

## Disadvantages of SPA over MPA:
1. Initial load time can be longer due to the need to download and execute JavaScript bundles
2. Susceptibility to security vulnerabilities as SPAs rely heavily on client-side code
3. Browser Compatibility, especially for devices that don't support modern JavaScript features

## Advantages of SPA over SSR:
1. Reduced server load - much of the application logic is offloaded  to the client-side , reducing the strain on server.
2. Faster performance - faster initial page load and navigation because SPA loads the entire application upfront and only updates the content that changes dynamically without full-page reloads.
3. Easier development and maintenance: SPAs often follow a modular architecture, making it easier to organise code and maintain large-scale applications

## Disadvantages of SPA over SSR:
1. SEO challenges - SPAs can face challenges with search engine optimization (SEO) because search engine crawlers may have difficulty indexing JavaScript-heavy  content.
2. Security concerns -  SPAs are susceptible to certain security vulnerabilities, such as Cross-Site Scripting (XSS) attacks and client-side data manipulation. 
3. Complexity: SPAs introduce  complexity to the development process, especially when dealing with client-side routing, state management, and asynchronous data fetching.
