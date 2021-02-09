# Chat App
This application was built using React Native and Expo.
We attempted 2 different versions. The midterm version is under /ChatAppTabs. 
This allowed multiple screens to be developed at once in parallel. 
Once we attempted to link to firebase, and a consistent theming, 
the tabs turned out to be a bad design.

We took what we learned and developed the Nav version, 
that used React Native's navigation package. 
This allowed us to make multiple page paths for both logged in, and logged out.

We originally wanted to use MySQL, but it was very hard to implement in React Native because of the infrastructure requirements.
We ended up using Firebase because it was designed cloud based, and for serverless implementations.
This also allowed for rapid development since it allowed both real time updates to the chatrooms, 
the database to store the data, and authentication to handle users securely.

## Start Program
git clone https://github.com/WhiteTitanX/CS398D_Final_Project
<br>cd /ChatAppNav
<br>npm install
<br>npm run web

## Presentation

https://docs.google.com/presentation/d/1NKG00dBPaM8kmOvGAavHLckGORNOyRKW6yFdChlJ8D8/edit?usp=sharing




