import React , {  useEffect} from 'react'
import Section from './Section'


function Home() {
    
    useEffect(() => {
        document.head.innerHTML+=`
        <meta name='Software Engineering' content='scalable programming softwares'/>
        <meta
        name="description"
        content="Mclien Communications Nig ltd. | Computer Software & Services 
        | Technology Consultant | Research & Development | Software Engineering 
        | Engineering | Web Site Design |.  
        "
      />
        `
        document.title = "Software Developers - Dedicated Software Development";

      
      }, []);

    return (
        <div>
            <Section
                title="Custom Software"
                description="One Stop Shop for your Scalable Software Solutions"
                route='software'
                backgroundImg="apps.png"
                leftBtnText="Software Engineering"
                rightBtnText="Continous Integration"
                color = 'white'
            
            />
            <Section
                title="Web Applications"
                description="Order your Secure,Responsive and accessible Customised Websites"
                route= 'websites'
                backgroundImg="sdbnew3.png"
                leftBtnText="Website Optimisation"
                rightBtnText="Backend"            
            />
            <Section 
                title="Mobile Applications "
                description="Proficient and high converting Mobile/Web Application"
                route='applications'
                backgroundImg="sdbnew1.png"
                leftBtnText="Native apps"
                rightBtnText="Cross Platform"                          
            />

            <Section 
                title="Cloud Technology"
                description="Get your secured and undisrupted architecture migration"
                route='data'
                backgroundImg="sdbnew2.png"
                leftBtnText="Integration"
                rightBtnText="Migration"
                color = 'white'
            />
            <Section
                title="Data Warehouse"
                description="Best solution for Real time Analysis"
                route='data'
                backgroundImg="data.png"
                leftBtnText="Data Sorting"
                rightBtnText="Data Analytics"
                color = 'white'            
            />
            <Section
                title="Utilities"
                description="Free Tools for Software Optimisation"
                route='utilities'
                backgroundImg="sdbnew.png"
                leftBtnText="Software Performance"
                rightBtnText="Keyword Analysis"
                color = 'white'            
            />
        </div>
    )
}

export default Home

