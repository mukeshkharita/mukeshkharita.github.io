<!-- #$ Google Summer of Code 2018 with [WorldBrain.io - Verifying the Internet](https://worldbrain.io) -->

#### Hello!
I am Mukesh Kumar Kharita studying at National Institute of Technology Hamirpur, Himachal Pradesh, India. I have worked on Custom Analytics during Google Summer of Code 2018 program.

I started contributing to the [WorldBrain](https://worldbrain.io) in August 2017. I was new to open source at the time, so I started discussing on slack regarding the [Memex](https://github.com/WorldBrain/Memex) codebase; also I was a newbie to extensions codebase, therefore it was exciting for me.

It was really interesting to join the meetings of Worldbrain and build new features. For some time I worked on UI stuff, I tried to improve the UI with the help of [Oliver](http://github.com/oliversauter) and [Jon](https://github.com/poltak). I worked on adding the UI of bookmark filter. I also implemented the un/bookmark with the help of the team.

<!-- I was thinking before result of organizations that if worldbrain got selected then I'll be happy to work with such [awesome team](https://worldbrain.io/team). then the organization result came and Worldbrain got selected. :tada -->

I made the [proposal](https://docs.google.com/document/d/1K_t8HFQ59lQakYdQY42f5im35RiDdFn8u_b4gG06FHY/edit#) on Custom Analytics, which seemed to be an interesting project on behalf of the organization. I also asked my mentors ([Oliver](http://github.com/oliversauter), [Jon](https://github.com/poltak), [Vincent](https://github.com/ShishKabab), [Arpit Gogia](https://github.com/arpitgogia)) to review my proposal and finally I prepared my proposal for submission.

I got selected when the results came out. I was happy that I'll work on an important project, which could help make the extension better for users. The following was my [project](https://summerofcode.withgoogle.com/projects/#4509698049441792).

In the first month, I worked on Custom Analytics on the server side, because the server was the foundation to run the analytics. So we finally chose the aws-serverless-express to implement the analytics server. I used AWS S3, AWS Athena, AWS API Gateway and CloudFront. Finally we had all the data in the S3 buckets.

In the second month, I worked on putting the Analytics Server in the production. I implemented all the significant things in the extension, which included the extension code and the value of the events that can be used to show the activity based notifications. In this month we got the analytics backend in the production.

Currently I am working on the static notifications having resolved the main bugs related to the analytics server. Earlier this month I included the analytics for **memex.link** in the direct linking backend server. I am also working to extract the meaningful information from the data using Amazon Athena for SQL Queries and visualization using AWS Quicksight.

The code for the analytics backend is [here](https://github.com/WorldBrain/analytics-backend/commits?author=mukeshkharita).
The code for the analytics on the extension is [here](https://github.com/WorldBrain/Memex/pulls?q=is%3Apr+author%3Amukeshkharita).

By the end of official GSoC Coding period, I would have made 265 commits in the memex, analytics-backend and direct-linking-backend codebase.

Over the summer I have fallen in love with the WorldBrain organization and have learned a lot of stuff. I'm really looking forward to adding more features in the Memex soon, so that the Memex extension becomes more useful to everyone. I enjoyed working on a really cool open-source project like WorldBrain this summer and am very thankful to Google for providing me this opportunity. I would encourage everyone reading this to give the Memex a try and contribute to Memex if possible. 