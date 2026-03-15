import { useParams } from "react-router-dom";

const blogData = [
  { id: 1, title: "React Basics", content: "This is React basics content..." },
  { id: 2, title: "Understanding useState", content: "useState is a React hook..." },
  { id: 3, title: "React Router Guide", content: "React Router helps navigation..." },
];

function BlogDetails() {
  const { id } = useParams();

  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return <h3>Blog Not Found</h3>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;