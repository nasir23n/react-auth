import React from 'react'
import { Link } from 'react-router-dom';
import Layout from "../layout/master";
import category from "../asset/image/category.png";

export default function Home() {
  return (
    <Layout>
      <section className="content_wrap">
        <div className="container">
          <div className="section_had">
            <h2 className="had">Featured Category</h2>
            <p className="disc">Get Your Desired Product from Featured Category!</p>
          </div>
          <div className="catagory_grid">
            {[1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
              <Link to="/" className="catagory" key={Math.random()}>
                <span className="catagory_icon">
                  <img src={category} height="50" alt="" />
                </span>
                <p>Category name</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
