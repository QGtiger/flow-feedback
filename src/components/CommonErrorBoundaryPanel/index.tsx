import { Button, Result } from "antd";

export function CommonErrorBoundaryPanel(props: any) {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Result
        status="500"
        title={props.error.message || "something went wrong!"}
        subTitle={props.error.stack}
        extra={
          <Button
            type="primary"
            onClick={() => {
              window.location.reload();
            }}
          >
            刷新页面
          </Button>
        }
      />
    </div>
  );
}
