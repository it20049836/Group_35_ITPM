import { useEffect, useState } from "react"

const Home = () => {
    const [admin, setAdmin] = useState(null)

    useEffect(() => {

        const fetchAdmin = async () => {
            const response = await fetach('/admin/approves')
            const json = await response.json()

            if (response.ok) {
                setAdmin(json)
            }
        }

        fetchAdmin()
    }, []) 

    return (
        <div className="home">
            <div className="admin">
                {admin && admin.map((admin) => (
                    <p key={admin._id}>{admin.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home