import React from 'react'
import "./Login.css"
import { Navigate, useNavigate } from 'react-router-dom'




function Login() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Redirect logic here
        navigate('/Rcreated'); // Use the navigate function from useNavigate
    };



    return (
        <>
            <div className="resourcem">

                <form className='resource_form'>
                    <h1>Resource Management</h1>
                    <div className="emp">
                        <label className='uemp'>Employee Name<sup>*</sup> </label><br />
                        <input type='text' name='employee' placeholder=' ' ></input>
                    </div>

                    <div className='first'>

                        <div className="empEmail">
                            <label className='uempEmail'>Email <sup>*</sup> </label><br />
                            <input type='text' name='email' placeholder=' ' ></input>
                        </div>
                        <div className="empId">
                            <label className='uempId'>Website<sup>*</sup> </label><br />
                            <input type='id' name='id' placeholder=' ' ></input>
                        </div>
                    </div>

                    <div className='second'>
                        <div className="empPosition">
                            <label className='uempPosition'>Employee Position<sup>*</sup> </label><br />
                            <input type='text' name='position' placeholder=' ' ></input>
                        </div>
                        <div className="empJoin">
                            <label className='uempJoin'>Joining Date<sup>*</sup> </label><br />
                            <input type='text' name='Date' placeholder=' ' ></input>
                        </div>
                    </div>

                    <div className="empSkill">
                        <label className='uempSkill'>Skills<sup>*</sup> </label><br />
                        <input type='text' name='skills' placeholder=' ' ></input>
                    </div>

                    <div className='third'>

                        <div className="empSalary">
                            <label className='uempSalary'>Salary<sup>*</sup> </label><br />
                            <input type='number' name='salary' placeholder=' ' ></input>
                        </div>
                        <div className="empRating">
                            <label className='uempRating'>Rating<sup>*</sup> </label><br />
                            <input type="text" name='rating' placeholder=' ' ></input>
                        </div>
                        <div className="empDevice">
                            <label className='uempDevice'>Assigned Device ID </label><br />
                            <input type='text' name='device ID' placeholder=' ' ></input>
                        </div>

                    </div>

                    <div className="remsrks">
                        <label type='text' className='uremarks'>Remarks</label><br />
                        <textarea id='rem' name='remarks'></textarea>

                        
                    </div>

                    <div className="btn">
                    <button onClick={handleRedirect} type='submit' className='submitBtn'>Create Resource *</button>
                    </div>
                    
                </form>



            </div>

        </>
    )
}

export default Login