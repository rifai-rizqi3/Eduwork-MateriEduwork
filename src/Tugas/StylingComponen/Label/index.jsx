import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Label() {
    return (
        <>
        <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
        >
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingComment" label="Comment">
            <Form.Control type="Comment" placeholder="Comment" />
        </FloatingLabel>
        </>
    );
}

export default Label;