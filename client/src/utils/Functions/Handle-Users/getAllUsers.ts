const getAllUsers = async () => {

  const response = await fetch('https://c9-32-t-javareact-production.up.railway.app/api/v1/users', {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
  console.log(response)
 
  return response

}
export default getAllUsers