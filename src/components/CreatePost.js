
import { firestore } from "../firebase";
import { useFormInput } from "../hooks";
import styled , {css} from 'styled-components';

const StyledButton = styled.button`  
height: 33px;
background: ${(props) =>props.primary ? '#4caf50' : 'blue'};
border: 0;
color: #fff;
padding: 5px;
font-size: 15px;
border-radius: 3px;
cursor: pointer;
${(props)=> props.primary && css`
border: 3px solid ${props.bgColor};
`};
`;
 function CreatePost() {

  const title = useFormInput([]);
  const subtitle = useFormInput([]);
  const content = useFormInput([]);
  
  function handleSubmit (e) {

    e.preventDefault();

    console.log('title',title);
    console.log('subtitle',subtitle);
    console.log('content',content);
     
    firestore.collection('posts').add({
      title: title.value,
      subtitle:subtitle.value,
      content:content.value,
      createdAt : new Date(),
    });

  }
  
    return (
      <div className="create-post">
      <h1>CreatePost</h1>


      <form onSubmit={handleSubmit}>

      <div className="form-field">
      <label>Title</label>
      <input {...title} />

    </div>
    <div className="form-field">
      <label>Sub Title</label>
      <input {...subtitle} />

    </div>
    <div className="form-field">
      <label>Content</label>
      <textarea {...content}></textarea>

    </div>

    <StyledButton primary bgColor="black">Create Post</StyledButton>

   </form>
</div>
    );
  }

  export default CreatePost;