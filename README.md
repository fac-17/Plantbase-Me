![A Perfect Day For Bananafish, by J. D. Salinger](https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447411550l/27819869.jpg)

# Plantbase-Me

Help save all the animals, one recipe at a time.

---

## Team

- Emmanuel (Scrum Master / Scrummy Mummy)
- Christine (Quality Assurance)
- Colette (UX/UI)
- Sam (DevOps)
- Gregor (DevOps)

---

## Project idea

Our app idea lets a user search for a non-vegan dish that they might be craving, and shows them a good alternative. We hope that this will make it easier for people to make a few changes here and there. We may also include some information about why this will help the environment, but we want to avoid shaming or alienating anyone.

The idea is to encourage more people to cut out some animal products, with a focus on the idea of more people making a few changes that they're comfortable with, rather than a few people doing everything they can and the rest feeling alienated and not feeling like they can make a difference. We hope to avoid the "all or nothing" mentality that leaves lots of people feeling like there's no point in making any effort; if lots of people make a few changes, it will add up.

## Installation Guide

- Clone this Repo
- Run `npm i`
- Create a .env file in the route with:
  - PLANTBASE_DB_URL
  - LOCAL_DB_URL
  - TEST_DB_URL
- Run `npm run dev` to run the server with nodemon

## User Journey

### Main User Journey

`As a user, I'd like to find a plant-based product related to a craving through three pages`

## User Stories

#### Introduction

- As a user, I would like to understand/ be introduced to what the app does #6
- As a user, I would like to understand the moral impact I can make by using the app #16

#### Selection Page

- As a user, I would like to see a clear selection of product categories #4
- As a user, I would like to see clearly which product category I have selected. #5
- As a user, I would like it to be clear how to move to the results page #7

#### Results Page

- As a user, I'd like to see an image relating to each product #8
- As a user, I'd like to see the top comment on a product & its rating #10
- As a user, I'd like to see a clear and clean summary of the product's ratings/comments (layout) #13
- As a user, I'd like to sort products by rating #15
- As a user, I would like it to be clear how to move to the product page #17
- As a user, I'd like it to be clear how to move back to the previous page #18
- As a user, I'd like to see the top tags on a product [stretchgoal]
- As a user, I'd like to sort by product-commment 'tag' [stretchgoal]

#### Product Page

- As a user, I'd like to see an image relating to the product #14
- As a user, I'd like to see where I can buy a product #30
- As a user, I'd like it to be clear how to move back to the previous page #34
- As a user, I'd like to see a short product description #35
- As a user, I'd like to vote/upvote comments [stretchgoal] #36
- As a user, I'd like to see the top comments first [stretchgoal] #37
- As a user, I'd like to see the nutritional values of the product [stretchgoal] #38
- As a user, I'd like to see the most common tags used [stretchgoal] #
- _everything relating to being able to add in feedback [strechgoals]_ #

### Accessibility

- As a user, I'd like the website to have high contrast between background and text colors #9
- As a user, I'd like any images to have alt text #11
- As a user, I'd like to be able to tab through the page #12
- As a user, I'd like a clear understanding of what the app does #20

---

### User Motivations

- As a user, I would like to move towards eating more plant-based foods #19
- As a user, I would like to feel included in the app's community #21
- As a user, I'd like to feel welcome to try plantbased products without making a commitment to becoming vegetarian/vegan #22

---

#### Main Flow

1. Home page should include:

- Header
  - Title
  - Logo
  - Navbar (Burger)

* Short app summary on how to use app
* Get started button

* Footer

2. Selection Page

- Header (Title, Logo, Burger)
- 4 Initial Products (Cheese, Milk, Meat, Sweets)
- Select button underneath Products
- Footer

3. Results page includes: #

   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - A list of products
   - Product with title, image, rating, top comment
   - Clicking on a product will take you to the product's page
   - Footer

4. Product page includes: #

   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - Product title
   - Product description
     - Nutritional Facts [stretchgoal]
     - Shops product available in
     - Price
   - Product rating [stretchgoal]
   - Feedback section [stretchgoal]

5. Our Mission Page

   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - Short mission statement
   - Footer

6. How to contribute

   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - Short step-by-step description
   - Icons for each step
   - A short description of the nature of contributions
   - Footer

7. Add a Product
   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - Selectable icons for each product
   - Form with:
     - Product Name
     - Product Image
     - Product Description
     - The top comment
     - Nutritional Information (if known)
     - Purchase links of where to buy
     - Submit button
   - Footer
8. Thanks for Submission

   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - Brief Thank you for submission message
   - Footer

9. Error Page (404)

   - Header (Title, Logo, Burger)
   - Back arrow (to return to previous page)
   - 404 Error Image and text
   - Footer

10. Error Page (505)
    - Header (Title, Logo, Burger)
    - Back arrow (to return to previous page)
    - 505 Error Image and text
    - Footer

---

## Main Technical goals

- Decide on file structure [DevOps]

  - Public
  - Src
  - Assets
  - .gitignore
  - .env
    - incl. Database URL and test db url
  - .travis.yml

- Build the database schema [all]
  - Database 1: Cravings
    - Columns: primary key, cravingname
  - Database 2: Products
    - Columns: primary key, productname, description, wheretobuy[array], productimage[link], nutrition, craving primary key, price
  - Database 3: Ratings & Comments
    - Columns: primary key, product primary key, rating, comments
  - Queries:
    - Find list of products by craving
    - Find all comments that relate to a product
    - Filtering [stretch]:
      - Price filter
      - Rating filter
      - Allergen diet filter [super stretch]
- Icons and colours used to categorise cravings [UX to decide]

- Deployment Strategy

  - [Deployed to Heroku](https://plantbase-me.herokuapp.com/)

- Dependencies

  - express
  - express-handlebars
  - dotenv
  - body-parser
  - pg-promise
  - tape
  - tap-spec
  - tape-promise
  - url
  - nodemon
  - supertest

- Linter

  - eslint

- Prettier

- Continuous Integration

  - Travis

- Naming conventions

- Testing
  - Tests on all routes
  - Tests on queries

## What we learnt - Stuck and [sometimes] Unstuck

### Topic: Server set up

1. in app.js whats the difference between:

```javascript
app.use(bodyParser.urlencoded());
app.use(bodyParser.json
```

2. Why do we require express and call it as a function?

```javascript
const app = express();
```

3.

### Topic: Why does tape group our tests?

1. When we run a second set of tape tests our second set are grouped under the first heading. Why?

![](https://i.imgur.com/m0iJ1d1.png)

Seems to do with asynchronicity where the second set are running before the t.end of the first set.

See these similar issues:
[381](https://github.com/substack/tape/issues/381)
[358](https://github.com/substack/tape/issues/358)

You can use:

[tape-promise](https://www.npmjs.com/package/tape-promise)

## Create a test DB

![](https://i.imgur.com/yWWagb2.png)

## Testing a post request

- How can we test a post request?
- Can we use a get request after?
- We had a problem with promises
