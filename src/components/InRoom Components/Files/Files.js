import React from 'react'
import FileCard from './FileCard'
import FileContent from './FileContent'
function FileCreate(File)
{
  return(
    <FileCard fileName={File.fileName}  fileType={File.fileType} creationDate={File.creationDate} fileLink={File.fileLink} />
  )
}

const Files = () => {
  return (
    <div>
     { FileContent.map(FileCreate)}
    </div>
  )
}

export default Files