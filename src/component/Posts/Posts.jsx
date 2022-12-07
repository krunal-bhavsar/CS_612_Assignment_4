import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import * as blogPosts from "../../mockupData/dbBlogData.json";

const Posts = () => {

return (
	
	<div>
		<div className="Intro">
              <h1>ABOUT ME</h1>
                <h3>I am in the first semester, pursuing my masters from pace university in computer science. When I was in India I worked as a Site Reliability Engineer for almost 2 years and was responsible for launching, configuring, and supporting large scale instances in AWS with internal teams and customers to follow the service-level agreements using technology such as Linux, AWS, Terraform and Puppet. I love playing chess, learning how to cook and watching thriller movies and web series.</h3>
        </div>
		<div className="posts-container">
			{blogPosts.default.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
		
	</div>
);
};

export default Posts;
