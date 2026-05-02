import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/PostSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <main className="app">
      {isLoading && <p className="status-message">Loading...</p>}

      {error && !isLoading && (
        <p className="status-message error">Xatolik: {error}</p>
      )}

      {!isLoading && !error && (
        <section className="posts-section">
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <span className="post-id">#{post.id}</span>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
