// import BlogCard from "../BlogCard";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <div>
      <Meta title={"Blogs"} />
      <BreadCrumb title={"Blogs"} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* Sidebar */}
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>

            {/* Blog Cards */}
            <div className="col-9">
              <div className="row">
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
