
import Link from "next/link";
import { List, Title } from "./custom-tw-components";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
          <Link key={`${post.lang}-${post.slug}-$`} href={`/blog/${post.lang}/${post.slug}`} passHref>
            <List>
                <Title>
                {post.title}
                </Title>
            </List>
          </Link>
      ))}
    </>
  );
};

export default PostList;
