import React from 'react';

  import MemberInfoCard from './MemberInfoCard';
  import SubmittedByContent from './SubmittedByContent'

function createContactCard(Contact)
{
    return(
        <MemberInfoCard name={Contact.name} email={Contact.email}/>
    );
}
const SubmittedBy = () => {
  return (
    <div>
    {SubmittedByContent.map(createContactCard)}
    </div>
  )
}

export default SubmittedBy