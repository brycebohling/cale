import { Button, Form, Input, Rate } from "antd";
import Page from "../components/Page";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React, { useState } from "react";

const { TextArea } = Input;

// const getBase64 = (img, callback) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   };
//   const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//       message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
//   };
//   const App = () => {
//     const [loading, setLoading] = useState(false);
//     const [imageUrl, setImageUrl] = useState();
//     const handleChange = (info) => {
//       if (info.file.status === 'uploading') {
//         setLoading(true);
//         return;
//       }
//     }
//       if (info.file.status === 'done') {
//         // Get this url from response in real world.
//         getBase64(info.file.originFileObj, (url) => {
//           setLoading(false);
//           setImageUrl(url);
//         });
//       }
//     };
//     const uploadButton = (
//       <div>
//         {loading ? <LoadingOutlined /> : <PlusOutlined />}
//         <div
//           style={{
//             marginTop: 8,
//           }}
//         >
//           Upload
//         </div>
//       </div>
//     );

function Log() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Page title="Log Today">
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item name="rating" label="rating" rules={[{ required: true }]}>
          <Rate allowHalf />
        </Form.Item>
        <Form.Item
          name="comments"
          label="Comments"
          rules={[{ required: false }]}
        >
          <TextArea
            // value={value}
            // onChange={e => setValue(e.target.value)}
            placeholder="Blah blah..."
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            >
            {imageUrl ? (
                <img
                src={imageUrl}
                alt="avatar"
                style={{
                    width: '100%',
                }}
                />
            ) : (
                uploadButton
            )}
    </Upload> */}
    </Page>
  );
}

export default Log;
