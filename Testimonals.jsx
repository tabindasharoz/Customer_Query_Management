import React from 'react'
import {Link} from 'react-router-dom'

import test from '../components/img/test.jpg'
import test4 from '../components/img/test4.jpg'
import test2 from '../components/img/test2.jpg'
import test5 from '../components/img/test5.jpg'

const Testimonals = () => {
  return (
    
    
<div className='row mx-auto'>
       
<div className='row bg-dark p-4 text-light'>





<div class="col-sm-4" >
<div class="card-body ">
<div className='col-md-5 mx-auto'>
        <img src={test} className=' rounded-circle'/>

    </div><br/>
<div className='col-md-5 mx-auto'>
        <img src={test2} className='rounded-circle'/>

    </div>
<br/>
</div>
</div>






<div class="col-sm-4" >
<div class="card-body">
<br/><br/><br/>
<Link href="#" class="card-link text-light text-decoration-none">Press Coverage</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">FAQs</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">Blogs</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">News Letter</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">News & Events</Link><br/>
</div>
</div>
<div class="col-sm-4" >
<div class="card-body">
<br/><br/><br/>
<Link href="#" class="card-link text-light text-decoration-none">Corporate Affairs</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">Product Warranty and Disclaimer</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">EU Declaration Form</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">IMS Policy</Link><br/>
<Link href="#" class="card-link text-light text-decoration-none">Quality Policy</Link><br/>
</div>




</div>



   
</div>
</div>

  )
}

export default Testimonals