import React, {useState} from 'react'

function MembershipForm() {
    const [membershipData, setMembershipData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        date: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        postCode: ''
    })
    const sendMembershipInformation = (e) => {
        e.preventDefault();
        fetch('https://aqueous-hamlet-41338.herokuapp.com/membershipInformation', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(membershipData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Information Placed');
            alert('Hi, ' + data.firstName + ' Successfully send Your Information.')
        })
    }
    return (
        <div className='container'>
            <form onSubmit={sendMembershipInformation}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="firstName" 
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, firstName: e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            name = "lastName" 
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, lastName: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail4" 
                            name="email"
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, email: e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="mobileNumber" 
                            name="mobileNumber"
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, mobileNumber: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="birthday">Date of Birth</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="birthday"
                            name="date"
                            onChange={e => setMembershipData({...membershipData, date: e.target.value})}
                        />
                    </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputState">Gender</label>
                        <select 
                            id="inputState" 
                            name="gender" 
                            defaultValue={'DEFAULT'}
                            className="form-control"
                            onChange={e => setMembershipData({...membershipData, gender: e.target.value})}
                        >
                            <option value="DEFAULT" >Choose</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Address Line 1:</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            name="address"
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, address: e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="countryName">Country/Region:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="countryName" 
                            name="country"
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, country: e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            placeholder=""
                            name="city"
                            onChange={e => setMembershipData({...membershipData, city: e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="postCode">Postcode</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="postCode" 
                            name="postCode"
                            placeholder=""
                            onChange={e => setMembershipData({...membershipData, postCode: e.target.value})}
                        />
                    </div>
                </div>
                
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-warning"> <a style={{textDecoration: 'none'}} href="/payment">Next</a></button>
                </div>
            </form>
        </div>
    )
}

export default MembershipForm
