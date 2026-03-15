import { Link } from "react-router-dom";

const blogData = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Understanding useState" },
  { id: 3, title: "React Router Guide" },
];

function Blogs() {
  return (
    <div>
      <h2>Blogs List</h2>

      <ul>
        {blogData.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;