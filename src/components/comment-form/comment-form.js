import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { Button, Form, Input } from 'antd';

const CLASS_NAME = 'Comment-form';
const cn = classnames.bind(styles);

export const CommentForm = ({ onSubmit, onClose }) => (
  <Form className={cn(CLASS_NAME)} onFinish={onSubmit}>
    <Form.Item
      name="author"
      rules={[{ required: true, message: 'Это поле обязательное' }]}
      className={cn(`${CLASS_NAME}__form-item`)}
    >
      <Input placeholder="Ваше имя" />
    </Form.Item>

    <Form.Item
      name="content"
      rules={[{ required: true, message: 'Это поле обязательное' }]}
      className={cn(`${CLASS_NAME}__form-item`)}
    >
      <Input.TextArea placeholder="Ваш комментарий" />
    </Form.Item>

    <Form.Item className={cn(`${CLASS_NAME}__form-item`)}>
      <Button type="default" htmlType="submit">
        Отправить
      </Button>

      <Button type="link" htmlType="button" onClick={onClose}>
        Отмена
      </Button>
    </Form.Item>
  </Form>
);
