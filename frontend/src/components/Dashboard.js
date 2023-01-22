import React, { useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import Card from './Card'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

function Dashboard() {
    let subtitle;
    const [filter, setFilter] = useState('all');
    const [keywords, setKeywords] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const handleKeywordSearch = (e) => {
        setKeywords(e.target.value);
    }

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    const filteredData = data.filter(item => item.title.includes(keywords));

    const dummy = [
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
        {
            jobTitle: 'Blockchain Engineer',
            companyName: 'Microsoft',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            location: 'Redmond, WA',
            spaceRemaining: 5,
            maxApplicants: 10
        },
    ]

    return (
        <>
        <NavMenu>
        <LeftMenu>
            <span>{filteredData.length} results found</span>
        </LeftMenu>
        <RightMenu>
            <select value={filter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="keywords">Filter by keywords</option>
                <option value="other">Filter by other</option>
            </select>
            {filter === 'keywords' && <input type="text" placeholder="Enter keywords" onChange={handleKeywordSearch} />}
            {filter === 'other' && 
                <button onClick={openModal}>Advanced Filter</button>}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            <button>Cards</button>
            <button>Table</button>
        </RightMenu>
    </NavMenu>
        <Cards>
            {dummy.map((item, index) => (
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
    padding: 0px 30px;
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
