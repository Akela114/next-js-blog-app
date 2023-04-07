const MainPage = async () => {
  const staticData = await fetch(`${process.env.API_URL}/api/test`, {
    cache: 'force-cache',
  })
  const data = await staticData.json()
  return <div>{data.title}</div>
}

export default MainPage
