class PodcastPreview extends HTMLElement { 
  constructor() { 
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "title",
      "image",
      "genres",
      "seasons",
      "updated",
    ];
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  attributeChangedCallback() {
    this.render();
  }

  addEventListeners() {
    this.shadowRoot.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("podcast-selected", {
          bubbles: true,
          composed: true,
          detail: {
            id: this.getAttribute("podcast-id"),
          },
        })
      );
    });
  }

  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  render() {
    const title = this.getAttribute("title") || "";
    const image = this.getAttribute("image") || "";
    const genres = this.getAttribute("genres") || "";
    const seasons = this.getAttribute("seasons") || "";
    const updated = this.getAttribute("updated") || "";

    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
        }

        .card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: 0.3s ease;
          font-family: Arial, Helvetica, sans-serif;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .card-image {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .card-content {
          padding: 1rem;
        }

        .card-title {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          color: #111827;
        }

        .card-info {
          color: #6b7280;
          margin-bottom: 0.7rem;
          font-size: 0.95rem;
        }

        .genre-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: #f3f4f6;
          padding: 0.35rem 0.7rem;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #111827;
        }

        .updated {
          color: #6b7280;
          font-size: 0.9rem;
        }
      </style>

      <article class="card">
        <img
          src="${image}"
          alt="${title}"
          class="card-image"
        />

        <div class="card-content">
          <h2 class="card-title">${title}</h2>

          <p class="card-info">
            🎙️ ${seasons} seasons
          </p>

          <div class="genre-tags">
            ${genres
              .split(",")
              .map(
                (genre) => `
                  <span class="tag">${genre.trim()}</span>
                `
              )
              .join("")}
          </div>

          <p class="updated">
            Updated ${this.formatDate(updated)}
          </p>
        </div>
      </article>
    `;
  }
}

customElements.define(
  "podcast-preview",
  PodcastPreview
);