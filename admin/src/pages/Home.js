import { useEffect } from 'react'
import { useAdminContext } from "../hooks/useAdminContext"

//components
import AdminDetails from '../components/AdminDetails'
import AdminForm from '../components/AdminForm'

const Home = () => {
    const {admin, dispatch} = useAdminContext()

    useEffect(() => {
        const fetchAdmin = async () => {
            const response = await fetch('/admin/approves')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_ORGANIZATIONS', payload: json})
            }
        }

        fetchAdmin()
    }, [dispatch]) 

    return (
        <div className="home">
            <div className="admin">
                {admin && admin.map((admin) => (
                    <AdminDetails key={admin._id} admin={admin}/>
                ))}
            </div>
            <AdminForm />
        </div>
    )
}

export default Home