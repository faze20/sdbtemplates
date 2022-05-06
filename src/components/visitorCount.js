import React , { useState , useEffect } from 'react'
import axios from 'axios'


function VisitorCount(page) {
    const [visitorCount, setShowVisitorCount] = useState('')

    useEffect( async () => {
        //passing getData method to the lifecycle method
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        const response = await fetch('http://localhost:8000/visits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: res.data.state,count:1, ip_addr:res.data.IPv4, page:page})
        })
        const result = await response.json()
        setShowVisitorCount(result.count)
        console.log(result)
        //eavh time a page is visited increment that  page count
    }, [])

  return (
    <div className='container'>
      <div className="content">
        {visitorCount}
      </div>

    </div>
  )
}

export default VisitorCount