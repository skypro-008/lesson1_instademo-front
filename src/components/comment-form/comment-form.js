import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { Button, Form, Input } from 'antd';

const CLASS_NAME = 'Comment-form';
const cn = classnames.bind(styles);

export const CommentForm = ({ onSubmit, onClose }) => (
  <Form className={cn(CLASS_NAME)} onFinish={onSubmit}>
    <Form.Item
      name="author"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder="Ваше имя" />
    </Form.Item>

    <Form.Item name="content">
      <Input.TextArea placeholder="Ваш комментарий" />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Отправить
      </Button>

      <Button type="link" htmlType="button" onClick={onClose}>
        Отмена
      </Button>
    </Form.Item>
  </Form>
);
