import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Result, Button } from 'antd';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <Result
      status={error.status}
      title={error.statusText}
      subTitle={error.data}
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}
