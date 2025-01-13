import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'Browse all our "x" posts.',
//   description: 'Browse all our posts',
// };

export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: 'Browse all our posts',
  };
}

// export async function generateMetadata({params}) {
//   const {id_movie} = await params;

//   const movie = await getDetailMovie(id_movie);
//   if (!movie) {
//     return {
//       title: `Not Found`,
//       description: `Error 404`,
//     };
//   }

//   return {
//     title: `Details for '${movie.title}'`,
//     description: `${movie.overview}`,
//   };
// }

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
