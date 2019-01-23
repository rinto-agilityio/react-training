module.exports = {
  "authors": [
    {
      "id": 1,
      "name": "Jake Prins",
      "desc": "Maker of things"
    },
    {
      "id": 2,
      "name": "Dan Abramov",
      "desc": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans."
    },
    {
      "id": 3,
      "name": "Dominic Fraser",
      "desc": "Edinburgh, Scotland."
    }
  ],
  "posts": [
    {
      "id": 1,
      "title": "Mocking ES and CommonJS modules with jest.mock()",
      "authorId": 3,
      "content": "In order for a unit test to be worthwhile it must be reliable; it should not be reliant on hopeful consistency of external dependencies in order to pass. External dependencies can include any modules/packages external to the test subject, requests to a database, or requests to an API. If running the same test several times without change can result in different outcomes, the test loses value. If trust in the test is lost, less focus is inevitably paid to test failures."
    },
    {
      "id": 2,
      "title": "Making Sense of React Hooks",
      "authorId": 2,
      "content": "We know that components and top-down data flow help us organize a large UI into small, independent, reusable pieces. However, we often can’t break complex components down any further because the logic is stateful and can’t be extracted to a function or another component. Sometimes that’s what people mean when they say React doesn’t let them “separate concerns.”"
    },
    {
      "id": 3,
      "title": "Why side projects are so damn important",
      "authorId": 1,
      "content": "Learning and mastering a new skill can be tough, but with enough persistence and motivation there is a lot we can achieve. Like learning how to code, it can be hard, frustrating and time-consuming. In the end, the most important thing to do is to keep going and gain experience."
    },
    {
      "id": 4,
      "title": "Progressive enhancement with CSS Grid",
      "authorId": 3,
      "content": "CSS Grid (Grid) has been out for some time now, with full support in major modern browsers. I’ll leave others to dive into why it’s so great and what new design possibilities it makes so easy to explore. If you have been looking for the best way to support responsive web designs, I’ve yet to see anyone that doesn’t love Grid. It’s simple to use, yet extremely powerful and flexible."
    },
    {
      "id": 5,
      "title": "React Components, Elements, and Instances",
      "authorId": 2,
      "content": "Many people get confused by the difference between components, their instances, and elements in React. Why are there three different terms to refer to something that is painted on screen?\nIf you’re new to React, you probably only worked with component classes and instances before. For example, you may declare a Button component by creating a class. When the program is running, you may have several instances of this component on screen, each with its own properties and local state. This is the traditional object oriented UI programming. Why introduce elements?"
    },
    {
      "id": 6,
      "title": "The Evolution of Flux Frameworks",
      "authorId": 2,
      "content": "There has been no shortage of great Flux implementations, such as Flummox, Alt, or Fluxible. Most of them are focused on making Flux easier to use with the server rendering and reducing the boilerplate. They also often provide convenience utilities like higher-order components and asynchronous action helpers. Still, under the hood, many of them are built on top of the original Flux Dispatcher."
    },
    {
      "id": 7,
      "title": "How to Create and Publish a Chrome Extension in 20 minutes",
      "authorId": 1,
      "content": "Ever wondered what it would be like to create a Chrome extension? Well, I’m here to tell you just how easy it is. Follow these steps and your idea will turn into reality and you’ll be able to publish a real extension in the Chrome Web Store in no time."
    },
    {
      "id": 8,
      "title": "You Might Not Need Redux",
      "authorId": 2,
      "content": "People often choose Redux before they need it. “What if our app doesn’t scale without it?” Later, developers frown at the indirection Redux introduced to their code. “Why do I have to touch three files to get a simple feature working?” Why indeed!"
    },
    {
      "id": 9,
      "title": "What are encryption keys and how do they work?",
      "authorId": 3,
      "content": "In cryptography a ‘key’ is a piece of information used in combination with an algorithm (a ‘cipher’) to transform plaintext into ciphertext (encryption) and vice versa (decryption).\nA cipher can be ‘reciprocal’ if it is used for both encryption and decryption, or ‘non-reciprocal’ if a transformation to the key is required when using it in reverse."
    },
    
    {
      "id": 10,
      "title": "Here’s what I learned at the world’s biggest React conference",
      "authorId": 1,
      "content": "In her talk, Tracy showed why reactive programming can be a more efficient way to code. She also discussed how it has been adopted by industry leaders such as Netflix, Slack, Microsoft, and Facebook as the new standard for developing applications. It seems very promising, especially libraries like RxJS, that help developers deliver complex features quicker with less, more maintainable code."
    }
  ]
}
