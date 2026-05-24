# 🎧 Podcast Preview Web Component 

This project uses a reusable Web Component called:

<podcast-preview></podcast-preview>

The component displays:

- Podcast image
- Podcast title
- Genres
- Number of seasons
- Last updated date

It also sends an event when a user clicks on the card.

---

# 📁 Files

index.html  
styles.css  
app.js  
data.js  
PodcastPreview.js  
README.md  

---

# 🚀 How To Register The Component

Inside index.html add:

```html
<script type="module" src="./PodcastPreview.js"></script>
<script type="module" src="./app.js"></script>
The component is registered inside PodcastPreview.js using:

customElements.define(
  "podcast-preview",
  PodcastPreview
);

🧩 How To Use The Component

Example:

<podcast-preview
  podcast-id="10716"
  title="Something Was Wrong"
  image="podcast-image.jpg"
  genres="Personal Growth, Investigative Journalism"
  seasons="14"
  updated="2022-11-03T07:00:00.000Z"
>
</podcast-preview>
📦 Passing Data

The component receives data using attributes.

Attribute	Purpose
podcast-id	Podcast ID
title	Podcast title
image	Cover image
genres	Podcast genres
seasons	Number of seasons
updated	Updated date

Example in app.js:

card.setAttribute(
  "title",
  podcast.title
);

card.setAttribute(
  "image",
  podcast.image
);

card.setAttribute(
  "genres",
  genreNames.join(", ")
);

card.setAttribute(
  "seasons",
  podcast.seasons
);

card.setAttribute(
  "updated",
  podcast.updated
);
🎯 Listening For Events

When the card is clicked, it sends a custom event called:

"podcast-selected"

Example:

card.addEventListener(
  "podcast-selected",
  () => {
    this.openModal(podcast);
  }
);

You can also get the podcast ID:

document.addEventListener(
  "podcast-selected",
  (event) => {
    console.log(event.detail.id);
  }
);
🛡️ Shadow DOM

The component uses Shadow DOM to keep styles separate from the rest of the app.

this.attachShadow({ mode: "open" });
📱 Responsive Design

The component works on:
-Desktop
-Tablet
-Mobile

💻 Built With
-HTML
-CSS
-JavaScript
-Web Components