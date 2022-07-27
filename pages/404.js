import { Result, Button } from "antd";
import "antd/dist/antd.css";
import { Link } from 'next/link';

const Error = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link href={'/'}><Button type="primary">Back Home</Button></Link>}
    />
  );
};

export default Error;
