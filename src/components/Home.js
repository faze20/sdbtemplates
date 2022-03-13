import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Footer from './Footer'


function Home() {
    return (
        <Container>
            <Section
                title="Custom Software"
                description="One Stop Shop for your Scalable Software Solutions"
                route='softwares'
                backgroundImg="apps.png"
                leftBtnText="Custom Engineering"
                rightBtnText="Continous Integration"
                color = 'red'
            
            />
            <Section
                title="Web Applications"
                description="Order your Secure,Responsive and accessible Customised Websites"
                route= 'websites'
                backgroundImg="website.png"
                leftBtnText="Website Optimisation"
                rightBtnText="Backend"            
            />
            <Section 
                title="Mobile Applications "
                description="Proficient and high converting Mobile/Web Application"
                route='applications'
                backgroundImg="background.png"
                leftBtnText="Native apps"
                rightBtnText="Cross Platform"                          
            />

            <Section 
                title="Cloud Technology"
                description="Get your secured and undisrupted architecture migration"
                route='data'
                backgroundImg="cloud3.png"
                leftBtnText="Integration"
                rightBtnText="Migration"
                color = 'red'
            />
            <Section
                title="Data Warehouse"
                description="Best solution for Real time Analysis"
                route='data'
                backgroundImg="data.png"
                leftBtnText="Data Sorting"
                rightBtnText="Data Analytics"
                color = 'red'            
            />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
`
