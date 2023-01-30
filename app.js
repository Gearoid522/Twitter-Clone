const form = document.querySelector('#tweet-form');
const input = document.querySelector('#tweet-input');
const tweetsContainer = document.querySelector('#tweets-container');
const deleteAllButton = document.querySelector('#delete-all');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const tweet = input.value;
  input.value = '';

  const tweetElement = document.createElement('div');
  tweetElement.classList.add('tweet');

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');

  const likeContainer = document.createElement('div');
  likeContainer.classList.add('like-container');

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button')
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', function () {
    let likeCount = parseInt(likeCountSpan.textContent) || 0;
    likeCount++;
    if (likeCount > 99) {
      likeCountSpan.textContent = '99+';
    }
    else {
      likeCountSpan.textContent = likeCount < 10 ? `0${likeCount}` : `${likeCount}`;
    }
  });

  const likeCountSpan = document.createElement('span');
  likeCountSpan.classList.add('like-count');
  likeCountSpan.textContent = '00';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    tweetElement.remove();
  });

  likeContainer.appendChild(likeButton);
  likeContainer.appendChild(likeCountSpan);
  likeContainer.appendChild(deleteButton);

  tweetElement.appendChild(avatar);

  const tweetContainer = document.createElement('div');
  tweetContainer.classList.add('tweet-container');

  const timeContainer = document.createElement('div');
  timeContainer.classList.add('time-container');
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds()
  const yyyy = currentTime.getFullYear();
  const mm = currentTime.getMonth()+1;
  const dd = currentTime.getDate();
  timeContainer.textContent = `${dd < 10 ? "0" + dd : dd}/${mm < 10 ? "0" + mm : mm}/${yyyy} ${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  tweetContainer.appendChild(timeContainer);

  const paragraphElement = document.createElement('p');
  paragraphElement.classList.add('tweet-content');
  const paragraphs = tweet.split('\n');
  paragraphs.forEach(function (paragraph, i) {
    paragraphElement.innerHTML += paragraph;
    if (i < paragraphs.length - 1) {
      paragraphElement.innerHTML += "<br>";
    }
  });
  tweetContainer.appendChild(paragraphElement);

  tweetElement.appendChild(tweetContainer)
  tweetElement.appendChild(likeContainer);

  tweetsContainer.prepend(tweetElement);
});

deleteAllButton.addEventListener('click', function () {
  if (confirm('Are you sure you want to delete all tweets?')) {
    tweetsContainer.innerHTML = '';
  }
});
