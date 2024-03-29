import axios from "axios";
import { useRouter } from "next/router";

let data = []


const handleSubmit = async () => {
  console.log("Button clicked");

  try {
    const response = await axios.get("http://localhost:3000/api/test/result");
    console.log(response.data);

    data = response.data


  } catch (error) {
    console.error(error);
  }
};
export default handleSubmit;
