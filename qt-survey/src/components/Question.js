import React from 'react'

 function Question(props) {
  return (
    <div>
        <div>
        <div className='container-fluid  '>
        <div className='col-md-5 m-auto'>
        <div className='mt-3'>
        <div className='class text-left'>
        <div className='card-body'>
            <form action="" onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor="">
                    <b>3.</b>What are you currently doing ?
                </label> <br />
                <input type="radio" id='teachers' name='q1' value="Teacher" autoComplete='off' />
                <label htmlFor="teachers" className='p-2'>Teacher</label>

                <input type="radio" id='students' name='q1' value="Student" autoComplete='off' />
                <label htmlFor="students" className='p-2'>Student</label>

                <input type="radio" id='programmers' name='q1' value="Programmer" autoComplete='off' />
                <label htmlFor="programmers" className='p-2'>Programmer</label>

                <input type="radio" id='others' name='q1' value="Other" autoComplete='off' />
                <label htmlFor="others" className='p-2'>Other</label> <br />

                <input type="text" className='form-control' placeholder='Type here if not listed.'
                 autoComplete='off' name='other' />

                </div>

                <div className='form-group'> 
                    <label htmlFor="">
                        {/* {" "} */}
                        <b>4.</b>Please rate our course.
                    </label> <br />

                <input type="radio" id='poors' name='q2' value='Poor' autoComplete='off' />
                <label htmlFor="poors" className='p-2'>Poor</label>

                <input type="radio" id='goods' name='q2' value='Good' autoComplete='off' />
                <label htmlFor="goods" className='p-2'>Good</label>

                <input type="radio" id='excellents' name='q2' value='Excellent' autoComplete='off' />
                <label htmlFor="excellents" className='p-2'>Excellent</label>

                </div>

                <div className='form-group'>
                    <label htmlFor="">
                        {/* {" "} */}
                        <b>5.</b>Write your review here.
                    </label> <br />
                    <textarea className='form-control ' name='q3'></textarea>
                </div >

                <button type='submit' className='btn btn-primary'>Save</button>

            </form>

            <center>
            <span className='badge badge-pill disabled'>1</span>
            <span className='badge badge-pill badge-primary'>2</span>
            </center>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}
export default Question;
