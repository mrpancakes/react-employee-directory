
function ResultRows(props) {
    return (
        <tbody>
            {props.results.map((result, index) => (
                <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{result.name.first}</td>
                    <td>{result.name.last}</td>
                    <td>{result.email}</td>
                    <td>{result.location.city}</td>
                    <td>{result.location.country}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default ResultRows;