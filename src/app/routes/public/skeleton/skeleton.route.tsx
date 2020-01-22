import * as React from 'react'
import styled, { css } from 'styled-components'

export const SkeletonRoute: React.FC<{}> = (): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => setIsLoading(is => !is), 2000)
    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <div>
      <h1><Skeleton condition={isLoading}>Hello</Skeleton></h1>
    </div>
  )
}

type Props = {
  condition: boolean
}

// @ts-ignore
const Skeleton: React.FC<Props> = ({
  condition,
  children
}: { condition: boolean, children: React.ReactChild | React.ReactChildren }) =>
  condition ? <SkeletonLine /> : <>{children}</>;

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: ${props =>
    props.translucent
      ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;
const SkeletonLine = ({translucent = false}) => (
  <SSkeletonLine translucent={translucent} />
);
