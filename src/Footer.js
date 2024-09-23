import React from "react"
function Footer({len}) {
  // const d = new Date()
  return (
  <footer>

    <div>
      <p>{len}list  {len===1?"item":'Items'}</p>
      {/* <p>Copyrights &copy; {d.getFullYear()} </p> */}
    </div>
    </footer>
  )
}

export default Footer


