import { getUser } from '@/lib/data';
import styles from './postUser.module.css';
import Image from 'next/image';
// FETCH DATA WITH AN API
// const getUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Something went wrong!');
//   }

//   return res.json();
// };

export default async function PostUser({ userId }) {
  // FETCH DATA WITH AN API
  // const user = await getUser(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'}
        alt=""
        width={50}
        height={50}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
}
