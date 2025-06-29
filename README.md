# phase-1-week-3-code-challenge
## Blog Post Manager

A simple blog post manager built with HTML, CSS, and JavaScript. Users can view, add, and explore blog posts using a local mock API powered by `json-server`.

---

## Features

- **View Posts:** See all blog post titles on page load.
- **Post Details:** Click a title to view full post details.
- **Add Posts:** Submit new blog posts via a form.
- **UI Enhancements:** Interactive, styled UI with hover effects and improved form placeholders.

---

## Project Structure

```
Blog-post-manager/
├── index.html      # Main HTML file
├── index.js        # JavaScript logic (fetch, display, add posts)
├── style.css       # Layout, text, and form styling
└── db.json         # Mock data for json-server
```

---

## Getting Started

### Prerequisites

- Node.js and npm
- Install `json-server` globally:
    ```bash
    npm install -g json-server@0.17.4
    ```
- Use `live-server` or another static server to serve HTML files

### Setup

1. Clone or download this repository.
2. Add sample data to `db.json`:
        ```json
        {
            "posts": [
                {
                    "id": 1,
                    "title": "Hello World",
                    "content": "This is the first blog post.",
                    "author": "Roy"
                }
            ]
        }
        ```
3. Start the mock API server:
        ```bash
        json-server db.json
        ```
4. Open the project in your browser using `live-server` or open `index.html` directly.

---

## API Endpoints

- `GET /posts` — Retrieve all posts
- `GET /posts/:id` — Retrieve a post by ID
- `POST /posts` — Add a new post

---

## Author

Created by Roy for Phase 1 - Week 3 Code Challenge.

---

## License

Open-source and free to use for learning purposes only.
