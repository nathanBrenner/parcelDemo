import * as React from 'react'
import Tab from './tab'

type Props = {
  children: React.ReactElement[]
};

const Tabs: React.FunctionComponent<Props> = ({ children }: Props): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState(children[0].props.label)
  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={setActiveTab}
            />
          )
        })}
      </ol>
      <div className="tab-content">
        {children.map((child, i) => {
          if (child.props.label !== activeTab) return undefined
          return <div key={i}>{child.props.children}</div>
        })}
      </div>
    </div>
  )
}

export default Tabs
