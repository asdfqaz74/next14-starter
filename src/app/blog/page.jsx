import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

// FETCH DATA WITH AN API
const getData = async () => {
  const response = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return response.json();
};

export default async function BlogPage() {
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
