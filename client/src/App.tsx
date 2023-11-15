import useSWR from 'swr'

const fetcher = (url : any, opt : any) => fetch(url, opt).then(r => r.json())

export default function AppDemo() {

  const url = 'http://localhost:3001/api/hello'
  const opt = { headers : { 'Token': 'abc' } }

  const { data } = useSWR(url, (url) => fetcher(url, opt))  

  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}
