import React from 'react';
import Issue from './Issue'

const IssueList = (props) => {
    return (
        <>
            
            {props.data.map((issue, index) => {
                return <Issue key={index} data={issue} />
            })}
        </>
    )
}

export default IssueList
