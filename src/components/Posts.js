import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Header from './Header';
import Footer from './Footer';

const Posts = () => {
    const [allPostsData, setAllPosts] = useState(null);
  const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

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
        
      },
      "name": author->name,
        "authorImage": author->image
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
    <Helmet>
		<title>Actualités</title>
    <meta name='description' content="Actualités" />
		</Helmet>
<Header text={'Actualités'} />


   <div className="grid grid-row-1     lg:grid-cols-3 gap-8 px-16 lg:px-20 mt-8">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div className="border relative border-gray-300/25 transition duration-300 ease-in-out hover:scale-105 shadow-lg  rounded-md hover:shadow-lg shadow-gray-300 ">
                 <Link to={"/posts/" + post.slug.current} key={post.slug.current} >
              <div className="  space-y-4 " key={index}>
                <div className=""><img src={post.mainImage.asset.url} alt="" className="w-full h-96   rounded-t-md "/></div>
                <div className="p-2 h-32     ">
                  <p className="md:text-xl h-12 text-lg max-w-full  font-semibold line-clamp-2">{post.title}</p>
                </div>
                <div className="absolute bottom-0 -z-10 w-full p-1 flex justify-between items-center   text-gray-400">
                <div className=" flex items-center    ">
                  <div><img src={urlFor(post.authorImage).url()}alt="" className="w-12 h-12 mr-2 rounded-full"/></div>
                  <div><p>{post.name}</p></div>

                
                </div>
                <div className="" >
                    <p>{post.publishedAt}</p>
                </div>
                </div>
                
                
              </div>

            </Link>
            
            </div>
           
          ))}
      </div> 


<Footer/>
    </>
  )
}

export default Posts
