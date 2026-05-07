// Article component - displays a single blog post
// Connected to: ArticleList (parent)
// Props received: title (string), date (string), preview (string)

function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
