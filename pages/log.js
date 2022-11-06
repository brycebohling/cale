import { Button, Form, Input, Rate } from 'antd';
import Page from '../components/Page';

const { TextArea } = Input;

function Log() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
      };
    
    const onReset = () => {
    form.resetFields();
    };   
    
    return <Page title="Log Today">
        <Form form={form} name="control-hooks" onFinish={onFinish} layout="vertical">
        <Form.Item name="rating" label="rating" rules={[{ required: true }]}>
            <Rate allowHalf  />
            </Form.Item>
            <Form.Item name="comments" label="Comments" rules={[{ required: false }]}>
            <TextArea
            // value={value}
            // onChange={e => setValue(e.target.value)}
            placeholder="Blah blah..."
            autoSize={{ minRows: 3, maxRows: 5 }} />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">
          Submit
        </Button>
        </Form.Item>
        </Form>    
    </Page>
}

export default Log;