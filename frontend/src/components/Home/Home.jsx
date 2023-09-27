import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className="home">
      <div className="intro">
        <h1>Hi, I'm Raghav</h1>
      </div>

      <p style={{ color: "white" }}>
        I am a high school junior living in Texas 🤠 who's interested in
        computer science and linguistics.
        <br></br>I enjoy learning about linguistics, playing tennis, learning
        about geography and history, speedcubing, and most importantly coding.
      </p>

      <nav className="navbar">
        <a
          href="https://github.com/festiveelephantseal"
          aria-label="Homepage"
          class="footer-octicon"
          title="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        <a href="https://www.worldcubeassociation.org/persons/2019KENC02">
          <img
            alt="wca"
            src="https://www.worldcubeassociation.org/files/WCAlogo_notext.svg"
            style={{ width: 24, height: 24 }}
          />
        </a>
      </nav>

      <div>
        {posts.map((p) => {
          return (
            <Link to={"/" + p.data.id} style={{ textDecoration: "none" }}>
              <div className="post-card">
                <h1>{p.data.title}</h1>
                <p>{p.data.overview}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
