import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";


export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        body,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section className="my-12">
        <div>
        <h2  className=" flex justify-center">Blog Posts</h2>
      <h3  className=" flex justify-center">Welcome to my blog posts page!</h3>
        </div>
      
      <div className="grid grid-row-1 lg:grid-cols-3 gap-8 mx-8 lg:mx-16 mt-8">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div className="border border-gray p-4 rounded-md shadow-lg shadow-gray  ">
                 <Link to={"/posts/" + post.slug.current} key={post.slug.current} >
              <span className="" key={index}>
                <img src={post.mainImage.asset.url} alt="" className="max-w-full h-auto  rounded-md "/>
                <span>
                  <h1>{post.title}</h1>
                </span>
                <div className=" flex flex-row  justify-between items-center mx-auto text-gray-400">
                <div className="flex flex-row  items-center">
                <img src={post.mainImage.asset.url} alt="" className="w-8 h-8 mr-2 rounded-full"/>
                <span>moez</span>
                </div>
                
                <div >
                    <p>{post.publishedAt}</p>
                </div>
                </div>
                
                
              </span>

            </Link>
            
            </div>
           
          ))}
      </div>
    </section>
  );
}