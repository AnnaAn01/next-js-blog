// import { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

// this is our Home component, Home route

// const posts = [
//   { title: "React Testing", excerpt: "Learn React Testing" },
//   { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
// ];

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Next Js Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* we'll loop through all our posts inside here */}
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};



// a next js way to fetch data inside of our components
// for this we don't have to write inside of our components

export async function getStaticProps() {
  const posts = await (getPosts() || []);

  return {
    props: { posts },
  };
}
