#### Hello!

I am Mukesh Kumar Kharita studying at National Institute of Technology Hamirpur, Himachal Pradesh, India. I have worked on Custom Analytics during Google Summer of Code 2018 program.

The goal of WorldBrain organization is to provide the ability to organize the content very effectively, search every website that you visit by words without infringing user's privacy. All the data saved in the local storage. It helps to make the work easy for students, journalists, researchers etc. It helps to provide the powerful search and see the website that you have visited easily in every device. Share the content that you have searched with other people in your network.

The WorldBrain organization people are already working hard to achieve the goal, it already has a powerful search and index the website in the browser itself. Also, it provides the ability to filter the results by bookmarks, tags, domains, words or NLP queries like The article that I show 2 weeks ago. It also has an annotation feature on every page, so the user can add the annotation and comments and later we will provide the ability to search by annotation too. It has collections so you can make your own collection of the website on a particular topic and later you can find again very easily. Also, you can make a link to the website and share with other people. Currently, we are working on back up the data that you can do manually or automatically. The WorldBrain organization is moving ahead very fast to achieve the goal.

I've worked on Custom Analytics project this summer and the high-level goal of the project is to analyse the behaviour of the memex users how s/he uses the extension. It also helps us to improve the software by taking the appropriate action after seeing the activities of the users. It will help us to provide the data about the feature uses by the users, that will help to enhance the features. This custom analytics needed because the current analytics tools are not suitable for browsers or like G-Analytics are privacy invasive. We needed a way to get detailed analytics without infringing user’s privacy or giving away huge amounts of data to 3rd party providers. So we had to develop one ourselves. Also, it will provide the activity based notifications in the extension itself.

This project helps to get Memex better because it allows to make better business decisions and improve Memex without infringing user’s privacy. It also helps to make the activity based notification on the extension itself.

#### Modules developed for Custom Analytics Project

**analytics-backend:** This repository contains APIs by which we will get the data from extension. If the user has enabled do not track then it will not store the data.

**Memex/src/analytics/internal:** This module contains the code to store the data in the extension itself and make the data cached so that in the future we can show the dashboard in the extension itself and show the activity based notifications.

**Memex/src/analytics/internal/send-to-server:** This module contains the code for send the data from extension to server. It has pool of the events and when the browser is idle for 20s it sends the data to server.

**Memex/src/:** We are sending data from different modules by calling the function in `Memex/src/analytics/internal` module.

**direct-linking-backend:** This repository contains the data sending the data to server when any memex.link is created, viewed.

#### Link of the code
The Code for the analytics backend is [here](https://github.com/WorldBrain/analytics-backend/commits?author=mukeshkharita)

The code for the analytics on the extension is [here](https://github.com/WorldBrain/Memex/pulls?q=is%3Apr+author%3Amukeshkharita)

The code for the analytics on the direct linking is is [here](https://github.com/WorldBrain/direct-linking-backend/commits?author=mukeshkharita)

#### Improvements

Currently we are visualising the data on Amazon Quicksight, for now we are just visualising the data by very small number of graphs, we have to work on so many things when we are seeing the activity of users.

#### Journey

I started contributing to the [WorldBrain](https://worldbrain.io) in August 2017. I was new to open source at the time, so I started discussing on slack regarding the [Memex](https://github.com/WorldBrain/Memex) codebase; also I was a newbie to extensions codebase, therefore it was exciting for me.

It was really interesting to join the meetings of Worldbrain and build new features. For some time I worked on UI stuff, I tried to improve the UI with the help of [Oliver](http://github.com/oliversauter) and [Jon](https://github.com/poltak). I worked on adding the UI of bookmark filter. I also implemented the un/bookmark with the help of the team.

#### Timeline during GSoC

I made the [proposal](https://docs.google.com/document/d/1K_t8HFQ59lQakYdQY42f5im35RiDdFn8u_b4gG06FHY/edit#) on Custom Analytics, which seemed to be an interesting project on behalf of the organization. I also asked my mentors ([Oliver](http://github.com/oliversauter), [Jon](https://github.com/poltak), [Vincent](https://github.com/ShishKabab), [Arpit Gogia](https://github.com/arpitgogia)) to review my proposal and finally I prepared my proposal for submission.

I got selected when the results came out. I was happy that I'll work on an important project, which could help make the extension better for users. The following was my [project](https://summerofcode.withgoogle.com/projects/#4509698049441792).

In the first month, I worked on Custom Analytics on the server side, because the server was the foundation to run the analytics. So we finally chose the aws-serverless-express to implement the analytics server. I used AWS S3, AWS Athena, AWS API Gateway and CloudFront. Finally we had all the data in the S3 buckets.

In the second month, I worked on putting the Analytics Server in the production. I implemented all the significant things in the extension, which included the extension code and the value of the events that can be used to show the activity based notifications. In this month we got the analytics backend in the production.

Currently I am working on the static notifications having resolved the main bugs related to the analytics server. Earlier this month I included the analytics for **memex.link** in the direct linking backend server. I am also working to extract the meaningful information from the data using Amazon Athena for SQL Queries and visualization using AWS Quicksight.

By the end of official GSoC Coding period, I would have made 300+ commits in the memex, analytics-backend and direct-linking-backend codebase.

Over the summer I have fallen in love with the WorldBrain organization and have learned a lot of stuff. I'm really looking forward to adding more features in the Memex soon, so that the Memex extension becomes more useful to everyone. I enjoyed working on a really cool open-source project like WorldBrain this summer and am very thankful to Google for providing me this opportunity. I would encourage everyone reading this to give the Memex a try and contribute to Memex if possible. 