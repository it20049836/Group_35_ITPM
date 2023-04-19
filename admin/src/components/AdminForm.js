import { useState } from "react"
import { useAdminContext } from "../hooks/useAdminContext"

const AdminForm = () => {
    const { dispatch } = useAdminContext()

    const [title, setTitle] = useState('')
    const [organizationName, setorganizationName] = useState('')
    const [regNo, setregNo] = useState('')
    const [address, setaddress] = useState('')
    const [telephoneNo, settelephoneNo] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPw, setconfirmPw] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const admin = {organizationName,regNo,address,telephoneNo,email,password,confirmPw}

        const response = await fetch('/admin/approves', {
            method: 'POST',
            body: JSON.stringify(admin),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setorganizationName('')
            setregNo('')
            setaddress('')
            settelephoneNo('')
            setemail('')
            setpassword('')
            setconfirmPw('')
            setError(null)
            setEmptyFields([])
            console.log('new organization added', json)
            dispatch({type: 'ORGANIZATION_CREATED', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Organization</h3>

            <label>Organization Name</label>
            <input
                type="text"
                onChange={(e) => setorganizationName(e.target.value)}
                value={organizationName}
                className={emptyFields.includes('organizationName') ? 'error' : ''}
            />
            
            <label>Registertion No</label>
            <input
                type="text"
                onChange={(e) => setregNo(e.target.value)}
                value={regNo}
                className={emptyFields.includes('regNo') ? 'error' : ''}
            />
            
            <label>Organization Address</label>
            <input
                type="text"
                onChange={(e) => setaddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
            />
            
            <label>Telephone No</label>
            <input
                type="number"
                onChange={(e) => settelephoneNo(e.target.value)}
                value={telephoneNo}
                className={emptyFields.includes('telephoneNo') ? 'error' : ''}
            />

            <label>Email</label>
            <input
                type="text"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className={emptyFields.includes('email') ? 'error' : ''}
            />
            
            <label>Password</label>
            <input
                type="text"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className={emptyFields.includes('password') ? 'error' : ''}
            />
            
            <label>Confirm Password</label>
            <input
                type="text"
                onChange={(e) => setconfirmPw(e.target.value)}
                value={confirmPw}
                className={emptyFields.includes('confirmPw') ? 'error' : ''}
            />

            <button>ADD</button>
            {error && <div className="error">{error}</div>}
            
        </form>
    )
}

export default AdminForm