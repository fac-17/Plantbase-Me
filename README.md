![A Perfect Day For Bananafish, by J. D. Salinger](https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447411550l/27819869.jpg)

# Plantbase-Me 🌱

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

---

## Installation Guide

- Clone this Repo
- Run `npm i`
- Create a .env file in the route with:
  - PLANTBASE_DB_URL
  - LOCAL_DB_URL
  - TEST_DB_URL
- Run `npm run dev` to run the server with nodemon

---

### Main User Journey

`As a user, I'd like to find a plant-based product related to a craving through three pages`

---

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

---

## Our initial design

![]()
