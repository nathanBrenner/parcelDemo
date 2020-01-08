import * as React from 'react'

type Props = {
  activeTab: string;
  label: string;
  onClick: (label: string) => void
}

const Tab: React.FunctionComponent<Props> = (props: Props) => {
  const onClick = (): void => {
    const { label, onClick } = props;
    onClick(label)
  }
  let className = 'tab-list-item';
  if (props.activeTab === props.label) {
    className += ' tab-list-active';
  }

  return (
    <li className={className} onClick={onClick}>{props.label}</li>
  )
}

export default Tab
