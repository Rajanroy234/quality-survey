import React from 'react'

 function Detail(props) {
  return (
    <div>
        <div className='container-fluid  '>
        <div className='col-md-5 m-auto'>
        <div className='mt-3'>
        <div className='class text-left'>
        <div className='card-body'>
        <form action="" onSubmit={props.submit}>
        <div className='form-group'>
            
            <label htmlFor="">
                {/* {" "} */}
                <b>1.</b> Name
            </label>
            
            <input type="text" name='name'  placeholder='Please enter your name' autoComplete='off' 
            className='form-control ' required /></div>

            <div className='form-group'>
            <label htmlFor="">
                {/* {" "} */}
                <b>2.</b> Email
            </label>
            
            <input type="email" name='email' placeholder='Please enter your email' autoComplete='off'
               className='form-control ' required /> </div>
               <button type='submit' className='btn btn-primary'>Next</button>
        </form>

        <center>
            <span className='badge badge-pill badge-primary'>1</span> {" "}
            <span className='badge badge-pill disabled'>2</span>
        </center>
        </div>
        </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Detail;