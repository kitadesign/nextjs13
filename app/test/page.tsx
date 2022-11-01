import { FC, Suspense, use } from 'react'

const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve('name')}, 10000)
  })
}

const DataLoader: FC = () => {
  const name = use(getData())
  return (
    <div>{name}</div>
  )
}

export default function Test() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataLoader />
    </Suspense>
  )
}
