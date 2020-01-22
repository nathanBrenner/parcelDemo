import * as React from 'react'
import styled from 'styled-components'

import Tab from './tab'

type Props = {
  activeTab: string
  children: React.ReactElement[]
};

export const Tabs: React.FunctionComponent<Props> = ({ activeTab, children }: Props): JSX.Element => {
  return (
    <div>
      <TabList>
        {children.map((child) => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
            />
          )
        })}
      </TabList>
      <div>
        {children.map((child, i) => {
          if (child.props.label !== activeTab) return undefined
          return <div key={i}>{child.props.children}</div>
        })}
      </div>
    </div>
  )
}

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`
