import React from "react"
import styled from "styled-components"

const Wrapper = styled.div `
background-color: lightblue;
`
const List = styled.ul `
display: flex;
justify-content: space-between;
`

export const Navbar: React.FC = () => (
    <nav>
        <Wrapper>
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="">
                <li>React</li>
                <li>Components</li>
                <li>TS</li>
            </ul>
        </Wrapper>
    </nav>
)