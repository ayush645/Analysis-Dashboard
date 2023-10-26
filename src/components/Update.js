import React from 'react'
import "../CSS/Update.css"
import { useStateContext } from '../contextsApi/ContextProvider';

const Update = () => {
  const { setOpen } = useStateContext();
  return (
    <div className='update'>
      <div className="updateLeft">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="" />
        <div className="updateLeftContent">
          <h3>Hypertext Markup Language</h3>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
      </div>
      <div className="updateRight">
        <button onClick={() => setOpen(true)}>Update</button>
      </div>



    </div>

  )
}

export default Update


