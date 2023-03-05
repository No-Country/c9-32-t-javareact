const getUser = async (id:string) => {

  const response = await fetch('https://c9-32-t-javareact-production.up.railway.app/api/v1/users/' + id, {
    'mode': 'no-cors',
    'headers': {
      'Access-Control-Allow-Origin': '*',
    }
  })
  console.log(response)
 
  return response

}
export default getUser