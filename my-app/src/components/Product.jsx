import Accordion from "react-bootstrap/Accordion";
export default function (props) {
  return (
    <div>
      <Accordion defaultActiveKey={props.id}>
        <Accordion.Item eventKey={props.id}>
          <Accordion.Header>{props.name + " " + props.price}</Accordion.Header>
          <Accordion.Body>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.firstname}</p>
            <p>{props.email}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
