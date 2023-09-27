import ReactMarkdown from "react-markdown";
import "./BlogPost.css";

const Blog = ({ post }) => {
  const [metadata, markdownContent] = post.content
    .split("---\n")
    .filter(Boolean);

  const metadataObject = metadata
    .split("\n")
    .filter(Boolean)
    .reduce((acc, line) => {
      const [key, value] = line.split(":").map((item) => item.trim());
      acc[key] = value;
      return acc;
    }, {});

  const coverurl = `https://${metadataObject.cover}`;

  return (
    <div className="blog-post">
      <h1 style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}>
        {metadataObject.title}
      </h1>

      <img src={coverurl} alt="cover" />

      <p style={{ textAlign: "center", fontSize: 25 }}>
        {metadataObject.overview}
      </p>

      <hr />

      <div className="info">
        <div className="tags">
          {post.data.tags.map((p) => {
            return <div className="tag">{p}</div>;
          })}
        </div>

        <div className="date">{post.data.date}</div>
      </div>

      <ReactMarkdown className="content">{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default Blog;
