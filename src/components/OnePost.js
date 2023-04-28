import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Footer from './Footer';
import Header from './Header';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          blogImages[]{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div
  class="inline-block flex items-center  m-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
    >
</div>;

  return (
    <>
    <Header text={'Actualités'}/>
    <div className="container mx-auto">
      <div>
        <h2 className="flex text-xtl md:text-xxl font-bold text-center justify-center">"{postData.title}"</h2>
        {/* <div>
          
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Kap"
          />
          <h4>{postData.name}</h4>
        </div> */}
      </div>
     
      <div className="grid grid-row-1 grid-reverse md:grid-cols-2 gap-4 justify-items-center h-1/2 p-8 ">
      <div className=" font-semibold   lg:text-xsm  text-lg text-gray-600 opacity-75 ">
        <BlockContent
        className=""
          blocks={postData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div>
      {postData.blogImages.map((blogImage,index)=>(<div className={index === 0 ? '  ' : ''} key={index}>
        
        <img className="max-w-full h-auto  shadow-lg shadow-gray-400 rounded-sm m-auto" src={urlFor(blogImage).url()} alt="" />
       
        
      </div>))}
      {/* <div className="hidden md:block">
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div> */}
      </div>
      
      {/* <img src={urlFor(postData.mainImage).width(200).url()} alt="" /> */}
      
    </div>
    <Footer/>
    </>
  );
}