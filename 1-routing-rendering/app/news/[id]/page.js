export default async function NewsDetailPage({params}) {
  const {id} = await params;
  return (
    <>
      <h1>Detail news page</h1>
      <p>{id}</p>
    </>
  );
}
