import React from 'react';

  import MemberInfoCard from './MemberInfoCard';
  import NotSubmittedByContent from './NotSubmittedByContent.js'

function createContactCard(Contact)
{
    return(
        <MemberInfoCard name={Contact.name} email={Contact.email}/>
    );
}
const SubmittedBy = () => {
  return (
    <div>
    {NotSubmittedByContent.map(createContactCard)}
    </div>
  )
}

export default SubmittedBy