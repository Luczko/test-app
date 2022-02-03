import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const [sum, setSum] = useState(0);

  const popover = (
    <Popover id='termsandconditions-popover'>
      <Popover.Body>testowe termsy</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <>
      <Form>
        <Form.Group controlId='terms-and-conditions'>
          <Form.Check
            type='checkbox'
            checked={tcChecked}
            onChange={(e) => setTcChecked(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form>
      <Button variant='primary' onClick={() => setSum((prev) => prev + 1)}>
        Increment
      </Button>
      <Button variant='primary' onClick={() => setSum((prev) => prev - 1)}>
        Decrement
      </Button>
      <h2>Grand total: {sum}</h2>
    </>
  );
}
