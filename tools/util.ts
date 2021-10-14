import axios from 'axios'

interface IImasAPIResponse {
  results: {
    bindings: any[]
  }
}

export async function fetchIdolData(query: string) {
  const url = `https://sparql.crssnky.xyz/spql/imas/query?output=json&query=${encodeURIComponent(
    query
  )}`

  try {
    const res = await axios.get<IImasAPIResponse>(url)
    return res.data.results.bindings
  } catch (err) {
    console.error(err)
    throw err
  }
}
