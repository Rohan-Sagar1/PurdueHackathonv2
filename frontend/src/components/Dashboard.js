import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Dashboard() {
    const [filter, setFilter] = React.useState('all')

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    // create fake data in an indexed way so we can use map
    const data = [
        {
            jobTitle: 'Software Engineer',
            companyName: 'Google',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            location: 'Mountain View, CA',
            spaceRemaining: 5,
            maxApplicants: 10
        },
        {
            jobTitle: 'Software Developer',
            companyName: 'Facebook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            location: 'Menlo Park, CA',
            spaceRemaining: 5,
            maxApplicants: 10
        },
        {
            jobTitle: 'Software Architect',
            companyName: 'Amazon',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            location: 'Seattle, WA',
            spaceRemaining: 5,
            maxApplicants: 10
        },
        {
            jobTitle: 'Blockchain Engineer',
            companyName: 'Microsoft',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            location: 'Redmond, WA',
            spaceRemaining: 5,
            maxApplicants: 10
        },
        {
            jobTitle: 'AI Engineer',
            companyName: 'Apple',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            location: 'Cupertino, CA',
            spaceRemaining: 5,
            maxApplicants: 10
        },
    ]

    return (
        <>
        <NavMenu>
            <LeftMenu>
                <span>45 results found</span>
            </LeftMenu>
            <RightMenu>
                <select value={filter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>

            <button>Cards</button>
            <button>Table</button>
            </RightMenu>
        </NavMenu>
        <Cards>
            {data.map((item, index) => (
                <Card
                    key={index}
                    jobTitle={item.jobTitle}
                    companyName={item.companyName}
                    description={item.description}
                    location={item.location}
                    spaceRemaining={item.spaceRemaining}
                    maxApplicants={item.maxApplicants}
                />
            ))}
        


            
        </Cards>
    </>
    )
}

export default Dashboard

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    width: 100%;
`;

const LeftMenu = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
`;

// right menu is on the right side of the page
const RightMenu = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: flex-end;
    gap: 20px;
    select {
        padding: 10px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
    }
    button {
        padding: 10px;
        border-radius: 0px;
        border: #333 1px solid;
        outline: #333 1px solid;
        background-color: white;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 30px;
    width: 100%;

    @media (min-width: 1200px) { /* desktop */
        .container {
            flex: 0 0 25%; /* 4 cards per row */
        }
    }

    @media (min-width: 768px) and (max-width: 991px) { /* tablet */
        .container {
            flex: 0 0 33.33%; /* 3 cards per row */
        }
    }

    @media (min-width: 576px) and (max-width: 767px) { /* mobile landscape */
        .container {
            flex: 0 0 50%; /* 2 cards per row */
        }
    }

    @media (max-width: 575px) { /* mobile portrait */
        .container {
            flex: 0 0 100%; /* 1 card per row */
        }
    }
`;
