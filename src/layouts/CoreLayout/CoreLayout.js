import React from 'react'

export const CoreLayout = ({children}) => (
    <div className='core-layout'>
      {children}
    </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
