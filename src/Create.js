import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    function store(e){
        e.preventDefault();
        setIsPending(true);
        const blog = { title, desc, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:  { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then((res) => {
            setIsPending(false);
            return navigate('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={store}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button type="submit">Add blog</button>}
                { isPending && <button type="submit">Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;