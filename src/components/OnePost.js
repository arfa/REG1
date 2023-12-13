import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";
import Footer from './Footer.js';
import Header from './Header.js';

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

  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className=" text-[#152e1c]">{children}</h1>,
      h2: ({children}) => <h2 className=" text-[#4fa166]">{children}</h2>,
      p: ({children}) => <p className=" text-[#4fa166]">{children}</p>,
      blockquote: ({children}) => <blockquote className="border-l-gray-500">{children}</blockquote>,
  
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
  }
  const Gallery =()=>{
    switch (postData.blogImages.length) {
      case 0:
        return null
      case 1:
        return(
        <>
            <div>
            <img className="max-w-full h-auto  shadow-lg shadow-gray-400 rounded-sm m-auto" src={urlFor(postData.blogImages[0]).url()} alt="" />
            </div>
        </>) 
      case 2:
        return(
        <>
            <div className="flex h-[50vh]  flex-wrap">
            <img className="w-1/2 h-full p-1 md:p-2 rounded-sm" src={urlFor(postData.blogImages[0]).url()} alt="" />
            <img className="w-1/2 h-full p-1 md:p-2 rounded-sm" src={urlFor(postData.blogImages[1]).url()} alt="" />
            </div>
        </>) 
      case 3:
        return (
        <>
            <div className="flex md:h-screen h-[50vh]  flex-wrap">
            <img className="w-full h-1/2 p-1 md:p-2   rounded-sm " src={urlFor(postData.blogImages[0]).url()} alt="" />
            <img className="w-1/2 h-1/2 p-1 md:p-2   rounded-sm " src={urlFor(postData.blogImages[1]).url()} alt="" />
            <img className="w-1/2 h-1/2 p-1 md:p-2   rounded-sm " src={urlFor(postData.blogImages[2]).url()} alt="" />
            </div>
        </>)      
      default:
            return null
    }
  }


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
    <Helmet>
		<title>{postData.title}</title>
    <meta name='description' content={postData.title} />
		</Helmet>
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
     
      {/* <div className="grid grid-row-1 grid-reverse md:grid-cols-2 gap-4 justify-items-center h-1/2 p-8 "> */}
      <div className="flex flex-col-reverse items-center h-1/2 p-8 ">
      <div className="    lg:text-xsm  text-lg  ">
        <div className='prose lg:prose-xl prose-greenlight'><PortableText
  value={postData.body}
  components={components}

/></div>
        {/* <BlockContent
        serializers={serializers}
          blocks={postData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        /> */}
        
      </div>
      {/* {postData.blogImages.map((blogImage,index)=>(<div className={index === 0 ? '  ' : ''} key={index}>
        
        <img className="max-w-full h-auto  shadow-lg shadow-gray-400 rounded-sm m-auto" src={urlFor(blogImage).url()} alt="" />
       
        
      </div>))} */}
      <Gallery/>
      
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