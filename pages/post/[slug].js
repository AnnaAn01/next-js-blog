// file based routing in next.js
// in next js you just put your files as you want them to be structured later on in the actual url. (1:37:17min)
// the [] in the file name means that it's dynamic, so
import React from "react";
import { getPost, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
// params is the slug here
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}
