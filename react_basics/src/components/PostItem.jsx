function PostItem({data, key, handleDelete})
{

    return <>
    
        <div key={key} className="flex flex-col gap-5 justify-between">
            <section className="flex justify-between">
                <div>
                    <h1 className="text-indigo-700">{data.title}</h1>
                    <small className="">Posted on 15/04/2024</small>
                </div>
                <button
                    onClick={() => handleDelete(data.id)} 
                    className="transition text-white rounded-full bg-red-600 w-6 h-6 align-text-top opacity-80 hover:opacity-100">x</button>
            </section>
            <p> {data.content} </p>

        </div>

    </>

}

export default PostItem;