# nmbo-app

![](https://github.com/kennethlng/nmbo-app/blob/master/src/assets/images/Cover@1x.png?raw=true)

NMBO is the fastest way to make a checklist with friends. Create a checklist and share the link, and anyone can start contributing. No account or download needed. 

To use NMBO: 

1. Go to [https://nmbo.app](https://nmbo.app). 
2. Create a new checklist or open a previous one.
3. Copy the checklist page URL and share it.

That's it! 

## Stack

NMBO is made with `React` for the frontend, `Next.js` for server-side rendering, `Bulma` for the stylized components, `Firebase` (Authentication, Firestore, Cloud Functions) and `Node.js` for the backend, and `Google Analytics`. 

## Problem

Last month my mom asked me what I wanted from Costco, but I had no easy way of sending her a quick grocery list. A week later, my wife and I were planning a weekend trip to the beach, but she uses a different checklist app than I do, so it was hard to collaborate without needing to download a new app. Such a small problem like this made me realize that there could be a market opportunity for a product where you could quickly create and share checklists with friends and family. 

Currently, there is an overwhelming number of checklist apps out there, but most of them are bloated with features and require you to create an account or download an app. You also can't share your lists with others unless they join the moat. 

## Solution

Inspired by Zoom's ease of use and Tik Tok's shareability, I chugged away on NMBO to create a simple, no-B.S. tool for collaborating with friends and family, a web app where I could easily share checklists on any messaging app where the conversations are happening. 

### Web-based

First and foremost NMBO is web-based. A web-based solution means that it is accessible to *everyone*, especially the less tech-savvy folks, like my wife, who aren't willing to download or learn new apps. 

### Firebase anonymous authentication

Creating an account on NMBO is not required thanks to Firebase's anonymous authentication, which creates an anonymous account and allows the user to interact with the Firestore database, like opening shared checklists and creating new checklists. 

### Next.js server-side rendering

Considering users share the checklists via their messaging apps, server-side rendering with Next.js was an absolute must to show the checklist title in link previews. With a traditional, client-side rendered React app, the page header tags are generated by JavaScript on the client-side, which means the tags aren't available when a link preview is generated. However, with a server-side rendered React app using Next.js, I'm able to grab data for the checklist from the database on the server side and attach the appropriate header tags before the site is generated as HTML for the client. As a result, the checklist name appears nicely in the link preview. 

![](https://github.com/kennethlng/nmbo-app/blob/master/src/assets/images/7A4B1CAF-B57B-4EF1-A3F4-9EDD5DF1B746.jpeg?raw=true)

## Feedback

NMBO is a work-in-progress, and I want to hear your ideas and feedback ([short Google Forms questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSf_GusPzzA4M1xNiKxHHVwEj4Q3iz_fWrX9pJXihlIjcdVmaQ/viewform)) so I can make it more useful for your needs. 
