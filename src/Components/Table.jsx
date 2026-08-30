export function Table(prop)
{
    console.log("Header--->"+prop.data);
    return(
        <>
        
        <table border={1}>
            <thead>
                <tr>              
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>  
                </tr>
            </thead>
            <tbody>
                {
                    prop.data.map((item)=>  
                    {
                        return(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                               
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
</>
    )
}