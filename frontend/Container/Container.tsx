import React from 'react'
interface ChildrenProps {
    children:React.ReactNode
}
    

export default function Container({ children }: ChildrenProps) {
  return (
    <div >
        {children}
    </div>
  )
}
