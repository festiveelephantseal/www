import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors());

app.listen(4000, () => console.log("http://localhost:4000"));

app.get("/posts", (req, res) => {
  let posts = [];
  fs.readdirSync("./posts").forEach((file) => {
    const filecontent = fs.readFileSync(path.join("./posts/", file), {
      encoding: "utf-8",
    });

    const re = /^---\n(.*?)\n---/s;
    const match = re.exec(filecontent);
    const data = {};

    if (match && match[1]) {
      const lines = match[1].split("\n");

      lines.forEach((line) => {
        const [k, v] = line.split(": ");
        if (k && v) {
          data[k] = v;
        }
      });
    }

    const tags = data.tags.split(",");
    data.tags = tags;
    posts.push({ data, content: filecontent });
  });
  res.send(posts);
});

app.get("/post/:id", (req, res) => {
  const filecontent = fs.readFileSync(
    path.join("./posts/", `${req.params.id}.md`),
    {
      encoding: "utf-8",
    }
  );

  const re = /^---\n(.*?)\n---/s;
  const match = re.exec(filecontent);
  const data = {};

  if (match && match[1]) {
    const lines = match[1].split("\n");

    lines.forEach((line) => {
      const [k, v] = line.split(": ");
      if (k && v) {
        data[k] = v;
      }
    });
  }

  const tags = data.tags.split(",");
  data.tags = tags;

  res.send({ data, content: filecontent });
});
