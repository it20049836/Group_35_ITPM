import { useAdminContext } from "../hooks/useAdminContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AdminDetails = ({ admin }) => {
    const { dispatch } = useAdminContext()

    const handleClick = async () => {
        const response = await fetch('/admin/approves/' + admin._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ORGANIZATION',payload: json})
        }
    }

    return (
        <div className="admin-details">
            <h4>{admin.title}</h4>
            <p><strong>Organization Name  :  </strong>{admin.organizationName}</p>
            <p><strong>Register No  :  </strong>{admin.regNo}</p>
            <p><strong>Organization Address  :  </strong>{admin.address}</p>
            <p><strong>Telephone No  :  </strong>{admin.telephoneNo}</p>
            <p><strong>Email  :  </strong>{admin.email}</p>
            {/* <p><strong>Password  :  </strong>{admin.password}</p>
            <p><strong>Confirm Password  :  </strong>{admin.confirmPw}</p> */}
            <p>{formatDistanceToNow(new Date(admin.createdAt), { addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default AdminDetails