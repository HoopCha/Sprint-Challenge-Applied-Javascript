// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response)
    response.data.articles.bootstrap.forEach(item => {
        cardsCont.appendChild(cardCreator(item));
    })
    response.data.articles.javascript.forEach(item => {
        cardsCont.appendChild(cardCreator(item));
    })
    response.data.articles.jquery.forEach(item => {
        cardsCont.appendChild(cardCreator(item));
    })
    response.data.articles.node.forEach(item => {
        cardsCont.appendChild(cardCreator(item));
    })
    response.data.articles.technology.forEach(item => {
        cardsCont.appendChild(cardCreator(item));
    })

  })

cardsCont = document.querySelector('.cards-container');

function cardCreator(element){  
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document. createElement('div');
    const cardImgcont = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardBy = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgcont.classList.add('img-container');

    cardHeadline.textContent = element.headline;
    cardImg.src=element.authorPhoto;
    cardBy.textContent = element.authorName;

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgcont);
    cardImgcont.appendChild(cardImg);
    cardAuthor.appendChild(cardBy);

    return card;
}