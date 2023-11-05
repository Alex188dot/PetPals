# Pet Pals

Pet Pals is a social media app for pet lovers, where users can share photos and updates, connect with other pet owners and find pet-related content.

This responsive web app was built with the MERN stack (MongoDB, ExpressJS, React, NodeJS). The frontend is hosted on Vercel and the backend is hosted on render.com. 

Please note the first time you access the web app and try to sign up or login, it will take about a minute for the server to respond, as this has been hosted on a free plan. The requests that come after the first one (and within 15 minutes from the last one) will have a normal response time. 

You can access Pet Pals from the following link: https://pet-pals-pied.vercel.app/auth

You will be prompted to login with you credentials or sign up:

<img width="1437" alt="Screenshot 2023-11-05 at 15 10 48" src="https://github.com/Alex188dot/PetPals/assets/117444853/59af71ef-5a37-40b5-802c-2884577b793d">

after either option you will be able to access the homepage. On the left, under People you may know, you can follow or unfollow other users. Example below:

<img width="1436" alt="Screenshot 2023-11-05 at 15 18 00" src="https://github.com/Alex188dot/PetPals/assets/117444853/7b642a4f-dd5b-480e-9387-e70cbab7d889">

The posts you see in the timeline are chronologically and dinamically fetched from the DB and include both your posts and your followings' posts. This means that each user will have a different timeline. 

If you prefer Dark Mode you can just toggle the top right icon and switch between light and dark mode with ease:

<img width="1424" alt="Screenshot 2023-11-05 at 15 19 12" src="https://github.com/Alex188dot/PetPals/assets/117444853/d6718b04-bdbe-43ab-893e-5bd284ffe7c7">

If you click on Profile on the left section, you will be redirected to your profile, where you will be able to see only your posts:

<img width="1429" alt="Screenshot 2023-11-05 at 15 19 49" src="https://github.com/Alex188dot/PetPals/assets/117444853/2f3ed1d8-f209-4361-95e7-99498ec20040">

or add additional info, by clicking the pencil icon on the left. This will open a modal that looks like this:

<img width="1423" alt="Screenshot 2023-11-05 at 15 20 04" src="https://github.com/Alex188dot/PetPals/assets/117444853/0707e6f7-a51d-47de-acb6-a765e104b51c">

Here you will also be able to change your profile picture and your cover picture. 

If you are interested in sharing posts, you can do so in several ways: from the profile page, by clicking the Share button on the right or from the homepage. 
Let's go back to the homepage for this. If you click on Photo you will be prompted to upload a photo from your device. Once you choose a file, a preview will appear right below the Photo button. Additionally an X button will appear on the top right of the image. If you don't want to proceed you can just click on the X and the image will disappear. Example below:

 <img width="1429" alt="Screenshot 2023-11-05 at 15 23 50" src="https://github.com/Alex188dot/PetPals/assets/117444853/5bac8cb5-31f2-43be-ba0b-d605fff95485">

On the other hand if you are happy with the result, you can just click on Share and the post will appear in your timeline:

<img width="1424" alt="Screenshot 2023-11-05 at 15 24 17" src="https://github.com/Alex188dot/PetPals/assets/117444853/bae85808-c2fe-463b-a2f1-88ea39dd0704">

Once you are done browsing and scrolling you can just click on the Logout button at the bottom right and you will be logged out and redirected to the login screen. 
