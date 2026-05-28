import "./Blogs.css";
import blogs from "../../data/blogs";

const Blogs = () => {
  return (
    <section id="blogs" className="blogs">
      <div className="section-inner">
        <h2 className="section-title">Writing</h2>
        <p className="blogs-note">
          Selected blog posts, mostly co-authored with the Meta Superintelligence Lab / PyTorch team.
        </p>
        <div className="blog-list">
          {blogs.map((post, i) => {
            const inner = (
              <>
                <div className="blog-meta">
                  <span className="blog-venue">{post.venue}</span>
                  <span className="blog-dot">&middot;</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">
                  {post.title}
                  {post.url && <span className="blog-arrow" aria-hidden="true"> &rarr;</span>}
                </h3>
                {post.coauthors && (
                  <p className="blog-coauthors">{post.coauthors}</p>
                )}
                <p className="blog-desc">{post.description}</p>
              </>
            );
            return post.url ? (
              <a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card blog-card-link"
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="blog-card">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
