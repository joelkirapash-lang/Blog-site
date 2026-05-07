# Blog Site - React Lab

A personal blog site built with React using components and props.

## How to Run

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:5173

## Component Tree

└── App
    ├── Header
    ├── About
    └── ArticleList
        └── Article

## Components

- **App** - Root component, imports blog data and passes props down
- **Header** - Displays the blog name inside a header element
- **About** - Displays the blog image and description
- **ArticleList** - Maps over posts array and renders Article components
- **Article** - Renders a single blog post with title, date, and preview
