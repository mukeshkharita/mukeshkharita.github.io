# Google Summer of Code 2018 with [WorldBrain.io - Verifying the Internet](https://worldbrain.io)

## Hello!
I am Mukesh Kumar Kharita studying at National Institute of Technlogy Hamirpur, Himachal Pradesh India. I have worked on Custom Analytics over Google Summer of Code 2018 program. I started contributing to worldbrain in August 2017.

I started contributing to the Worldbrain in the August 2017, I was new to open source to that time so I started chatting on slack regarding extension code base; also I was newbie to extensions codebase, Therfore it was exciting to me. I opened my first pull request.

It was really interesting to join the meeting in the worldbrain and build new features, for some time I worked on UI stuff, I tried to improve the UI with the help of [Oliver](http://github.com/oliversauter) and [Jon](https://github.com/poltak). I worked on added the UI of bookmark filter. I also impement the un/bookmark with the help of team etc.

I was thinking before result of organizations that If worldbrain got selected then I'll be happy to work with such [awesome team](https://worldbrain.io/team). then the organization result came and Worldbrain got selected. :tada

I make the [proposal](https://docs.google.com/document/d/1K_t8HFQ59lQakYdQY42f5im35RiDdFn8u_b4gG06FHY/edit#) on the Custom Analytics, that was one of the important project for the organization and me. Therefore I took the Custom Analytics as a project for GSoC. I also reviewed the proposal by the team ([Oliver](http://github.com/oliversauter), [Jon](https://github.com/poltak), [Vincent](https://github.com/ShishKabab), [Arpit Gogia](https://github.com/arpitgogia)) and finally I prepare my proposal to submit.

I got selected when the result came out. I was happy that I'll work on an important project, which can help to make the extension better for users. This was my [project](https://summerofcode.withgoogle.com/projects/#4509698049441792).

In the first month I worked on Custom Analytics on the server side, becuase the server was key to run the analytics. So we finally choose the aws-serverless-express for implement the analytics server. I started working on server using AWS S3, AWS Athena, AWS API Gateway, CloudFront. So we now finally have all the data in the S3 bukcets.

In the second month I worked on the analytics server to put this in the production, so finally I implement all the things in the extension. It includes the extension code and the value of events that can be used to show the activity based notifications. In this month we got the analytics backend in the production.

In the third month I am working on the static notifications. I also resolve the main bugs related to the analytics server. In this month I include the analytics for mememx.link implement on the direct linking backend server. Currently I'm working to extract the meaningful data from the data. We use Amazon Athena for writing the SQL Queries. Also working on visualization using AWS Quicksight. So that we can see the reason for uninstallation.

The Code for the analytics backend is [here](https://github.com/WorldBrain/analytics-backend/commits?author=mukeshkharita)
The code for the analytics on the extension is [here](https://github.com/WorldBrain/Memex/pulls?q=is%3Apr+author%3Amukeshkharita)

By the end of official GSoC Coding period, I have made 265 commits in the memex and analytics-backend codebase.

Over the summer I have fallen in love with the WorldBrain organization and have learned a lot of stuff. I'm really looking forward to adding more features in the Memex soon, so that the Memex extension becomes more useful to everyone. I loved working on a really cool open-source project like WorldBrain this summer and am very thankful to Google for providing me this opportunity. I would encourage everyone reading this to give the Memex a try and contribute to Memex if possible. 