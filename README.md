
# MindHive Full Stack Python Developer Assessment Project

I had so much fun building this project as it requires me to think outside of the box and since I had experience building API using Flask and BeautifulSoup, I had no trouble completing the tasks given within a short timeframe.




# Roadmap
I began planning for this project right after I received the LinkedIn message from Johnson who sent me a PDF containing this project's requirements. After reading the requirements, I began drafting the idea on how to solve the problems faced as described.

## Planning
During the planning stage, I gathered the rough idea on what the app will look like. Is it going to be a web app? Or an analytics dashboard? After understanding the requirements, I decided it is the former that we're after.

## Execution
I began developing part by part - beginning with scraping the data from Zus Coffee website, to storing it in a local SQLite database and building the API. After I have finished developing the API, I faced my first hurdle: front-end.

I had experience with developing React applications before, but it's been long since I developed one for the past year. Alas, I quickly refresh my memory by finishing up a few YouTube videos on React and voila! I managed to integrate Leafy to generate a dynamic map for this project. In the end, I ended the development with a smile knowing I have successfully overcome the obstacle.

### Closing
Closing phase includes deployment to Heroku, writing documentations and readme (which is what I'm doing right now). This part of the plan is very important as it tells a story or some sort of a journey novel of what the developers faced during the development and it can assist in installlation too! Which is what we will cover next.



## Tech Stack

**Client:** ReactJS

**Server:** Flask, SQLite

## Prerequisites
Python 3.10 and above
Node.js v18.1 and above

## Installation

To begin, clone the github repository

```bash
git clone https://github.com/abdumuhaimin/mindhive-assessment.git
cd mindhive-assessment
```

Install libraries with pip (for Flask back-end and npm for React front-end)

```bash
  pip install -r requirements.txt
  cd front-end
  npm i
  cd .. # back to parent directory
```

To run the development server

```bash
cd front-end
npm start
```

Make sure to run the server too!

```bash
cd ..
python app.py
```
    
## Deployment

To deploy this project to production run

```bash
  npm run build
```

This project has a live demo [here](https://aqueous-thicket-74537-0501aae48910.herokuapp.com/). Hosted by Heroku 😎


## Screenshots

![Interface - Zoomed Out](https://i.imgur.com/8QXEpc2.png)

![Interface - Zoomed In](https://i.imgur.com/5aDqCBw.png)

![Interface - Marker & Popup](https://i.imgur.com/Jh6DtgU.png)


## Documentation

Documentation for the code is available as MD files, one for the React `App.js` and the other is for the Flask `app.py`. It can be found in this repository: `react-docs.md` and `flask-docs.md` respectively

