import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import Radium from 'radium';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.postDetail}>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {

  postDetail: {
    border : '1px solid #e0e0e0',
    padding: 5,
    paddingTop: 10,
    borderRadius: 5,

 '@media (max-width: 720px)': {
  color: 'red',
 },
  },

  heading: {
    textAlign: 'center',
    margin: 0,
    marginBottom: 20,

  ':hover': {
    color: 'red',
  },
},

};
