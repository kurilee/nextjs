function Master({ data }) {
    return (<div>{ data }</div>);
}

export async function getServerSideProps(context) {
    const res = await fetch('http://kuriz.oicp.io/master?pageNo=1&pageSize=30', { method: 'GET'});
    const data = await res.json();
  
    // Pass data to the page via props
    return { props: { data } };
}

export default Master;