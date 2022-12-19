import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const Show = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    function deleteBolg(id) {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            return navigate('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                    <div>{ blog.desc }</div>
                    <button onClick={() => deleteBolg(blog.id)}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default Show;