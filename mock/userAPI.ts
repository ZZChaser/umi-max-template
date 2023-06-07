// @ts-ignore
import { Request, Response } from 'express';

const list = [
  {
    id: '1665911092165050374',
    createDate: 1686019130000,
    account: 'admin',
    name: 'admin',
    mobile: null,
    email: null,
  },
  {
    id: '1665911092165050370',
    createDate: 1686019130000,
    account: 'zhao-test',
    name: 'zhao',
    mobile: null,
    email: null,
  },
  {
    id: '1665542590263451649',
    createDate: 1685931272000,
    account: 'liuwei-scyy',
    name: '刘伟-商场运营',
    mobile: '18515631985',
    email: '18515631985@163.com',
  },
];

export default {
  'GET /manage/user/detail/user': (req: Request, res: Response) => {
    res.status(200).send({
      success: true,
      message: '操作成功',
      code: 0,
      data: list[0],
    });
  },
  'POST /manage/user/login': (req: Request, res: Response) => {
    res.status(200).send({
      message: '',
      success: true,
      data: '---token---',
      code: 0,
    });
  },
  'POST /manage/user/logout': (req: Request, res: Response) => {
    res.status(200).send({
      message: '',
      success: true,
      data: null,
      code: 0,
    });
  },
  'PUT /manage/user/update/pwd': (req: Request, res: Response) => {
    setTimeout(() => {
      res.status(200).send({
        code: 0,
        data: true,
        message: 'string',
        success: true,
      });
    }, 3000);
  },
  'POST /manage/user/list': (req: any, res: any) => {
    res.json({
      message: '',
      success: true,
      data: { list, total: list.length },
      code: 0,
    });
  },
  'POST /manage/user/add': (req: any, res: any) => {
    res.json({
      message: '',
      success: true,
      data: null,
      code: 0,
    });
  },
  'GET /manage/user/detail/:id': (req: Request, res: Response) => {
    const id = req.params.id;
    res.status(200).send({
      message: '',
      success: true,
      data: list.find((item) => item.id === id),
      code: 0,
    });
  },
};
