'use client'
import { useState, useEffect } from 'react'

export default function WidgetViewer({ params }: { params: { id: string } }) {
  type Response = { data: string } | null
  const [response, setResponse] = useState<Response>(null)

  useEffect(() => {
    fetch(`/api/widget/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setResponse(data)
      })
  }, [params.id])


  if (!response) return <p>Loading...</p>
  if (!response.data) return <p>&quot;{params.id}&quot; is not a valid identifier</p>

  console.log(response.data)

  return (
    <div>
      <h1>{response.data}</h1>
    </div>
  )
}
