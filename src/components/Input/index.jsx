import { useState } from "react";
import {
  Form,
  MyInput,
  LinkInput,
  ErrorMessage,
  Cards,
  Button,
} from "./styled";
import axios from "axios";

export function Input() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState([]);
  const [inputEmpty, setInputEmpty] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (longURL == "") {
      setInputEmpty(true);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${longURL}/very/long/link.html`
      );
      setShortURL([response.data.result.full_short_link]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <MyInput>
        <div>
          <LinkInput
            onChange={(event) => setLongURL(event.target.value)}
            value={longURL}
            isEmpty={inputEmpty}
            type="text"
            placeholder="Shorten a link here..."
          />
          <ErrorMessage isEmpty={inputEmpty}>Please add a link</ErrorMessage>
        </div>
        <button type="submit">Shorten It!</button>
      </MyInput>
      {shortURL.map((url, index) => (
        <Cards key={index}>
          <p>{longURL}</p>
          <hr />
          <div>
            <a href={url}>{url}</a>
            <Button
              type="button"
              onClick={() => setIsCopied(true)}
              copied={isCopied}
            >
              {isCopied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </Cards>
      ))}
    </Form>
  );
}
