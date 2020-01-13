import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  activeTab: string;
  label: string;
}

const Tab: React.FunctionComponent<Props> = (props: Props) => {
  const TabComponent = props.activeTab === props.label ? TabListActive : TabListItem;
  return <TabComponent><Link to={`/tabs?activeTab=${props.label}`}>{props.label}</Link></TabComponent>
}

const TabListItem = styled.li`
    display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
`

const TabListActive = styled(TabListItem)`
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
`

export default Tab
